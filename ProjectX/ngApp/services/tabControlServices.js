
define(['app'], function (app) {

    app.service('tabCtrlServices', function () {
        this.showTab = function (oldId, tabId) {
            var oldTabSelector = 'div[data-id="' + oldId + '"]';
            var newTabSelector = 'div[data-id="' + tabId + '"]';
            $(oldTabSelector).hide(250, function () {
                $(newTabSelector).show(250);
            });
        }
    });

});
