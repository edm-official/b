const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });


function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
	ALIVE_MSG: process.env.ALIVE_MSG === undefined ? 'Alive Now' : process.env.ALIVE_MSG,
	ALIVE_LOGO: process.env.ALIVE_LOGO === undefined ? 'https://img.phonandroid.com/2019/05/whatsapp-publicit%C3%A9s-2020.jpg' : process.env.ALIVE_LOGO,
        FOOTER: process.env.FOOTER === undefined ? 'CyberX' : process.env.FOOTER,
	OWNER_NAME: process.env.OWNER_NAME === undefined ? 'Buddhika' : process.env.OWNER_NAME,
	OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '94766866297' : process.env.OWNER_NUMBER,
	SONG_DOWN: process.env.SONG_DOWN === undefined ? '*📥 ඔබේ ගීතය Download කරමින් පවතී...*' : process.env.SONG_DOWN,
	SONG_UP: process.env.SONG_UP === undefined ? '*📤 ඔබේ ගීතය Upload කරමින් පවතී...*' : process.env.SONG_UP,
	VIDEO_DOWN: process.env.VIDEO_DOWN === undefined ? '*📥 ඔබේ වීඩියෝව Download කරමින් පවතී...*' : process.env.VIDEO_DOWN,
	VIDEO_UP: process.env.VIDEO_UP === undefined ? '*📤 ඔබේ වීඩියෝව Upload කරමින් පවතී...*' : process.env.VIDEO_UP,
        FILE_DOWN: process.env.FILE_DOWN === undefined ? '*📥Downloading your file...*' : process.env.FILE_DOWN,
        FILE_UP: process.env.FILE_UP === undefined ? '*📤Uploading your file...*' : process.env.FILE_UP,
	CAPTION: process.env.CAPTION === undefined ? 'EDM BOT ZONE*' : process.env.CAPTION,
	BUTTON: process.env.BUTTON === undefined ? 'Youtube' : process.env.BUTTON,
	BUTTONURL: process.env.BUTTON_URL === undefined ? 'youtube.com/' : process.env.BUTTONURL,
	onlygroup: process.env.onlygroup === undefined ? 'true' : process.env.onlygroup,
};
