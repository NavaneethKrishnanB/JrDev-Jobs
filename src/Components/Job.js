import React from 'react'
import {Card, Typography} from '@material-ui/core'
import '../App.css'
class Job extends React.Component
{
    render(){
        return (
            <Card>
            <div className="job">
                <Typography variant="h5">{this.props.job.title}</Typography>
                <Typography variant="h6">{this.props.job.company}</Typography>
        <Typography variant="h7">{this.props.job.location}</Typography>
            </div>
            <div>
                <Typography variant="h7">{this.props.job.created_at.split(' ').slice(0,3).join(' ')}</Typography>
            </div>
            </Card>
        );
    }
}
export default Job;