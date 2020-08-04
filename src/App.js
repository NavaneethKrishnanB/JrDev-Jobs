import React from 'react';
import Jobs from './Components/Jobs';
import axios from 'axios';

const JOB_API_URL = 'http://localhost:3001/jobs';

async function fetchJobs(updateCb)
{
   const res = await axios.get(JOB_API_URL);
   const jobs =JSON.parse(res.data);
   console.log("jobs",jobs);
   updateCb(jobs);
}
function App() {
  const [jobList,updateJobs] = React.useState([]);
  React.useEffect(()=>{
    fetchJobs(updateJobs);
  },[]);//second component is hooks to update
  return (
    <div className ="app">
      <Jobs jobs={jobList}/>
    </div>
  );
}

export default App;
