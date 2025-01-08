module.exports = {
    apps: [
        {
            name: 'eazyErp',
            script: './dist/app.js',
            // instances: 'max',
            // exec_mode: 'cluster', To enable cluster mode uncomment this
            watch: true,
            env: {
                NODE_ENV: process.env.NODE_ENV,
                PORT: process.env.PORT || 3000,
                JWT_SECRET: process.env.JWT_SECRET,
                JWT_EXP: process.env.JWT_EXP,
                DB_USERNAME: process.env.DATABASE_USER,
                DB_PASS: process.env.DATABASE_PASSWORD,
                DB_NAME: process.env.DATABASE
            },
        },
    ],
};

