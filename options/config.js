// CREATED BY NEOXY TEAM !!

const fs = require('fs')
const chalk = require('chalk')

// MY OTHERS
global.owner = ['6282274280853']
global.premium = ['6282274280853']
global.botname = 'Syahril Bot'
global.packname = 'Bot Whatsapp'
global.author = 'syahril uwwu'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.footer = '© Created By Syahril Uwwuu'
global.sp = '⭔'
global.limitawal = {
premium: "Unlimited",
free: 25
}

// THUMB
global.image = fs.readFileSync('./connect/image/logo.jpg')
global.thumbnail = fs.readFileSync('./connect/image/thumb.jpg')

// MESSAGE
global.mess = {
success: '✓ Success',
admin: 'Fitur Khusus Admin Group!',
botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
owner: 'Fitur Khusus Owner Bot',
group: 'Fitur Digunakan Hanya Untuk Group!',
private: 'Fitur Digunakan Hanya Untuk Private Chat!',
bot: 'Fitur Khusus Pengguna Nomor Bot',
wait: 'Loading...',
endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
