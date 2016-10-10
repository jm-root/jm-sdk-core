var jm = jm || {};
if (typeof module !== 'undefined' && module.exports) {
    jm = require('jm-ajax');
}

(function(){
    var sdk = jm.sdk || {};
    sdk.$ = {};
    var $ = sdk.$;
    var ERR = sdk.consts.ERR;
    $.ajax = jm.ajax;

    if(!$.get){
        // alias methods
        ['get','post','put','delete','patch'].forEach(function(method) {
            $[method] = function(o) {
                o.type = method;
                $.ajax(o);
            };
        });
    }

    /**
     * 为obj对象增加快捷ajax接口
     * @function sdk#enableAjax
     * @param {Object} obj 对象
     * @param {Object} [opts={}] 参数
     * @example
     * opts参数:{
         *  ignoreDocErr: 是否忽略返回的doc中的err(可选, 默认false, 不忽略, 检测doc.err不为空时, 生成Error)
         * }
     */
    sdk.enableAjax = jm.enableAjax;

})();
