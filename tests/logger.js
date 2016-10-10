var jm = jm || {};
if (typeof module !== 'undefined' && module.exports) {
    jm = require('../lib');
}

(function(){
    var sdk = jm.sdk;

    {
        var logger = sdk.logger;
        ['trace','debug','info','warn','error'].forEach(function(level) {
            logger[level]('logger test: %s %s', level, Date.now());
        });
    }

    {
        var logger = sdk.getLogger('main');
        ['trace','debug','info','warn','error'].forEach(function(level) {
            logger[level]('logger test: %s %s', level, Date.now());
        });
    }

})();