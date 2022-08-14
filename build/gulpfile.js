const path = require('path');
const gulp = require('gulp');
const  { src, dest, series } = require('gulp');
const babel = require('gulp-babel');
const less = require('gulp-less');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const merge2js = require('merge2');
const through2 = require('through2');

// 这里的babel只需要最简单的配置即可,打包成es
const babelConfig = {
    presets: [
        ['@babel/preset-env', {
            modules: false,
            loose: true
        }]
    ],
}

function resolve(dir) {
    const rootDir = path.resolve(__dirname, '../');
    return path.join(rootDir, dir);
}

function buildStyle() {
    // 保留less源文件
    const styleLess = src('../components/styles/*.less')
            .pipe(dest(resolve('lib/styles')))
            .pipe(src(['../components/**/style/*.less', '../components/index.less']))
            .pipe(dest(resolve('lib')));

    // 公共样式
    const commonCss = src('../components/styles/*.less')
        .pipe(less())
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(dest(resolve('/lib/styles')));

    // 组件的样式
    const componentCss = src('../components/**/style/index.less')
        .pipe(less())
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(dest(resolve('lib')));

    // 组件样式依赖 js文件打包
    const cssJs = src('../components/**/style/index.js')
        .pipe(babel(babelConfig))
        .pipe(
            through2.obj(function (file, encoding, next) {
                const content = file.contents.toString(encoding);
                // 导入的less，改成导入css
                file.contents = Buffer.from(
                    content.replace(/\/style\/?'/g, '/style/css\'').replace(/\.less/g, '.css')
                );
                this.push(file);
                next();
            })
        )
        .pipe(dest(resolve('lib')));

    // 所有组件的样式
    const wholeCss = src('../components/index.less')
        .pipe(less())
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(dest(resolve('lib')));
    // 所有组件的样式，压缩 打包到dist目录
    const wholeMin = src('../components/index.less')
        .pipe(less())
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(cssnano())
        .pipe(rename('vue2-components-build.min.css'))
        .pipe(dest(resolve('dist')));

    return merge2js([styleLess, commonCss, cssJs, componentCss, wholeCss, wholeMin]);
}

gulp.task('style', () => {
    return merge2js([buildStyle()])
});


gulp.task('default', series('style'), ()=> {
    console.log('finish');
});
