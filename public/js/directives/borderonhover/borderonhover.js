app.directive('borderonhover', function() {
	return {
		restrict: 'A',
		templateUrl: 'js/directives/borderonhover/borderonhover.html',
		link: function(scope, element) {
			// element.on('mouseenter', function() {
			// 	// apply 2px solid border to element
			// 	scope.$apply(function() {
			// 		console.log(element)
			// 		console.log(element.html())
			// 	} 
			// 	console.log(element.html())
			// 	console.log('is this working?')
			// })
			// element.on('mouseover', function() {
			// 	// take away 2 px solid border to element
			// 	console.log('yay')
			// })

			element.on('mouseenter', function() {
                element.addClass( "border" );
            });
            element.on('mouseleave', function() {
				element.removeClass( "border" );
            });
		}
	}
}))