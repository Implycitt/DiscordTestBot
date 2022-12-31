const {
    Client,
    GatewayIntentBits,
    Partials
} = require(`discord.js`);

const loader = require(`./modules/loader.js`);

const log = require(`./utils/log.js`);
const logExtra = require(`./utils/logExtra.js`);
const deployCommands = require(`./utils/deployCommands.js`);

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.MessageContent
    ],
    partials: [
        Partials.Channel
    ]
});

const main = async () => {
    console.clear();
    logExtra.logSplash();

    await loader.loadCommands(client);
    await loader.loadEvents(client);

    if (process.env.NODE_ENV === `development`) {
        logExtra.logHeader();
        await deployCommands(client);
    }

    logExtra.logHeader();
    await client.login(process.env.DISCORD_TOKEN).catch(() => log(`red`, `Failed to authenticate client with application.`));
};

void main();
