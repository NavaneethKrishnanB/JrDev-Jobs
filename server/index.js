const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const redis = require("redis");
const client = redis.createClient();
const { promisify } = require("util");
const getAsync = promisify(client.get).bind(client);
var port = 3001;
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.get('/jobs',async (req,res,next)=>{
    const jobs = await getAsync('github');
    console.log(JSON.parse(jobs).length);
    res.json(jobs);
})
app.listen(port,()=>console.log('listening'));