const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: {
            '/api': {
                target: 'http://www.imooc.com',
                changeOrgin: true,
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    }
})