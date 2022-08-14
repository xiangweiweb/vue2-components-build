module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset'
    ],
    plugins: [
        [
            "import",
            {
                "libraryName": "vue2-components-build",
                // 默认就是lib 可不填
                "libraryDirectory": "lib",
                "style": true
            }
        ]
    ]
}
