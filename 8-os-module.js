const os = require('os')

// info about current user
const user = os.userInfo()
// console.log(user);

// method returns the system uptime in seconds
secondsUptime = os.uptime
minutesUptime = Math.floor(secondsUptime/60)
hoursUptime = Math.floor(secondsUptime/(60*60))

console.log(`The System Uptime is ${secondsUptime} seconds (${minutesUptime} minutes and ${secondsUptime%60} seconds; ${hoursUptime} hours ${minutesUptime%60} minutes ${secondsUptime%60} seconds)`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);