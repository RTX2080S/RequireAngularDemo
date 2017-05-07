'use strict';

require.config({
    paths: {
        "bootstrap": "../Scripts/bootstrap.min",
        "jquery": "../Scripts/jquery-3.1.1.min",
        "angular": "../Scripts/angular.min",
        "app": "app",
        "contactController": "controllers/contactController",
        "navbarController": "controllers/navbarController",
        "progressbarController": "controllers/progressbarController",
        "dateServices": "services/dateServices",
        "intlTelInputServices": "services/intlTelInputServices",
        "pNotifyServices": "services/pNotifyServices",
        "tabControlServices": "services/tabControlServices",
        "loadingoverlay": "../Scripts/jquery.loadingoverlay/loadingoverlay.min",
        "pnotify": "../Scripts/PNotify/pnotify.custom.min",
        "IntlTelInputLib": "../Scripts/intl-tel-input/js/intlTelInput",
        "intlTelInputUtilsScript": "../Scripts/intl-tel-input/js/utils",
        "bootstrapper": "bootstrapper"
    },

    /*
        Set up a shim to tell requirejs that the plugin depends on jQuery already being loaded.
        http://stackoverflow.com/questions/14756567/loading-jquery-plugins-with-require-js
    */
    shim: {
        'loadingoverlay': {
            deps: ['jquery'],
            exports: 'jQuery.fn.LoadingOverlay'
        },
        'angular': {
            exports: 'angular'
        },
        'bootstrap': {
            deps: ['jquery'],
            exports: 'Bootstrap'
        },
        'pnotify': {
            deps: ['jquery'],
            exports: 'pnotify'
        },
        'IntlTelInputLib': {
            deps: ['jquery'],
            exports: 'jQuery.fn.intlTelInput'
        }
    }
});

require(['bootstrapper']);
