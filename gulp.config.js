module.exports = function() {
    var client = './src/client/';
    var clientApp = client + '/app/';
    var temp = './.tmp/';

    var config = {
        temp: temp,

        /**
         * File Paths
         */
        alljs: [
            './src/**/*.js',
            './*.js'
        ],
        client: client,
        css: temp + 'styles.css',
        index: client + 'index.html',
        js: [
            clientApp + '**/*.module.js',
            clientApp + '**/*.js',
            '!' + clientApp + '**/*spec.js'
        ],
        less: client + 'styles/styles.less',

        /**
         * Bower and NPM locations
         */
        bower: {
            bowerJson: './bower.json',
            directory: './bower_components',
            ignorePath: '../..'
        }
    };

    config.getWiredepDefaultOptions = function() {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath
        };
        return options;
    };

    return config;
};
