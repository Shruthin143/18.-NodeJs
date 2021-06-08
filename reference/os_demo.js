const os = require('os')

//Platform
console.log(os.platform());

// CPU arch
console.log(os.arch());

//CPU core
// console.log(os.cpus());

//Free memory and total memory
console.log(os.freemem());
console.log(os.totalmem());

//Home dir
console.log(os.homedir());