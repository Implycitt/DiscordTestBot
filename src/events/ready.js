const log = require(`../utils/log.js`);
const { logHeader } = require(`../utils/logExtra.js`);
const refreshActivity = require(`../utils/refreshActivity.js`);

module.exports = async (client) => {
    log(`green`, `Client has started, with ${client.users.cache.size} user(s) in ${client.guilds.cache.size} guild(s).`);
    logHeader();

    await refreshActivity(client);

    // setInterval(() => { void refreshActivity(client); }, 6e5);
};
