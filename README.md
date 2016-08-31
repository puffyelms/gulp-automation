# pluralsight-gulp
You've built your JavaScript application but how do you automate testing, code analysis, running it locally or deploying it? These redundant tasks can consume valuable time and resources. Stop working so hard and take advantage of JavaScript task automation using Gulp to streamline these tasks and give you back more time in the day. Studying this repo can help clarify how Gulp works, jump-start task automation with Gulp, find and resolve issues faster, and be a more productive.

## Requirements

- Install Node
	- on OSX install [home brew](http://brew.sh/) and type `brew install node`
	- on Windows install [chocolatey](https://chocolatey.org/) 
    - Read here for some [tips on Windows](http://jpapa.me/winnode)
    - open command prompt as administrator
        - type `choco install nodejs`
        - type `choco install nodejs.install`
- On OSX you can alleviate the need to run as sudo by [following these instructions](http://jpapa.me/nomoresudo). I highly recommend this step on OSX
- Open terminal
- Type `npm install -g node-inspector bower gulp`

## Quick Start
Prior to taking the course, clone this repo and run the content locally
```bash
$ npm install
$ bower install
$ npm start
```

Since libraries change so much and I had to revert back to gulp-inject to 1.5.0, I'm copying the current working library versions for npm and bower below.

{
  "name": "Pluralsight-Gulp",
  "version": "0.2.0",
  "description": "Starter Code for Pluralsight Course JavaScript Build Automation with Gulp.js",
  "authors": [
    "John Papa"
  ],
  "license": "MIT",
  "homepage": "https://github.com/johnpapa/pluralsight-gulp",
  "repository": {
    "type": "git",
    "url": "https://github.com/johnpapa/pluralsight-gulp.git"
  },
  "scripts": {
    "init": "npm install",
    "install": "bower install",
    "start": "node src/server/app.js"
  },
  "dependencies": {
    "body-parser": "^1.8.2",
    "compression": "^1.1.0",
    "cors": "^2.2.0",
    "express": "^4.9.3",
    "morgan": "^1.1.1",
    "serve-favicon": "^2.0.1"
  },
  "devDependencies": {
    "browser-sync": "^2.14.0",
    "chai": "^3.5.0",
    "del": "^2.2.2",
    "gulp": "^3.9.1",
    "gulp-angular-templatecache": "^2.0.0",
    "gulp-autoprefixer": "^3.1.1",
    "gulp-bump": "^2.4.0",
    "gulp-csso": "^2.0.0",
    "gulp-filter": "^4.0.0",
    "gulp-if": "^2.0.1",
    "gulp-imagemin": "^3.0.3",
    "gulp-inject": "~1.5.0",
    "gulp-jscs": "^4.0.0",
    "gulp-jshint": "^2.0.1",
    "gulp-less": "^3.1.0",
    "gulp-load-plugins": "^1.2.4",
    "gulp-minify-html": "^1.0.6",
    "gulp-ng-annotate": "^2.0.0",
    "gulp-nodemon": "^2.1.0",
    "gulp-plumber": "^1.1.0",
    "gulp-print": "^2.0.1",
    "gulp-rev": "^7.1.2",
    "gulp-rev-replace": "^0.4.3",
    "gulp-task-listing": "^1.0.1",
    "gulp-uglify": "^2.0.0",
    "gulp-useref": "^3.1.0",
    "gulp-util": "^3.0.7",
    "jshint": "^2.9.3",
    "jshint-stylish": "^2.2.1",
    "karma": "^1.2.0",
    "karma-chai": "^0.1.0",
    "karma-chai-sinon": "^0.1.5",
    "karma-chrome-launcher": "^2.0.0",
    "karma-coverage": "^1.1.1",
    "karma-growl-reporter": "^1.0.0",
    "karma-mocha": "^1.1.1",
    "karma-phantomjs-launcher": "^1.0.1",
    "karma-sinon": "^1.0.5",
    "lodash": "^4.15.0",
    "mocha": "^3.0.2",
    "mocha-clean": "^1.0.0",
    "node-notifier": "^4.6.1",
    "phantomjs": "^2.1.7",
    "sinon": "^1.17.5",
    "sinon-chai": "^2.8.0",
    "wiredep": "^4.0.0",
    "yargs": "^5.0.0"
  }
}


And here is the bower json....

{
  "name": "Pluralsight-Gulp",
  "version": "0.2.0",
  "description": "Starter Code for Pluralsight Course JavaScript Build Automation with Gulp.js",
  "authors": [
    "John Papa"
  ],
  "license": "MIT",
  "homepage": "https://github.com/johnpapa/pluralsight-gulp",
  "ignore": [
    "**/.*",
    "node_modules",
    "bower_components"
  ],
  "devDependencies": {
    "angular-mocks": "~1.3.8",
    "sinon": "http://sinonjs.org/releases/sinon-1.12.1.js",
    "bardjs": "~0.0.3"
  },
  "dependencies": {
    "jquery": "~2.1.1",
    "angular": "~1.3.8",
    "angular-sanitize": "~1.3.8",
    "extras.angular.plus": "~0.9.2",
    "font-awesome": "~4.2.0",
    "moment": "~2.8.4",
    "angular-ui-router": "~0.2.13",
    "toastr": "~2.1.0",
    "angular-animate": "~1.3.8",
    "bootstrap": "^3.3.7"
  },
  "overrides": {
    "bootstrap": {
      "main": [
        "less/bootstrap.less",
        "dist/css/bootstrap.css",
        "dist/js/bootstrap.js"
      ]
    }
  }
}
