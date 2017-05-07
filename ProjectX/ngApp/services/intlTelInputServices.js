
define(['app', 'IntlTelInputLib', 'intlTelInputUtilsScript'], function (app) {

    app.service('intlTelInput', function () {
        this.initialize = function (targetId) {
            $(targetId).intlTelInput({
                preferredCountries: ['cn', 'nz', 'fj', 'pf']
            });
        }

        this.getNumber = function (targetId) {
            return $(targetId).intlTelInput("getNumber");
        }
    });

});
