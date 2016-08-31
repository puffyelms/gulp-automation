module.exports = function() {
    var client = './src/client/';
    var server = './src/server/';
    var clientApp = client + '/app/';
    var report = '/report/';
    var root = './';
    var temp = './.tmp/';
    var wiredep = require('wiredep');
    var bowerFiles = wiredep({devDependencies: true})['js'];

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
        report: report,
        root: root,
        server: server,
        temp: temp,
        /**
         * template cache
         */
        optimized: {
            app: 'app.js',
            lib: 'lib.js',
            css: '*.css'
        },
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
        packages: [
            './package.json',
            './bower.json'
        ],
        /**
         * Karma and Testing Settings
         */
        specHelpers: [client + 'test-helpers/*.js'],
        serverIntegrationSpecs: [client + 'tests/server-integration/**/*.spec.js'],
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

    config.karma = getKarmaOptions();

    return config;

    //////////////////

    function getKarmaOptions() {
        var options = {
            files: [].concat(
                bowerFiles,
                config.specHelpers,
                client + '**/*.module.js',
                client + '**/*.js',
                temp + config.templateCache.file,
                config.serverIntegrationSpecs
            ),
            exclude: [],
            coverage: {
                dir: report + 'coverage',
                reporters: [
                    {type: 'html', subdir: 'report-html'},
                    {type: 'lcov', subdir: 'report-lcov'},
                    {type: 'text-summary'}
                ]
            },
            preprocessors: {}
        };
        options.preprocessors[clientApp + '**/!(*.spec)+(.js)'] = ['coverage'];
        return options;
    }
};
