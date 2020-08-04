var CronJob = require('cron').CronJob;
var fetchGithub = require('./tasks/fetch-github');

 

// * specifies how to schedule
var job = new CronJob('* * * * *', fetchGithub, null, true, 'America/Los_Angeles');//will be valled every minute
job.start();