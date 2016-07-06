var config = require(__dirname + '/config.json'),
    publicIp = require('public-ip');

publicIp.v4().then(function(ip){

    config.forEach(function (serviceInfo) {

        var service = require(__dirname + '/services/' + serviceInfo.provider + '/service.js');
        service.updateDNS(ip, serviceInfo.config);
        
    });

});