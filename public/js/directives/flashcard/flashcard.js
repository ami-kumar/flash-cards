app.directive('flashcard', ['FlashCardsFactory', 'ScoreFactory', function(FlashCardsFactory, ScoreFactory) {
	return {
		restrict: 'E',
		templateUrl: 'js/directives/flashcard/flashcard.html',
		// link: function(scope, element, FlashCardsFactory) {
		// 	// in place of FlashCardController
		// 	// try implementing just this function here first
		// 	FlashCardsFactory.getFlashCards().then(function(cards) {
		// 		scope.flashCards = cards
		// 	})
		// }
		scope: { card: '=' },
		link: function(scope, element) {

			scope.answerQuestion = function (answer) {
				if (!scope.answered) {
					scope.answered = true;
					scope.answeredCorrectly = answer.correct;
				}
				if (answer.correct) {
					ScoreFactory.correct++
				} else {
					ScoreFactory.incorrect++
				}
			}
		}
	}
}])