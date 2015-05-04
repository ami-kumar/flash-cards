app.directive('borderonhover', function() {
	return {
		restrict: 'A',
		templateUrl: 'js/directives/borderonhover/borderonhover.html',
		link: function(scope, element) {
			element.on('mouseenter', function() {

			})
		}
	}
}))