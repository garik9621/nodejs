const os = require('os')

console.log('Operation system: ', os.platform())
console.log('Архитектура процессора: ', os.arch())
console.log('Инфо процессора: ', os.cpus())
console.log('Свободная память: ', os.freemem())
console.log('Всего в памяти: ', os.totalmem())
console.log('Домашняя директория: ', os.homedir())
console.log('Включен: ', os.uptime())
