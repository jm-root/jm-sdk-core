var jm = jm || {};
if (typeof module !== 'undefined' && module.exports) {
    jm = require('jm-core');
}

(function(){
    if(jm.sdk.consts) return;
    var sdk = jm.sdk;

    sdk.consts = {
        ERR: jm.ERR
    };

})();
