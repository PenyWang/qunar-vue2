const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => { // 设置别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('styles',resolve('src/assets/style'))
      // 这里只写了两个个，你可以自己再加，按这种格式.set('', resolve(''))
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8080',
        pathReWrite: {
          '^/api': '/mock'
        }
      }
    }
  }
};
