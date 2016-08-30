module.exports = function ( grunt ) {
  'use strict';

  require( 'time-grunt' )( grunt );

  require( 'jit-grunt' )( grunt, {
        scsslint: 'grunt-scss-lint'
      }
  );

  grunt.initConfig( {

        pkg: grunt.file.readJSON( 'package.json' ),

        // Grunt Templates

        // //  Details
        name:        'Divi Child Theme',
        themeSlug:  'divi-child-theme',
        textDomain: 'divi-child-theme',
        prefix:      'dct_',
        wp:     'wp', // WordPress directory

        // // Directories
        dirs: {
          js:     'src/assets/js',
          scss:   'src/assets/scss',
          images: 'src/assets/images',

        },

        'string-replace': {
          all: {
            files:   {
              'src/': [
                'src/**/*.scss',
                'src/**/*.css',
                'src/**/*.php',
                'src/**/*.js',
                'src/**/*.md',
              ],
            },
            options: {
              replacements: [
                {
                  pattern:     /Divi Child Theme/g,
                  replacement: '<%= name %>'
                },
                {
                  pattern:     /'divi-child-theme'/g,
                  replacement: '\'<%= textDomain %>\''
                },
                {
                  pattern:     /Text Domain:  divi-child-theme/g,
                  replacement: 'Text Domain:  <%= textDomain %>'
                },
                {
                  pattern:     /divi-child-theme/g,
                  replacement: '<%= themeSlug %>'
                },
                {
                  pattern:     /dct_/g,
                  replacement: '<%= prefix %>'
                },
              ],
            }
          },
        },

        // JavaScript Stuff

        // // JavaScript linting with jshint
        jshint: {
          options: {
            jshintrc: '.jshintrc',
            "force":  true
          },
          all:     [
            'Gruntfile.js',
            '<%= dirs.js %>/**/*.js'
          ]
        },

        // // uglify to concat, minify, and make source maps
        uglify: {
          main: {
            options: {
              sourceMap: 'dist/<%= themeSlug %>assets/js/main.js.map', //sourceMappingURL: 'main.js.map',
              //sourceMapPrefix:  2
            },
            files:   {
              'dist/<%= themeSlug %>/assets/js/main.min.js': [
                '<%= dirs.js %>/main.js'
              ]
            }
          }
        },

        // SCSS/CSS Stuff

        // // SCSS Linting
        scsslint: {
          allFiles: [
            '<%= dirs.scss %>/**/*.scss',
          ],
          options:  {
            config:         '.scss-lint.yml',
            reporterOutput: null,
          },
        },

        // // SCSS
        sass: {
          options: {
            update: true,
            style:  'expanded'
          },
          dist:    {
            files: {
              'dist/<%= themeSlug %>/style.human.css': '<%= dirs.scss %>/style.scss',
            }
          }
        },

        postcss: {
          styleHuman: {
            options: {
              map:        false,
              processors: [
                require( 'pixrem' )(),
                require( 'autoprefixer' )( {
                      browsers: [
                        'last 3 versions',
                        'ie 8',
                        'ie 9'
                      ]
                    }
                ),
              ]
            },
            src:     'dist/<%= themeSlug %>/style.human.css',
            dest:    'dist/<%= themeSlug %>/style.human.css',
          },

          styleMin: {
            options: {
              map:        false,
              processors: [
                require( 'cssnano' )()
              ]
            },
            src:     'dist/<%= themeSlug %>/style.human.css',
            dest:    'dist/<%= themeSlug %>/style.css',
          },
        },

        // image optimization
        imagemin: {
          dist: {
            options: {
              optimizationLevel: 7, // progressive:       true,
              // interlaced:        true
            },
            files:   [
              {
                expand: true,                  // Enable dynamic expansion
                cwd:    'src/assets/images/',                   // Src matches are relative to this path
                src:    [ '**/*.{png,jpg,gif}' ],   // Actual patterns to match
                dest:   'dist/<%= themeSlug %>/assets/images/'                  // Destination path prefix
              }
            ],
          }
        },

        // Copy Stuff using Sync
        sync: {
          dist: {
            files:   [
              {
                cwd:  'src',
                src:  [
                  '**',
                  '!**/assets/**'
                ],
                dest: 'dist/<%= themeSlug %>/',
              }
            ],
            verbose: true
          },
          js:   {
            files:   [
              {
                cwd:  'src/assets/js',
                src:  [
                  '**/*.js',
                ],
                dest: 'dist/<%= themeSlug %>/assets/js',
              }
            ],
            verbose: true
          },
          wp:   {
            files:   [
              {
                cwd:  'dist/<%= themeSlug %>',
                src:  [
                  '**/',
                ],
                dest: '<%= wp %>/wp-content/themes/<%= themeSlug %>/',
              }
            ],
            verbose: true
          }
        },

        watch: {
          scss: {
            files: [
              '<%= dirs.scss %>/**/*.scss'
            ],
            tasks: [ 'scss' ]
          },
        }
      }
  );

  grunt.registerTask( 'init', [
        'string-replace:all',
      ]
  );

  grunt.registerTask( 'js', [
        'jshint',
        'uglify',
      ]
  );

  grunt.registerTask( 'scss', [
        'scsslint',
        'sass',
        'postcss',
      ]
  );

  grunt.registerTask( 'images', [
        'imagemin',
      ]
  );

  grunt.registerTask( 'sync-dist', [
        'sync:dist',
        'sync:js',
        'sync:wp',
      ]
  );

  grunt.registerTask( 'build', [
        'scss',
        'js',
        'images',
        'sync-dist',
      ]
  );

  grunt.registerTask( 'default', [ 'watch' ] );

};