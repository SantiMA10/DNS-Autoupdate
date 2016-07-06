var config = require(__dirname + '/../../config.json'),
    fs = require('fs'),
    ovh = null;

var findOVHConfig = function () {

    var ovhConfig = null;

    config.forEach(function (option) {

        if(option.provider === 'ovh'){
            ovhConfig = option.config;
        }

    });

    return ovhConfig;

};

var updateOVHConfig = function (consumerKey) {

    config.forEach(function (option, index) {

        if(option.provider === 'ovh'){
            config[index].config.consumerKey = consumerKey;
            fs.writeFileSync(__dirname + '/../../config.json', JSON.stringify(config, null, 4));
        }

    });
    
};

var auth = function(){

    var ovhConfig = findOVHConfig();

    if(!ovhConfig){
        console.error('Can not find your OVH config.')
    }

    var ovh = require('ovh')({
        endpoint: ovhConfig.endpoint,
        appKey: ovhConfig.appKey,
        appSecret: ovhConfig.appSecret
    });

    ovh.request('POST', '/auth/credential', {
        'accessRules': [
            { 'method': 'GET', 'path': '/*'},
            { 'method': 'PUT', 'path': '/*'}
        ]
    }, function (error, credential) {

        if(error){
            console.error(error);
            return;
        }

        updateOVHConfig(credential.consumerKey);

        console.log('Open ' + credential.validationUrl + ' to authorize the app');


    });

};

auth();