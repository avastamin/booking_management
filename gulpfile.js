const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */
elixir(function(mix) {
    var paths = {
        'jquery': '/vendor/bower_components/jquery/dist',
        'bootstrap': '/vendor/bower_components/bootstrap/dist',
        'angular': '/vendor/bower_components/angular',
        'fontawesome': '/vendor/bower_components/font-awesome',
        'moment': '/vendor/bower_components/moment/min',
        'fullcalendar': '/vendor/bower_components/fullcalendar/dist',
        'angular_route': '/vendor/bower_components/angular-route',
        'angular_bootstrap': '/vendor/bower_components/angular-bootstrap',
        'angular_ui_calendar': '/vendor/bower_components/angular-ui-calendar/src',
        'angular_moment_picker': '/vendor/bower_components/angular-moment-picker/dist'
    }

    mix.sass('app.scss')
        .styles([
            paths.bootstrap + "/css/bootstrap.css",
            paths.fontawesome + "/css/font-awesome.css",
            paths.fullcalendar + "/fullcalendar.css",
            paths.angular_moment_picker + "/angular-moment-picker.min.css"
        ],'public/css/all.css', './');

    mix.scripts([
        paths.jquery + "/jquery.min.js",
        paths.bootstrap + "/js/bootstrap.min.js",
        paths.moment + "/moment.min.js",
        paths.fullcalendar + "/fullcalendar.js",
        paths.angular + "/angular.min.js",
        paths.angular_route + "/angular-route.min.js",
        paths.angular_bootstrap + "/ui-bootstrap.min.js",
        paths.angular_bootstrap + "/ui-bootstrap-tpls.min.js",
        paths.angular_ui_calendar + "/calendar.js",
        paths.angular_moment_picker + "/angular-moment-picker.min.js"

    ],'public/js/all.js', './');

    mix.scripts([
        'app.js'
    ], 'public/js/app.js');

    mix.scripts([
        'controllers/eventsController.js'
    ], 'public/js/controllers.js');

    mix.scripts([
        'models/eventsModel.js'
    ], 'public/js/models.js');

    mix.version([
        'js/app.js',
        'js/models.js',
        'js/controllers.js',
    ]);

});