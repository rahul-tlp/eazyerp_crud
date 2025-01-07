module.exports = {
    apps: [
        {
            name: 'eazyErp',
            script: './dist/app.js',
            instances: 'max',
            exec_mode: 'cluster',
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
            // env_production: {
            //     NODE_ENV: 'production',
            //     PORT: process.env.PORT || 8080,
            // },
            // env_development: {
            //     NODE_ENV: 'development',
            //     PORT: process.env.PORT || 3000,
            // },
        },
    ],
};

