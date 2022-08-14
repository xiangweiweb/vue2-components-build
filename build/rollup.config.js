const fs = require('fs');
const path = require('path');
const { getBabelInputPlugin } = require('@rollup/plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const alias = require('@rollup/plugin-alias');
const vue = require('rollup-plugin-vue');
const { terser } = require('rollup-plugin-terser');
const babelConfig = require('../babel.config.js');

function resolvePath(dir) {
    return path.resolve(__dirname, '../', dir);
};

const commonPlugins = [
    resolve({
        extensions: ['.js', '.vue', '.json']
    }),
    vue(),
    commonjs(),
    alias({
        entries: [
            { find: 'vue2-components-build/components', replacement: path.resolve(__dirname, '../components') },
            { find: 'vue2-components-build/src', replacement: path.resolve(__dirname, '../src') },
        ]
    }),
    getBabelInputPlugin({
        babelHelpers: 'runtime',
        ...babelConfig,
    }),
];

function createESConfig(entry, outputFilePath, externals) {
    return {
        input: entry,
        output: {
            file: `lib/${outputFilePath}`,
            format: 'es',
            exports: 'auto',
            paths: (id) => {
                // 文件引用修改：源文件路径 -> 打包后的路径
                const newId = id.replace(/^vue2-components-build\/(components|src)\/(.*)/, function(_raw, _dirName, filePath) {
                    return 'vue2-components-build/lib/' + filePath;
                });
                return newId;
            }
        },
        external: externals,
        plugins: commonPlugins
    }
}


/**
 * 组件打包
 * @returns
 */
function collectComponents(collection) {
    const componentsDir = resolvePath('components');
    const dirs = fs.readdirSync(componentsDir);
    dirs.forEach((componentName) => {
        // 其他地方会处理
        if(/.(js|less)$/.test(componentName) || componentName === 'styles') return;
        collection.push({
            entry: path.join(componentsDir, componentName, 'index.js'),
            // 直接放到lib目录下
            outputFile: path.join(componentName, 'index.js'),
        });
    });
}


/**
 * components中依赖的项目的模块
 */
function collectSrc(collection) {
    const srcDir = resolvePath('src');
    const dirs = fs.readdirSync(srcDir);
    dirs.forEach((categoryName) => {
        // 比如 src/utils
        const categoryDir = path.join(srcDir, categoryName);
        const fileNames = fs.readdirSync(categoryDir);
        fileNames.forEach((fileName) => {
            collection.push({
                entry: path.join(categoryDir, fileName),
                outputFile: path.join(categoryName, fileName),
            });
        });
    });
}


/**
 * 按需加载的打包
 * @returns
 */
function getESConfigs() {
    const list = [];
    collectComponents(list);
    collectSrc(list);
    const externals = (id) => {
        return /^vue2-components-build/.test(id) ||
            /^vue$/.test(id) ||
            /^vue-runtime-helpers/.test(id) ||
            /^@babel\/runtime/.test(id) ||
            /^@babel\/helpers/.test(id);
    };
    let result = list.map(({entry, outputFile}) => {
        return createESConfig(entry, outputFile, externals);
    });
    // 所有组件
    const entry = resolvePath('components') + '/index.js';
    const indexExternals = () => true;
    result.push(createESConfig(entry, 'index.js', indexExternals));

    return result;
}

/**
 * umd，导出所有的组件 unpkg，可直接用script引用
 * @returns
 */
function getUMDConfig() {
    const entry = resolvePath('components') + '/index.js';
    return {
        input: entry,
        output: {
            name: 'vue2-components-build',
            file: 'dist/vue2-components-build.min.js',
            format: 'umd',
            exports: 'auto',
        },
        // terser压缩代码
        plugins: commonPlugins.concat(terser()),
    }
}


const esConfigs = getESConfigs();
const umdConfig = getUMDConfig();

module.exports = esConfigs.concat(umdConfig);
