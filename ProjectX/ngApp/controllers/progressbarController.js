
define(['app', 'dateServices'], function (app) {
    
    app.controller('progressbarCtrl', function ($scope, $interval, dateServices) {

        function calculateYearProgress() {
            var dayOfYear = dateServices.dayOfYear();
            var isLeapYear = dateServices.isLeapYear();
            var totalDays = isLeapYear ? 366 : 365;
            var currentHour = dateServices.now().getHours();
            var currentDay = dayOfYear - 1 + (currentHour / 24);
            var result = (100 * currentDay / totalDays).toFixed(2);
            result = dateServices.roundTo100(result);
            return result;
        }

        function calculateMonthProgress() {
            var now = dateServices.now();
            var year = now.getFullYear();
            var month = now.getMonth() + 1;
            var totalDays = dateServices.daysInMonth(month, year);
            var totalMinutes = totalDays * 1440;

            var start = new Date(year, month - 1, 1);
            var diff = now - start;
            var oneMinute = 1000 * 60;
            var minutes = Math.floor(diff / oneMinute);
            var result = (100 * minutes / totalMinutes).toFixed(2);
            result = dateServices.roundTo100(result);
            return result;
        }

        function getThisYear() {
            var now = dateServices.now();
            var year = now.getFullYear();
            return year;
        }

        function calculateWeekdayProgress() {
            var now = dateServices.now();
            if ((now.getDay() === 6) || (now.getDay() === 0))
                return 100;

            var monday = dateServices.getCurrentMonday();
            var saturday = dateServices.getCurrentSaturday();

            var seconds = dateServices.differenceInSeconds(monday, now);
            var totalSeconds = dateServices.differenceInSeconds(monday, saturday);
            var result = (100 * seconds / totalSeconds).toFixed(2);
            result = dateServices.roundTo100(result);
            return result;
        }

        function updateProgressBars() {
            $scope.weekdayProgress = calculateWeekdayProgress();
            $scope.monthProgress = calculateMonthProgress();
            $scope.yearProgress = calculateYearProgress();
            $scope.thisYear = getThisYear();
        }

        // Set intervals to update the progress bars automatically
        $interval(updateProgressBars, 10000);

        updateProgressBars();
    });

});
