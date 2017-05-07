
define(['app', 'pNotifyServices', 'intlTelInputServices', 'loadingoverlay'], function (app) {
    
    app.controller("contactCtrl", function ($scope, $http, pNotify, intlTelInput) {
        // Initialize the intlTelInput
        intlTelInput.initialize("#inputPhone");
        
        $scope.user = {};

        $scope.Submit = function () {
            $.LoadingOverlay("show");

            const pnotifyDelay = 500;
            var intlNumber = intlTelInput.getNumber("#inputPhone");
            $scope.user.Phone = intlNumber;

            $http({
                method: 'POST',
                url: "/api/VisitorNotes/Save",
                data: $scope.user
            }).then(function successCallback(response) {
                $.LoadingOverlay("hide");
                setTimeout(function () {
                    response.data === 0 && pNotify.showNotification('Success! ', 'Your notes have been sent! ', 'success');
                    response.data > 0 && pNotify.showNotification('Failed! ', 'Server error. Please check your input! ', 'fail');
                }, pnotifyDelay);                
            }, function errorCallback(response) {            
                $.LoadingOverlay("hide");
                setTimeout(function () {
                    pNotify.showNotification('Error! ', 'Cannot connect to the server! ', 'error');
                }, pnotifyDelay);                 
            });
        };
    });

});
