module.exports = {
    // some configurations
    build: {
        /*
        ** You can extend webpack config here
        */
        extend (config, { isDev, isClient }) {
            if (isClient) {
                config.node = {
                    fs: 'empty',
                    child_process: 'empty',
                    tls: 'empty',
                    net: 'empty',
                }
            }
        }
    },
    // other configurations
}