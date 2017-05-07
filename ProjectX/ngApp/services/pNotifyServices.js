
define(['app', 'pnotify'], function (app, pnotify) {

    app.service('pNotify', function () {
        this.showNotification = function (title, text, type) {
            var notification = new pnotify({
                title: title,
                text: text,
                type: type,
                delay: 5000,
                sticker: true
            });
        }
    });

});
