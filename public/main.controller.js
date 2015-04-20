app.controller('MainController', function ($scope, FlashCardsFactory) {
	FlashCardsFactory.getFlashCards().then(function(cards) {
		$scope.flashCards = cards
	})
	console.log($scope.flashCards)

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
		FlashCardsFactory.getFlashCards(category).then(function(cards) {
			$scope.flashCards = cards
			$scope.category = category

			console.log(cards)
			console.log(category)
		})
	}

	$scope.activeCategory = function(category) {
		if (category == $scope.category) {
			return true
		} else {
			return false
		}
	}

	$scope.resetCategory = function() {
		FlashCardsFactory.getFlashCards().then(function(cards) {
			$scope.flashCards = cards
		})
		console.log($scope.flashCards)
	}
});