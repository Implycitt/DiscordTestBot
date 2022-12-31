const { ActivityType, Client } = require(`discord.js`);

const log = require(`../utils/log.js`);

/**
 * Refresh the activity of the client.
 * @param {Client} client The Discord client to use.
 */
const refreshActivity = async (client) => {
    client.user?.setPresence({
        activities: [{
            name: `Adi123`,
            type: ActivityType.Watching
        }],

        status: `dnd`
    });

    log(`green`, `Status updated.`);
};

module.exports = refreshActivity;
