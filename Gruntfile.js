module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-html-build');
	grunt.initConfig({
		    htmlbuild: {
		        dist: {
		            src: 'index.html',
		            dest: 'samples/',
		            options: {
		                beautify: true,
		                prefix: '//some-cdn',
		                relative: true,
		                scripts: {
		                    'angular': [
		                        'bower_components/angular/angular.min.js'
		                    ]
		                },
		                styles: {
		                    'bootstrap': [
		                    	'bower_components/bootstrap/dist/css/bootstrap.min.css'
		                    ]
		                }
		            }
		        }
	    	}
	});
	grunt.registerTask('default', []);
}