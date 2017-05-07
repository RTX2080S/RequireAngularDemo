
define(['app', 'tabControlServices'], function (app) {

    app.controller("navbarCtrl", function ($scope, tabCtrlServices) {
        $scope.tabs = ["Home", "About", "Contact"];
        $scope.goToTab = function (i) {
            var oldTab = $scope.selectedTab;
            tabCtrlServices.showTab(oldTab, i);
            $scope.selectedTab = i;
        };
        $scope.selectedTab = 0;
    });

});
