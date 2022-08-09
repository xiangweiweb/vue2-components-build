const path = require('path');

module.exports = {
    publicPath: '/vue2-components-build/',
    configureWebpack: {
        resolve: {
            alias: {
                'vue2-components-build': path.resolve(__dirname, '../'),
            }
        }
    },
    // 关闭eslint检查
    lintOnSave: false,
}
