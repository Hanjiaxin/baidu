module.exports = function (grunt) {
    grunt.initConfig({
        htmlmin: {
            options: {
                collapseWhitespace: true,
                preserveLineBreaks: false
            },
            files: {
                src: 'dist/demo.html',
                dest: 'dist/demo.html'
            }
        },
        cssmin: {
            'dist/demo.css': 'demo.css'
        },
        uglify: {
            release: {
                files: {
                    'dist/demo.min.js': 'dist/demo.js',
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('release', ['uglify', 'cssmin', 'htmlmin']);
};
