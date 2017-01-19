App.factory('eventsModel', ['$http', function($http) {
    return {
        // get all the comments
        get : function() {
            return $http.get('/api/events');
        },

        // save a comment (pass in comment data)
        save : function(commentData) {
            return $http({
                method: 'POST',
                url: '/api/events',
                headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
                data: $.param(commentData)
            });
        },

        // destroy a comment
        destroy : function(id) {
            return $http.delete('/api/events/' + id);
        }
    }

}])
