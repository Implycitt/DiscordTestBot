const config = require(`../../config/config`);

const {
    Client,
    ChannelType,
    Interaction
} = require(`discord.js`);

const log = require(`../utils/log.js`);

/**
 * Press E to Interact!
 * @param {Client} client The Discord client.
 * @param {Interaction} interaction The invoking interaction.
 */
module.exports = async (client, interaction) => {
    if (interaction.isChatInputCommand() && interaction.guild !== null && interaction.channel?.type === ChannelType.GuildText) {
        // Grab the command from the handler.
        const cmd = client.commands?.get(interaction.commandName);

        // If the command doesn't exist, return.
        if (cmd == null) return;

        // Execute the command.
        log(`magenta`, `${interaction.user.tag} [${interaction.user.id}] ran command ${interaction.commandName} in ${interaction.guild.name}.`);
        cmd.run(client, interaction);
    }
};
