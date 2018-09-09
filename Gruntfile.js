module.exports = function (grunt) {

	grunt.initConfig({
		concat: {
			options : {
				sourceMap : false
			},
			js: {
			  src: ['src/js/*.js'],
			  dest: 'pub/js/script.js',
			},
		},
		sass: {
			options: {
                style: 'compressed'
            },
			dist: {
			  files: {      
			    'pub/css/main.min.css': 'src/sass/main.scss',
			  }
			}
		},
		uglify: {
			options : {
				sourceMap : false,
				compress : {},
				mangle : true
			},
		    dist: {
		      files: {
		        'pub/js/script.min.js': ['pub/js/script.js']
		      }
		    }
	  	},
	  	watch: {
		  	sass: {
			    files: ['src/sass/*.scss'],
			    tasks: ['sass'],
		 	},
	  	},
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['concat', 'sass', 'uglify']);
};