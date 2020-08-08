require('dotenv').config();

const APPLICATION_ENV = process.env.ENV || 'production';
const PORT = process.env.PORT || 8020;

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
            instances : '4',
            exec_mode : 'cluster',
            env: ENV,
            watch: false,
            max_memory_restart: '500M',
            log_date_format: 'YYYY-MM-DD HH:mm:ss'
        }
    ]
};
