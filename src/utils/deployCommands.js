
const { REST } = require(`@discordjs/rest`);
const { Routes } = require(`discord-api-types/v10`);

const log = require(`./log`);

const deployCommands = async (client) => {
    if (process.env.DISCORD_TOKEN === undefined ||
        process.env.DISCORD_ID === undefined ||
        process.env.GUILD_ID === undefined ||
        client?.commands === undefined) return log(`yellow`, `Failed to deploy commands.`);

    const rest = new REST({ version: `10` }).setToken(process.env.DISCORD_TOKEN);

    const commands = [];

    for (const [name, command] of client.commands) {
        log(`yellow`, `Registering command ${name}...`);
        commands.push(command.cmd.toJSON());
    }

    // global commands
    // await rest.put(Routes.applicationCommands(process.env.DISCORD_ID), { body: commands })
    await rest.put(Routes.applicationGuildCommands(process.env.DISCORD_ID, process.env.GUILD_ID), { body: commands }) // local commands
        .then(() => {
            log(`green`, `Successfully registered application commands.`);
        }).catch(err => log(`red`, err));
};

module.exports = deployCommands;
