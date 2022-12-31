const fs = require(`fs`);
const path = require(`path`);

/**
 * Recursively read a directory.
 * @author DamienVesper
 * @param {string} dir The absolute path to the directory.
 * @returns {string[]} An array representation of the directory's contents.
 */
const readDirectory = (dir) => {
    let results = [];
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const filePath = path.resolve(dir, file);
        const stat = fs.statSync(filePath);

        if (stat?.isDirectory()) {
            const res = readDirectory(filePath);
            results = results.concat(res);
        } else results.push(filePath);
    }

    return results;
};

module.exports = readDirectory;
