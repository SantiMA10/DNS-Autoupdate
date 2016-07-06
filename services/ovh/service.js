var updateDNS = function (ip, config) {

    var ovh = require('ovh')({

        endpoint: config.endpoint,
        appKey: config.appKey,
        appSecret: config.appSecret,
        consumerKey: config.consumerKey

    });

    if(checkConfig(config)){
        getDNSRecordsTypeA(ovh, config, ip);
    }

};

var getDNSRecordsTypeA = function (ovh, config, ip) {

    ovh.request('GET', '/domain/zone/' + config.domain + '/record?fieldType=A', function (err, dnsRecords) {

        if (err) {
            console.error('[DNSRecordsTypeA] ' + err);
            if (err == "403") {
                console.log("Maybe you are not authenticate, run 'node services/ovh/auth.js' to authenticate.")
            }
            return;
        }

        for (var i = 0; i < dnsRecords.length; i++) {

            getInfoOfDNSRecord(ovh, config, ip, dnsRecords[i]);

        }

    });

};

var getInfoOfDNSRecord = function (ovh, config, ip, dnsRecord) {

    ovh.request('GET', '/domain/zone/' + config.domain + '/record/' + dnsRecord, function (err, info) {

        if (err) {
            console.error('[InfoOfDNSRecord] ' + err);
            return;
        }

        if (isTheCorrectDomain(info, config, ip)) {

            updateDNSRecord(ovh, info, ip);

        }
    });

};

var isTheCorrectDomain = function (info, config, ip) {

    return (info.zone == config.domain && info.subDomain == config.subDomain) && info.target != ip;

};

var updateDNSRecord = function (ovh, info, ip) {

    ovh.request('PUT',
        '/domain/zone/' + info.zone + '/record/' + info.id, {"target": ip},
        function (err, success) {

            if (err) {
                console.error('[UpdateDNSRecord] ' + err);
                return;
            }

            if (success == null) {
                console.log('DNS change done!');
            }

        });

};

var checkConfig = function (config) {

    if (!config.endpoint || !config.appKey || !config.appSecret || !config.consumerKey || !config.domain) {
        console.log("Configuration for OVH is incomplete, please check it.");
        return false;
    }

    return true;
};

module.exports.updateDNS = updateDNS;