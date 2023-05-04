const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  
  // 单个开启代理服务器
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // }

  // 多个开启代理服务器 而可以指定是否请求服务器
  devServer: {
    proxy: {
      '/api1': {
        target: 'http://localhost:5000',
        pathRewrite:{'^/api1':''},   // 路径重写
        ws: true,
        changeOrigin: true
      },
      '/api2': {
        target: 'http://localhost:5001',
        ws:true,
        changeOrigin:true,
        pathRewrite:{'^/api2':''}
      }
    }
  }
})
