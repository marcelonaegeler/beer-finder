module.exports = function( grunt ) {

  grunt.initConfig({
    reactjsx: {
      all: {
        files: [{
          expand: true,
          src: [
            'public/javascripts/*.jsx'
          ],
          ext: '.js'
        }]
      },
    },

		react: {
			single_file_output: {
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
          spawn: false,
        },
      },
    },    
  });

  grunt.loadNpmTasks( 'grunt-react' );
  grunt.loadNpmTasks( 'grunt-contrib-watch' );
  //grunt.loadNpmTasks( 'grunt-contrib-uglify' );

  grunt.registerTask( 'build', [ 'react' ] );
  grunt.registerTask( 'default', [ 'build', 'watch' ] );

};
