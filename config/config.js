const { version } = require(`../package.json`)

const channels = require(`./channels.js`);
const colors = require(`./colors.js`);
const { emojis, emojiIDs } = require(`./emojis.js`);
const roles = require(`./roles.js`);

const dotenv = require(`dotenv`);
dotenv.config();

const config = {
    developerID: `382191956664647680`,

    channels,
    colors,
    emojis,
    emojiIDs,
    roles,

    version,
    footer: `Created by имплицитный#2069 | v${version}`
};

module.exports = config;
