// Karma configuration
// Generated on Fri Oct 17 2014 12:13:29 GMT+0300 (IDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],


    // list of files / patterns to load in the browser
    files: [
			'bower_components/jquery/dist/jquery.js',

			'app/scripts/**/*.js',

			'test/bower_components/mocha/mocha.js',
			'test/bower_components/chai/chai.js',
			'test/bower_components/chai-jquery/chai-jquery.js',
			'test/bower_components/sinon/index.js',
			'test/bower_components/sinon-chai/lib/sinon-chai.js',

      'test/fixtures/*.html',
      'test/karma/fixtures.js',
			'test/karma/init.js',
      'test/spec/**/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/fixtures/**/*.html': 'html2js'
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
