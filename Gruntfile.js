module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    compass: {
      dist: {
        options: {
          sassDir: 'scss',
          cssDir: 'css',
          javascriptsDir: 'js',
          importPath: ['bower_components/foundation/scss'],
          outputStyle: 'compressed',
          relativeAssets: true,
          noLineComments: true
        }
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      css: {
        files: ['scss/*', 'bower_components/foundation/scss'],
        tasks: ['compass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['compass']);
  grunt.registerTask('default', ['build','watch']);
}
