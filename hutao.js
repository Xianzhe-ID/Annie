import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
let res = await fetch('https://raw.githubusercontent.com/Xianzhe-ID/XianzheV1-MD/XianzheID/hutao.json')
if (!res.ok) throw await `${res.status} ${res.statusText}`;
let json = await res.json();
let url = json[Math.floor(Math.random() * json.length)]
await conn.sendButtonImg(m.chat, await (await fetch(url)).buffer(), 'Nih kak' , [['Next', '.Hutao', m]])
}
handler.command = /^(hutao)$/i
handler.tags = ['premium']
handler.help = ['hutao', 'premium']
handler.premium = true
export default handler