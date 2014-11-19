module.exports = function (grunt) {
	grunt.initConfig({
		less: {
			css: {
				files: {
					'css/custom.css': 'css/custom.less'
				}
			}
		},
		watch: {
			options: {
				livereload: true
			},
			css: {
				files: ['**/*.less'],
				tasks: ['compile']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['compile', 'watch']);
	grunt.registerTask('compile', ['less']);
};
