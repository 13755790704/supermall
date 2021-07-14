module.exports = {
    publicPath: process.env.NODE_ENV === 'production'? '/production-sub-path/': '/',
    //构建项目生成的目录
    outputDir:  process.env.NODE_ENV === 'production'? 'dist' : 'devDist',
    //关闭语法的自动检测
    lintOnSave: false,
    // devServer: {
    //     overlay: {
    //       warnings: false,
    //       errors: true
    //     }
    //   }
}