const { Client } = require(`discord.js`);

const path = require(`path`);

const log = require(`../utils/log.js`);
const { logHeader } = require(`../utils/logExtra.js`);
const readDirectory = require(`../utils/readDirectory.js`);

/**
 * Load all commands.
 * @author DamienVesper
 * @param {Client} client The client to register commands to.
 */
const loadCommands = async (client) => {
    logHeader();

    // Initialize the commands array.
    client.commands = new Map();

    const files = readDirectory(path.resolve(__dirname, `../commands`));

    for (const file of files) {
        const fileName = (file.split(process.platform === `win32` ? `\\` : `/`).pop()).split(`.`)[0];

        const command = await require(file);
        if (command.cmd !== undefined) {
            log(`yellow`, `Loaded command ${fileName}.`);
            client.commands.set(fileName, {
                cmd: command.cmd,
                run: command.run
            });
        }
    }
};

/**
 * Load all events.
 * @author DamienVesper
 * @param {Client} client The client to register events to.
 */
const loadEvents = async (client) => {
    logHeader();

    // Initialize client events.
    client.events = new Map();

    const files = readDirectory(path.resolve(__dirname, `../events`));

    for (const file of files) {
        const fileName = (file.split(process.platform === `win32` ? `\\` : `/`).pop()).split(`.`)[0];
        log(`yellow`, `Loaded event ${fileName}.`);

        const event = await require(file);

        client.on(fileName, event.bind(null, client));
        client.events.set(fileName, { callback: event });
    }
};

module.exports = {
    loadCommands,
    loadEvents
};
