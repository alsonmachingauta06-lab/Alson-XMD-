let handler = async (m, { conn }) => {
let text = `
✗ *ALSON XMD* ✗

*☆ Name:* Alson-XMD
*☆ Owner:* Alson Machingauta  
*☆ Version:* 3.0.7
*☆ Secure:* Anti-Ban + Anti-Delete
*☆ Tools:* 200+ Commands
*☆ Channel:* https://whatsapp.com/channel/0029Vb8pa9p5kg7CkpkxrR37
*☆ Github:* https://github.com/alsonmachingauta06-lab/Alson-XMD-
`
conn.sendMessage(m.chat, {
image: { url: 'https://ibb.co/Kz5V5x2F' }, 
caption: text
}, { quoted: m })
}

handler.help = ['repo']
handler.tags = ['info']
handler.command = ['repo', 'sc', 'script', 'github']

export default handler
