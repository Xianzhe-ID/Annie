<p align="center">
<a href="github.com/xianzhe-id"><img src="https://telegra.ph/file/ddda3405b847c58198684.jpg"></a>


</p>
<p align="center">
<a href="#"><img title="ANNIE BOT MULTI DEVICE" src="https://img.shields.io/badge/ANNIE BOT MULTI DEVICE-green?colorA=%23ff0000&colorB=%23017e40&style=for-the-badge"></a>
</p>
<p align="center">
<a href="https://github.com/DikaArdnt"><img title="Author" src="https://img.shields.io/badge/Author-Dika-red.svg?style=for-the-badge&logo=github"></a>
<a href="https://github.com/zeeone-ofc/Alphabot-Md"><img title="Recode" src="https://img.shields.io/badge/Recode-ZeeoneOfc-red.svg?style=for-the-badge&logo=github"></a>
<a href="https://github.com/Xianzhe-ID/Annie"><img title="Owner" src="https://img.shields.io/badge/Owner-Xianzhe ID-red.svg?style=for-the-badge&logo=github"></a>
</p>
<p align="center">
<a href="https://github.com/zeeone-ofc/followers"><img title="Followers" src="https://img.shields.io/github/followers/zeeone-ofc?color=red&style=flat-square"></a>
<a href="https://github.com/zeeone-ofc/Alphabot-Md/stargazers/"><img title="Stars" src="https://img.shields.io/github/stars/zeeone-ofc/Alphabot-Md?color=blue&style=flat-square"></a>
<a href="https://github.com/zeeone-ofc/Alphabot-Md/network/members"><img title="Forks" src="https://img.shields.io/github/forks/zeeone-ofc/Alphabot-Md?color=red&style=flat-square"></a>
<a href="https://github.com/zeeone-ofc/Alphabot-Md/watchers"><img title="Watching" src="https://img.shields.io/github/watchers/zeeone-ofc/Alphabot-Md?label=Watchers&color=blue&style=flat-square"></a>
<a href="https://github.com/zeeone-ofc/Alphabot-Md"><img title="Open Source" src="https://badges.frapsoft.com/os/v2/open-source.svg?v=103"></a>
<a href="https://github.com/zeeone-ofc/Alphabot-Md/"><img title="Size" src="https://img.shields.io/github/repo-size/zeeone-ofc/Alphabot-Md?style=flat-square&color=green"></a>
<a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fzeeone-ofc%2FAlphabot-Md&count_bg=%2379C83D&title_bg=%23555555&icon=probot.svg&icon_color=%2300FF6D&title=hits&edge_flat=false"/></a>
<a href="https://github.com/zeeone-ofc/Alphabot-Md/graphs/commit-activity"><img height="20" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg"></a>&nbsp;&nbsp;
</p>

<p align="center">
  <a href="https://github.com/zeeone-ofc/Alphabot-Md#requirements">Requirements</a> •
  <a href="https://github.com/zeeone-ofc/Alphabot-Md#instalasi">Installation</a> •
  <a href="https://github.com/zeeone-ofc/Alphabot-Md#thanks-to">Thanks to</a> •
  <a href="https://github.com/zeeone-ofc/Alphabot-Md#Official-Group"> Official Group Bot</a> •
  <a href="https://github.com/zeeone-ofc/Alphabot-Md#donate">Donate</a>
</p>
</div>


---

