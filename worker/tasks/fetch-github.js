var Axios = require('axios');
const redis = require("redis");
const client = redis.createClient();
const { promisify } = require("util");
const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);
//getAsync.then(console.log).catch(console.error);
const URL = "https://jobs.github.com/positions.json";
module.exports = fetchGithub;
//run the function for non empty pages
async function fetchGithub()
{
let count = 1;
var onPage = 0;
const allJobs = [];
while(count>0){
 const jobs = await Axios(`${URL}?page=${onPage}`);
  count = jobs.data.length;
  console.log(count);
  for(i of jobs.data)
 allJobs.push(i);
 console.log(jobs.length);
 onPage++;
}
//console.log(allJobs);
const jrJobs = allJobs.filter((job)=>{
    var jobTitle = job.title.toLowerCase();
    

    if(jobTitle.includes('senior')||jobTitle.includes('sr.')||jobTitle.includes('manager'))
    return false;

    return true;
});
//console.log(jrJobs);
const success = await setAsync('github',JSON.stringify(jrJobs));
console.log({success});
}
