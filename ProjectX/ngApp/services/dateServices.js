
define(['app'], function (app) {

    app.service('dateServices', function () {
        var self = this;

        this.now = function () {
            return new Date();
        };

        this.dayOfYear = function () {
            var now = self.now();
            var start = new Date(now.getFullYear(), 0, 0);
            var diff = now - start;
            var oneDay = 1000 * 60 * 60 * 24;
            var day = Math.floor(diff / oneDay);
            return day;
        };

        this.daysInMonth = function (month, year) {
            return new Date(year, month, 0).getDate();
        };

        this.isLeapYear = function () {
            var now = self.now();
            var year = now.getFullYear();
            return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
        };

        this.getCurrentMonday = function () {
            var d = self.now();
            var day = d.getDay();
            var diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
            var tmp = new Date(d.setDate(diff));
            var result = new Date(tmp.getFullYear(), tmp.getMonth(), tmp.getDate());
            return result;
        };

        this.getCurrentSaturday = function () {
            var monday = self.getCurrentMonday();
            var result = new Date(monday.getFullYear(), monday.getMonth(), monday.getDate() + 5);
            return result;
        };

        this.differenceInSeconds = function (a, b) {
            var difference = (b - a) / 1000;
            return difference;
        };

        this.roundTo100 = function (n) {
            var result = n > 100 ? 100 : n;
            return result;
        };
    });

});
