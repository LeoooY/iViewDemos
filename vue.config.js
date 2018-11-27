module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'cn',
      fallbackLocale: 'cn',
      localeDir: './src/locale',
      enableInSFC: true
    }
  },
  devServer:{
    open:false,
    host:"localhost",
    // host:"0.0.0.0" 真机测试
    // prot:8080,
    // https:true,
    // hotOnly:false,
    
    
    // proxy:{
    //   '/api':{
    //     target:"http://bipt.krclouds.com:8090/v1/Token/GetToken",
    //     ws:true,
    //     changeOrigin:true,
    //     // pathRewrite{

    //     // },
    //   }
    // }

  }
}
