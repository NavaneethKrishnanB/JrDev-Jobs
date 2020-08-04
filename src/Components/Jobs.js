import React from 'react'
import {Typography} from '@material-ui/core'
import Job from './Job';
class Jobs extends React.Component
{
   
    render()
    { console.log(this.props.jobs[0]);

        return (
            <div className="jobs">
                <Typography variant="h3">
                    Entry level Software Jobs
                </Typography>
                {
                    this.props.jobs.map((jb)=>{
                        return <Job job={jb}/>
                    })
                }
            </div>
        );
    }
}
export default Jobs;