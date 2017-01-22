App.factory('eventsModel', ['$http', function($http) {
    return {
        // get all the events
        getevents : function() {
            return $http.get('/api/events');
        },
        // get all the event
        getevent : function(id) {
            return $http.get('/api/events/'+id);
        },

        // save a comment (pass in comment data)
        save : function(eventData) {
            return $http({
                method: 'POST',
                url: '/api/events',
                headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
                data: $.param(eventData)
            });
        },

        // destroy a Event
        destroy : function(id) {
            return $http.delete('/api/events/' + id);
        }
    }

}])

//# sourceMappingURL=models.js.map
