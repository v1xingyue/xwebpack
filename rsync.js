const exec = require('child_process').exec;

function RsyncPlugin(options) {
    this.options = options;
}

RsyncPlugin.prototype.apply = function(compiler) {
  var me = this;
  compiler.hooks.afterEmit.tap('RsyncPlugin',function(){
       exec(me.options.cmd,function(err,stdout,stderr){
            console.log(stdout); 
       });
  });
};

module.exports = RsyncPlugin;