## Information
> AnnieBot-Md adalah bot yang awalnya memakai base dari [Chikabot](https://github.com/rashidsiregar28/chikabot/blob/main/README.md), sekarang pindah base [Hisoka-Morou](https://github.com/DikaArdnt/Hisoka-Morou). AnnieBot-Md is a bot whatsapp using a Baileys library.
> Jika kamu menemukan semacam bug, harap untuk dimaklumi sementara

## Bugs and Tester
* Jika kamu menemukan bug jangan lupa buka Issues
* Info Lebih Lanjut, Chat [owner-alpha](https://wa.me/62887435047326)

# Requirements
* [Node.js](https://nodejs.org/en/)
* [Git](https://git-scm.com/downloads)
* [FFmpeg](https://github.com/BtbN/FFmpeg-Builds/releases/download/autobuild-2020-12-08-13-03/ffmpeg-n4.3.1-26-gca55240b8c-win64-gpl-4.3.zip) (for sticker command)

# Instalasi
## Heroku Buildpack
```bash
heroku/nodejs
https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest
https://github.com/clhuang/heroku-buildpack-webp-binaries.git
```
## For Termux
```ts
termux-setup-storage
apt update && apt upgrade
pkg install nodejs git ffmpeg libwebp imagemagick
git clone https://github.com/zeeone-ofc/Alphabot-Md.git
cd Alphabot-Md
pkg install yarn
yarn install
npm i -g typescript
tsc -p ./node_modules/@adiwajshing/baileys-md/
rm -rf session.json
rm -rf store.json
npm start
```

## Edit file
`./settings.js`
```ts
global.autoread = true // auto read pesan / message
global.autorecording = true //status auto merekam ( auto record )
global.autoketik = true //status auto mengetik (auto typing)
global.available = true //status online (online)

// Other
global.botname = "https://bīt.ly/𝑨𝑵𝑵𝑰𝑬𝑬" //namabot kalian
global.ownername= "XianzheID" //nama kalian
global.myweb = "desty.page/xianzhe" //"https://api-hanifganz.herokuapp.com/" //bebas asal jan hapus
global.youtube = "https://youtube.com/channel/UCZr8qo58_6ZNhvt5pYVox9A" //bebas asal jan hapus
global.github = "https://github.com/Xianzhe-ID" //bebas
global.email = "xtc5ana@gmail.com" //bebas
global.region = "印度尼西亞" //bebas
global.ownernomer = "+6285326781097" // nomor wa kalian
global.ownernomerr = "+6283135923328" //nmr wa kalian
global.thumbnail =  "https://telegra.ph/file/f8e9f27ae13fc71e1fde7.jpg" //"./image/lol.jpg"  // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "https://telegra.ph/file/3a47f2dd05cb7d9376834.jpg" //"./image/donasi.jpg"  // foto donasi di folder image
global.background_welcome="https://telegra.ph/file/90a931648de597820bc08.jpg" // maks size 30kb, agar welcome image nya tdk delay
global.owner = ["6285326781097","6283135923328","6285358805324"] //ganti agar fitur owner bisa di gunakan
global.packname = 'instagram' //sticker wm ubah
global.author = '@xianzhe_xx' //sticker wm ganti nama kalian
global.sessionName = 'session'
```

## ```HOW TO DEPLOY```

[`Click Here For Tutorial`](https://youtu.be/SdKHkld2NcI)<br>

----------

<p align="center">
  <a href="https://youtu.be/SdKHkld2NcI"><img src="https://a.top4top.io/p_2081imvxm1.jpg" />
</p>

## Donate
- [Saweria](https://saweria.co/xianzhe)
- [Dana](https://j.top4top.io/p_20532posd1.jpg)
- [Ovo](https://h.top4top.io/p_2053vk0uw1.jpg)
- [Gopay](https://i.top4top.io/p_2053em3vh1.jpg)

# Official Group
- [Group 1](https://chat.whatsapp.com/EU890BcXjyBDkNaUT5WmYV)
- [Group 2](https://chat.whatsapp.com/E8NExJwIbhBJYzssfqJNsE)
- [Group 3](https://chat.whatsapp.com/KCSqHTky1apG7ApePsfiPy)
- [Group 4](https://chat.whatsapp.com/KwmvHr7VMFj7r5ry9xmMsU)
- [Group 5](https://chat.whatsapp.com/ELa7GhU0sP4EvXcVimQYtz)
- [Group 6](https://chat.whatsapp.com/HP5Pbp9MT0eIaC5lfJgw9A)

# Thanks to
<a href="https://github.com/DikaArdnt"><img src="https://github.com/DikaArdnt.png?size=100" width="100" height="100"></a> | [![NURUTOMO](https://github.com/Nurutomo.png?size=100)](https://github.com/Nurutomo) 
---|---
[Dika](https://github.com/DikaArdnt)  | [Nurutomo](https://github.com/Nurutomo)
Owner Hisoka-Morou | Constributor |
<a href="https://github.com/MhankBarBar"><img src="https://github.com/MhankBarBar.png?size=100" width="100" height="100"></a> | [![FATIH](https://github.com/fatiharridho.png?size=100)](https://github.com/fatiharridho) 
[Mhankbarbar](https://github.com/MhankBarBar)  | [Fatih A.](https://github.com/fatiharridho)
Constributor | For Help |
<a href="https://github.com/FERDIZ-afk"><img src="https://github.com/FERDIZ-afk.png?size=100" width="100" height="100"></a> | [![RASHID](http://github.com/rashidsiregar28.png?size=100)](http://github.com/rashidsiregar28) 
[Ferdiz](https://github.com/FERDIZ-afk)  | [Rashid](https://github.com/rashidsiregar28)
For Help | Owner Chikabot |
<a href="https://github.com/adiwajshing"><img src="https://github.com/adiwajshing.png?size=100" width="100" height="100"></a> | [![ZEEONE](http://github.com/zeeone-ofc.png?size=100)](http://github.com/zeeone-ofc) 
[Adiwajshing](https://github.com/adiwajshing) | [zeeone-ofc](https://zeeone-ofc.github.io)
Owner of Baileys | Owner of Api Alphabot |
<a href="https://github.com/Xianzhe-ID"><img src="https://telegra.ph/file/ddda3405b847c58198684.jpg?size=100" width="100" height="100"></a> | <a href="https://github.com/Xianzheid"><img src="https://github.com/xianzheid.png?size=100" width="100" height="100"></a> |
[XianzheID](https://github.com/Xianzhe-ID) | [Xianzhe2](https://github.com/Xianzheid) 
Recoder | Recoder 
