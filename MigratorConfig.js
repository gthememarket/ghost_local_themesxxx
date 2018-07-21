var config = require('./core/server/config'),
    ghostVersion = require('./core/server/lib/ghost-version');

/**
 * knex-migrator can be used via CLI or within the application
 * when using the CLI, we need to ensure that our global overrides are triggered
 */
require('./core/server/overrides');

module.exports = {
    database: {
        client: 'sqlite3',
        connection: {
            filename: 'content/data/ghost-dev.db'
        }
    },
    migrationPath: process.cwd() + '/core/server/data/migrations',
    currentVersion: 'your-current-database-version'
}
