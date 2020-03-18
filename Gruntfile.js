module.exports = function (grunt) {
    grunt.initConfig({
        htmlmin: {
            options: {
                collapseWhitespace: true,
                preserveLineBreaks: false
            },
            files: {
                src: './demo.html',
                dest: 'dist/demo.html'
            }
        },
        cssmin: {
            'dist/demo.css': 'demo.css'
        },
        uglify: {
            release: {
                files: {
                    'dist/demo.min.js': 'demo.js',
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['uglify', 'cssmin', 'htmlmin']);
};
