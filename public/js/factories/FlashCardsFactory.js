// create an Angular factory that will make an AJAX request
//  to the server
app.factory('FlashCardsFactory', function($http) {
    return { 
        getFlashCards: function(category) {
            var queryParams = {}

            if (category) {
                queryParams.category = category;
            }
            // build an AJAX call
            return $http.get("/cards", {
                params: queryParams
            }).then(function(response) {
                return response.data
            })
        }
    }
})