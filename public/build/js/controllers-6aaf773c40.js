App.controller('eventsController', ['$scope','eventsModel','uiCalendarConfig','$uibModal', function($scope,eventsModel,uiCalendarConfig,$uibModal) {

    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    $scope.events = []; // initiate to get events from callback

    /* Change View */
    $scope.changeView = function(view,calendar) {

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

        eventsModel.getevent(calEvent.id)
            .success(function (data) {
                console.log(data);
                var uibmodalinstance =  $uibModal.open({
                    animation: true,
                    ariaLabelledBy: 'modal-title-bottom',
                    ariaDescribedBy: 'modal-body-bottom',
                    templateUrl:  'templates/partials/edit-event-form.html',
                    size: 'sm',
                    controller: function ($scope) {
                        $scope.eventFormdata = data;
                        $scope.eventFormdata.startdate = '2017-01-03';
                        $scope.updateEvent = function () {
                            console.log( $scope.eventFormdata);
                            eventsModel.save($scope.eventFormdata)
                                .success(function (data) {
                                    $scope.cancel();
                                });
                        };
                        $scope.cancel = function () {
                            uibmodalinstance.close('cancel');
                        };
                        $scope.delete = function () {
                            eventsModel.destroy($scope.eventFormdata.id)
                                .success(function (data) {
                                    $scope.cancel();
                                });
                        }
                    }
                });
            });
    };

    $scope.dayClick = function(date, jsEvent, view) {
     var uibmodalinstance =  $uibModal.open({
            animation: true,
            ariaLabelledBy: 'modal-title-bottom',
            ariaDescribedBy: 'modal-body-bottom',
            templateUrl:  'templates/partials/add-event-form.html',
            size: 'sm',
            controller: function ($scope) {
                $scope.eventFormdata = {};
             $scope.addEvent = function () {
                 console.log( $scope.eventFormdata);
                 eventsModel.save($scope.eventFormdata)
                     .success(function (data) {
                         $scope.cancel();
                     });
             };
              $scope.cancel = function () {
                  uibmodalinstance.close('cancel');
              }
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

        eventsModel.getevents()
            .success(function (data) {
                console.log(data);
                var events = [];
                angular.forEach(data,function(event,key){
                    $scope.events.push({id: event.id, title: event.name, start: event.start_time});
                });

                callback(events);
            });
    }

    $scope.eventSources = [$scope.events,$scope.callbackevents];

}]);

//# sourceMappingURL=controllers.js.map
