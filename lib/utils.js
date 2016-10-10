var jm = jm || {};
if (typeof module !== 'undefined' && module.exports) {
    jm = require('jm-core');
}

(function(){
    var sdk = jm.sdk || {};

    /**
     * utils对象
     * @class  utils
     */
    sdk.utils = {

        formatJSON: function(o) {
            return JSON.stringify(o, null, 2);
        }

    };
})();
