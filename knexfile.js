// Update with your config settings.

const config = require('./config')

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './config/database/db.sqlite'
    },
    migrations: {
      directory: './config/database/migrations'
    },
    useNullAsDefault: true
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: './config/database/test.sqlite'
    },
    migrations: {
      directory: './config/database/migrations'
    },
    seeds: {
      directory: './config/database/seeds'
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      host: config.dbhost,
      database: config.dbname,
      user:     config.dbuser,
      password: config.dbpwd
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './config/database/migrations'
    }
  }

};
