let handler = async m => m.reply(`
╭─「 Donasi • Pulsa • gopay 」
│ •  [0889-0298-0987]
│ •  [0889-0298-0987]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
