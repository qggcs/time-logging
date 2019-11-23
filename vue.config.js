 module.exports = {
   lintOnSave: false,
   devServer: {
     overlay: {
       warning: false,
       errors: false
     }
   },

   chainWebpack: config => {
     // 修复HMR
     config.resolve.symlinks(true);
   },

   css: {
     extract: false
   }

 }
