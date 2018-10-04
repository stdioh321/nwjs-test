var NwBuilder = require('nw-builder');
var nw = new NwBuilder({
    files: '*', // use the glob format
    platforms: ['win32','osx64'],
    version: '0.14.6',
    flavor: 'normal',
    appName:'NwMaluco',
    appVersion:'1.0',
    zip:true
});

// Log stuff you want
nw.on('log',  console.log);

nw.build().then(function () {
   console.log('all done!');
}).catch(function (error) {
    console.error(error);
});