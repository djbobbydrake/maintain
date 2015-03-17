module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: [
      'js/app.min.js'
    ],

    sass: {
      dist: {
        options: {
          includePaths: [
            'bower_components/foundation/scss',
            'bower_components/node-bourbon/node_modules/bourbon',
            require('node-bourbon').includePaths
          ],
          outputStyle: 'compressed',
          relativeAssets: true,
          noLineComments: true
        },
        files: {
          'css/app.css': 'scss/app.scss'
        }
      }
    },

    uglify: {
      my_target: {
        files: {
          'js/app.min.js':
          [
            'js/app.js',
            'js/ember-app.js',
            'js/router.js',
            'js/models/jobs.js',
            'js/models/interests.js',
            'js/controllers/resume_controller.js',
            'js/templates/helpers.js'
          ]
        }
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      scripts: {
        files: [
          'js/*'
        ],
        tasks: ['clean','uglify']
      },

      sass: {
        files: ['scss/*', 'bower_components/foundation/scss'],
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['sass','clean','uglify']);
  grunt.registerTask('default', ['build','watch']);
}
