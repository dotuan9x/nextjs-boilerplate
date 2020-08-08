require('dotenv').config();

const APPLICATION_ENV = process.env.ENV || 'development';
const PORT = process.env.PORT || 8012;

const ENV = {
    NODE_ENV: APPLICATION_ENV,
    PORT: PORT,
    APPLICATION_ENV: APPLICATION_ENV
};

module.exports = {
    apps: [
        {
            name: `app:${APPLICATION_ENV}`,
            script: 'server.js',
            env: ENV,
            watch: false,
            max_memory_restart: '500M',
            log_date_format: 'YYYY-MM-DD HH:mm:ss'
        }
    ]
};
