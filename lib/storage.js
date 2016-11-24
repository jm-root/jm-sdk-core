var jm = jm || {};
if (typeof module !== 'undefined' && module.exports) {
    jm = require('jm-core');
}

(function(){
    if(jm.sdk.storage) return;
    var sdk = jm.sdk;
    var isNode = false;
    var stores = {};
    if (typeof module !== 'undefined' && module.exports) {
        isNode = true;
    }

    sdk.storage = {
        setItem: function(k, v) {
            if(isNode){
                stores[k] = v;
            }else{
                localStorage.setItem(k,v);
            }
        },

        getItem: function(k) {
            if(isNode){
                return stores[k];
            }else{
                return localStorage.getItem(k);
            }
        },

        removeItem: function(k) {
            if(isNode){
                delete stores[k];
            }else{
                localStorage.removeItem(k);
            }
        }
    };

})();
