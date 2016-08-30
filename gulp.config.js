module.exports = function() {
    var client = './src/client/';
    var server = './src/server/';
    var clientApp = client + '/app/';
    var temp = './.tmp/';

    var config = {

        /**
         * File Paths
         */
        alljs: [
            './src/**/*.js',
            './*.js'
        ],
        build: './build/',
        client: client,
        css: temp + 'styles.css',
        fonts: './bower_components/font-awesome/fonts/**/*.*',
        html: clientApp + '**/*.html',
        htmltemplates: clientApp + '**/*.html',
        images: client + 'images/**/*.*',
        index: client + 'index.html',
        js: [
            clientApp + '**/*.module.js',
            clientApp + '**/*.js',
            '!' + clientApp + '**/*spec.js'
        ],
        less: client + 'styles/styles.less',
        server: server,
        temp: temp,
        /**
         * template cache
         */
        templateCache: {
            file: 'templates.js',
            options: {
                module: 'app.core',
                standAlone: false,
                root: 'app/'
            }
        },
        /**
         * browser-sync
         */
        browserSyncDelay: 1000,
        /**
         * Bower and NPM locations
         */
        bower: {
            bowerJson: './bower.json',
            directory: './bower_components',
            ignorePath: '../..'
        },
        /**
         * Node Settings
         */
        defaultPort: 7203,
        nodeServer: './src/server/app.js'
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
