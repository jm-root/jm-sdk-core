if (typeof module !== 'undefined' && module.exports) {
    require('./root');
    require('./consts');
    require('./utils');
    require('./ajax');
    require('./storage');
    module.exports = require('jm-core');
}
