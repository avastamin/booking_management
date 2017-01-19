App.controller('eventsController', ['$scope','eventsModel','uiCalendarConfig','$uibModal', function($scope,eventsModel,uiCalendarConfig,$uibModal) {

    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    $scope.events = []; // initiate to get events from callback

    /* Change View */
    $scope.changeView = function(view,calendar) {

        $scope.currentMonth = moment(view.title).format("YYYY-MM");

        $scope.currentMonthInUTC = view.dayGrid.dayDates[10]._d; // used to 10 to avoid past month

        //  console.log( moment($scope.currentMonthInUTC).startOf("month").format("YYYY-MM-DD"));

    };
    /* Change View */
    $scope.renderCalendar = function(calendar) {
        $timeout(function() {
            if(uiCalendarConfig.calendars[calendar]){
                uiCalendarConfig.calendars[calendar].fullCalendar('render');
            }
        });
    };
    $scope.eventClick = function(calEvent, jsEvent, view) {
        alert('Event clicked!')
    };

    $scope.dayClick = function(date, jsEvent, view) {
        $uibModal.open({
            animation: true,
            ariaLabelledBy: 'modal-title-bottom',
            ariaDescribedBy: 'modal-body-bottom',
            templateUrl:  'templates/partials/add-event-form.html',
            size: 'sm',
            controller: function ($scope) {
                $scope.name = 'bottom';
            }
        })
    };

    /* Render booked and free events on every day on Calendar view  */

    $scope.eventRender = function( event, element, view ) {
        //
    };


    /**
     * Main settings of FullCalendar
     * For more: https://github.com/angular-ui/ui-calendar
     */

    $scope.calendarConfig = {
        calendar: {
            allDaySlot: false,
            timezone: 'local',
            editable: false,
            fixedWeekCount: true,
            lang: 'de',
            eventOrder: "-title",
            height: 650,
            header: {
                left:   'title',
                center: 'Custom text',
                right:  'today prev,next'
            },
            eventClick: $scope.eventClick,
            eventRender: $scope.eventRender,
            dayClick: $scope.dayClick,
            viewRender: $scope.changeView

        }
    };
    $scope.callbackevents = function(start, end, timezone, callback) {

        eventsModel.get()
            .success(function (data) {
                console.log(data);
                var events = [];
                angular.forEach(data,function(event,key){
                    $scope.events.push({id: event.id, title: event.tilte, start: event.start_time});
                });

                callback(events);
            });
    }

    $scope.eventSources = [$scope.events,$scope.callbackevents];

}]);

//# sourceMappingURL=controllers.js.map
