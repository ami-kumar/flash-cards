app.controller('MainController', function ($scope, FlashCardsFactory) {
	console.log(FlashCardsFactory.getFlashCards())
	$scope.flashCards = FlashCardsFactory.getFlashCards();

	$scope.categories = [
		'MongoDB', 
		'Express', 
		'Angular',
		'Node'
	]

	$scope.answerQuestion = function (answer, flashCard) {
		if (!flashCard.answered) {
			flashCard.answered = true;
			flashCard.answeredCorrectly = answer.correct;
		}
	}

	$scope.getCategoryCards = function(category) {
		console.log(category)
		// if there is a category, add it to the $http call
		//	to the server

		// implement call to FlashCardFactory.getFlashCards
		// 	take filtered flash cards, replace the existing
		//	flashCards on the $scope
		$scope.flashCards = FlashCardsFactory.getFlashCards(category)
		console.log($scope.flashCards)
	}
});