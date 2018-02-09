/**
 * Created by Luiz Eduardo de Christo
 * February 9th, 2019
 * Gruntfile.js
 */

module.exports = function(grunt) {

    grunt.initConfig({

        notify_hooks: {
            options: {
                enabled: true,
                title: 'Map, Filter, Reduce tutorial',
                duration: 5
            }
        },

        jshint: {
            files: ['Gruntfile.js', 'tests/**/*.spec.js', 'src/**/*.js'],
            options: {
                'esversion': 6,
            }
        },

        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-notify');

    grunt.task.run('notify_hooks');
    grunt.registerTask('default', ['jshint', 'watch']);
};