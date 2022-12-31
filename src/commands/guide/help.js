const config = require(`../../../config/config`);

const { SlashCommandBuilder } = require(`@discordjs/builders`);
const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    Client,
    ChatInputCommandInteraction,
    EmbedBuilder
} = require(`discord.js`);

const cmd = new SlashCommandBuilder()
    .setName(`help`)
    .setDescription(`View the help menu.`);

/**
 * The actual code behind the command.
 * @param {Client} client The Discord client.
 * @param {ChatInputCommandInteraction} interaction The invoking interaction.
 */
const run = async (client, interaction) => {
    if (interaction.guild === null || interaction.guild.rulesChannel === null) return;

    const sEmbed = new EmbedBuilder()
        .setColor(config.colors.blue)
        .setAuthor({ name: `Help | Adi123`, iconURL: interaction.guild?.iconURL() ?? undefined, url: `https://example.com` })
        .setImage(`https://media.makeameme.org/created/i-dont-know-5ad107.jpg`)
        .setDescription(`A little confused on what to do here? Here's some useful links for you.`)
        .setTimestamp()
        .setFooter({ text: config.footer });

    const sRow = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
            .setURL(`https://example.com`)
            .setLabel(`Example`)
            .setStyle(ButtonStyle.Link),
        new ButtonBuilder()
            .setURL(`https://example.com`)
            .setLabel(`Example`)
            .setStyle(ButtonStyle.Link),
        new ButtonBuilder()
            .setURL(`https://example.com`)
            .setLabel(`Example`)
            .setStyle(ButtonStyle.Link)
    );

    await interaction.reply({
        embeds: [sEmbed],
        components: [sRow]
    });
};

module.exports = {
    cmd,
    run
};
