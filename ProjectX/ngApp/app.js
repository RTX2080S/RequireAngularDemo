
define(['angular', 'pnotify'], function (angular, pnotify) {
    
    pnotify.prototype.options.styling = "bootstrap3";

    var app = angular.module("ngApp", []);

    app.init = function () {
        angular.bootstrap(document, ['ngApp']);
    };

    return app;
});
