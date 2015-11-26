module.exports = function( grunt ) {

	grunt.initConfig({
		babel: {
			options: {
				presets: [ 'react' ]
			},
			dist: {
				files: {
					'public/javascripts/spa.js': 'public/javascripts/spa.jsx'
				}
			}
		},

		uglify: {
			build: {
				src: 'public/javascripts/*.js',
				dest: 'public/build/app.min.js'
			}
		},

		watch: {
			scripts: {
				files: [ 'public/javascripts/*.jsx' ],
				tasks: [ 'build' ],
				options: {
					spawn: false
				}
			}
		}
	});


	grunt.loadNpmTasks( 'grunt-babel' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	//grunt.loadNpmTasks( 'grunt-contrib-uglify' );

	grunt.registerTask( 'build', [ 'babel' ] );
	grunt.registerTask( 'default', [ 'build', 'watch' ] );

};
