//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "obidikechikadibia@gmail.com";
global.location = "Ondo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://tkm:Aqi6tqwyv5IwDHncTtVi5XtMGZvfndDJ@dpg-cqahogtds78s739sl81g-a.oregon-postgres.render.com/takudzwa";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Toxic1239/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c21ae479aab857b4f8006.jpg";
global.devs = "2348086541281";
global.sudo = process.env.SUDO || "2348086541281";
global.owner = process.env.OWNER_NUMBER || "2348086541281";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/84a935261759d92084744.mp4";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://riasgremorybot-xcqv.onrender.com/";

global.SESSION_ID = 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUtKb3hLQ1ljMHlUOGFCdkpSUU1JeVNsOTJJK2o3RDZEL3pyelVrdUgxOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibm5xVVF0UW1wTU0vRG16TG9hN1R1cForTW5Rdms5UjNhV05QRzRrMXBBOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJR0RxMnE4WFd5eHZyUkZndFpSNmxOVE1MZzY0M2EwWnIrdWc4MVJKYVZzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvekNVZzVpRzRlNWFHci9qN3B5NUYydDhOWDFBMFl3cGdwc2NuOWk0T0hnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVGcS8wbktaQ1d6WFRTbEJwRHY3dVppVnBxN0grbVRRL1ZJbGJOWmFWRUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhveGVDa2Judk82aE0veXV4Y2ltdXZ6KzZ5V3lUL3RBbnBLUWVKNFdLeVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0poZ1dqYUNVd0Nod0lDZUUzbC9hZ09JK3VHZ1RQYU1VOE5XbXkwQ1VYaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRzdVZUpJNDl6OGVyQ0FGVi9ERlNwNHpYNDl3REJyRjJUZjQ3eUw2RnhIZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJGdGZzZXFjak8wbkFEMnl3MVFNTnc4U2M4N2tUb1drc1h3bzVEWFRWNzB4SHp3alNmMTlzSWZRT3JKK0JKUnBoUFJHWUxwUzEvazBIeHVFV1Y0MkNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ5LCJhZHZTZWNyZXRLZXkiOiJXbWMxZjNBZXNEMGF6RWVSc3RoV1pqMmFDZFZxTWEvZ0N6bk13a1pWaVlnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgxNjg3MTI3ODhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0FBRDFCN0U3NjZCNUQ4N0MwNDEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMzMwMzgwMX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiWl9CcGNQMzdTZW13dGtnTzhMaTR3dyIsInBob25lSWQiOiI3ZDkxNTQwOC04NWVjLTRhOGEtOTJkOS0wNjBjNjJkZTAxOGYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY2IxQ05YRHlkRTI2K2tvdE8xS0xjNFJpazlFPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFGWHNTSlVCVjZTcU9yU3BrNEsxVndmb3huUT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJNMjdFVk0yWiIsIm1lIjp7ImlkIjoiMjM0ODE2ODcxMjc4ODo1MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLgvJLwnZW48J2WmfCdlojwnZaN8J2WivCdlorwnZaK8J2WivCdlorwnZaK8J2WivCdlpzgvJIifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1ByZm9NRU9FT2k3d0xvR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InJsb0VRQzIxSi8rMTdSRVVXZGFjbmttMEpsdW5Ic204aTQzM3hwWE03d2c9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImN2YjNBeURYajRienJiL0J6QjJNcVpsbnA1WDFNTWZKUEFGbjFlRHozYWdsOWUrakUyU0hWNmp0THJDL2c2SGdmbDlwYUI0RUFDY3RSdGFRZ3NHcGdBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJFdDAwVzVXMFdXT24zZy9iRnpUN2hFL0VLYm5PTnJTOVQ3dUYwZTFkdzNxd0V0SDRNd2dXOVNZUDBjUGMwMzY1UmlOcmlYVTc0eHdKdlBkMWVibzNEZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxNjg3MTI3ODg6NTJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYTVhQkVBdHRTZi90ZTBSRkZuV25KNUp0Q1picHg3SnZJdU45OGFWek84SSJ9fV0sInBsYXRmb3JtIjoic21iaSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMzMwMzc5NywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNY0EifQ==
  process.env.SESSION_ID ||
  ""
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗧𝗢𝗫𝗫𝗜𝗖 𝗕𝗢𝗬",
  author: process.env.PACK_AUTHER || "ᴛᴏxxɪᴄ ᴍᴅ",
  packname: process.env.PACK_NAME || "𝗥𝗜𝗔𝗦 𝗠𝗗",
  botname: process.env.BOT_NAME || "𝗥𝗜𝗔𝗦 𝗚𝗥𝗘𝗠𝗢𝗥𝗬",
  ownername: process.env.OWNER_NAME || "ᴛᴏxxɪᴄ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-pBksWDImP6VuvvJTvqDsT3BlbkFJ2E8GhbpzjyRFkFaBI9Aj",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "toxicmd12",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RIAS").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
