var jm = jm || {};
if (typeof module !== 'undefined' && module.exports) {
    jm = require('jm-core');
}

/**
 * sdk对象
 * @class  sdk
 */
(function(){
    jm.sdk = jm.sdk || {};
    var sdk = jm.sdk;
    jm.enableEvent(sdk);
    sdk.getLogger = jm.getLogger;
    sdk.logger = sdk.getLogger();

    /**
     * sdk对象
     * @function sdk#init
     * @param {Object} opts 配置
     */
    sdk.init = function(opts){
        opts = opts || {};
        sdk.emit('init', opts);
    };
})();

