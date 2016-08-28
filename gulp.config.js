module.exports = function() {
    var client = './src/client/';
    return {

        /**
         * File Paths
         */

        // temp directory
        temp: './.tmp/',
        // all js files
        alljs: [
            './src/**/*.js',
            './*.js'
        ],
        less: client + 'styles/styles.less'
    };
};
