module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                // 使用 loose 模式，避免产生副作用
                loose: true
            }
        ],
    ],
    plugins: [
        [
            '@babel/plugin-transform-runtime',
            {
                corejs: 3
            }
        ]
    ],
}
