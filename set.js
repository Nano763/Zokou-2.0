const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || '> The Player:
Zokou-MD-WHATSAPP-BOT;;;=>eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUVBpS2VLMHNqYTJrZEpWaXlHNGNudWZkb2ZSVDNENHBORkkyYm1CL0RuWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEZyYWttejcwU0Z5c1NjOEJMTzMrRHlYQVZFZGViUE1kOWt3dDdubnN5OD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBSWpKU21DQThaVVI5QkQ1ditTeEhYNGxDYVU3V085MDExMnRKYmdXVG5vPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4Wlg1SHlvR1VLTXdZTGl6bXo0UWtjRC9mTWRWQzlKNjRXNGRQRnlqWmcwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhJZzJQeTF5WUNMZk5qNGN0aXU2Nk1yaXNuSU04aWtDVS9aTmlKSkhTV0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InB2R1J2ZytuNHY2Vmptamx2QVdrZW5Kc2l5eUsxSnRtZmR2UDF5NXphblk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0VuOWNETUJMc255KzU0eDF5UUU1TnRmNllKVEFZdGc1ajg0NGN5bjgzaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibmQ4RFBIVG5hTDEraEJtbVZObnpGK1ZLVEw5T25EVFB4TkJBT0R2YlUxWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZ0UWJlMmM3eHU3dXQyY2t2L2ViN0dpYm90Z3ZxcXdwWERZcVA4aXpXQTFremdpVWJBa092cmFvd1RicTk2bk9EL08vNGhWNVZGVTJyQkZvUjkwZGpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA1LCJhZHZTZWNyZXRLZXkiOiJkYU1nWkdCNCtycUhEcnBSSkpUelBxNVA2eFNCNEhROC8yU1Ewd2lEaGdRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJfS05wclhnelI1S2QzSWV4TFpadjBRIiwicGhvbmVJZCI6IjhjOTc1MTU3LWFlY2MtNGFlNy1hN2QyLWZlZTRmMTQ2Y2JmYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCR2UrWURUeUdCRHZZRXFtVVBFVlJsL0pnems9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxhK284OFpuY2hRcDJGQStjeWgwYVUxcjhhWT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tXZmxlRU5FT3I2d2JRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlorUjlScndPajBLWXY1Q0pYbDlsb3ZENzlaQUNnOUswRkczcGV5WFRjQWc9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im1td29mQ3RpcUEvMmQ1WXh1bmIySWFpTk15UCswdG0rS2xxblFOeTJGcG92T1pIWXVDUW5TczdmSEZwK3RTUFQyL0FFTktHaDJtd1FzSEFXY2FBS0RnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJTOVJObEVPYjZkZ3kzZ3BMRlJVTzZhcFBGYkJta1lvbVNhWDZvVUh5YkhJRnViWGNNN1lSWHhsdU0wMzJ5Sis4U3hTOXdxM00zb0NvVG9CVHZ6MzRpQT09In0sIm1lIjp7ImlkIjoiMTgyOTUwOTQ0MzM6MTBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2au/CdkJLwnZCU8J2aqfCdmqvwnZCK8J2asC3wnZq48J2Qi/CdkJjwnZqqIiwibGlkIjoiMzg1MjIwODE4MDg0MTg6MTBAbGlkIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjE4Mjk1MDk0NDMzOjEwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldma2ZVYThEbzlDbUwrUWlWNWZaYUx3Ky9XUUFvUFN0QlJ0NlhzbDAzQUkifX1dLCJwbGF0Zm9ybSI6InNtYmkiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lEQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDc0NTMyNCwibGFzdFByb3BIYXNoIjoiNE5kZTNlIn0=
',
     ETAT:process.env.1,
    PREFIXE: process.env.PREFIXE,
    NOM_OWNER: process.env.NOM_OWNER || "Zokou-Md",
    NUMERO_OWNER : process.env.18295094433,              
    LECTURE_AUTO_STATUS: process.env.LECTURE_AUTO_STATUS || "oui",
    TELECHARGER_AUTO_STATUS: process.env.TELECHARGER_AUTO_STATUS || 'oui',
    MODE: process.env.MODE_PUBLIC,
    PM_PERMIT: process.env.PM_PERMIT || 'oui',
    BOT : process.env.NOM_BOT || 'Zokou_MD',
    URL : process.env.LIENS_MENU || 'https://static.animecorner.me/2023/08/op2.jpg',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    //GPT : process.env.OPENAI_API_KEY,
    DP : process.env.STARTING_BOT_MESSAGE || 'oui',
    ATD : process.env.ANTI_DELETE_MESSAGE || 'oui',            
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, {
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true, rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
