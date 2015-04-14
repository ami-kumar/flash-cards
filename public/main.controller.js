app.controller('MainController', function ($scope, FlashCardsFactory) {
	console.log(FlashCardsFactory)
	$scope.flashCards = FlashCardFactory;

	$scope.answerQuestion = function (answer, flashCard) {
		if (!flashCard.answered) {
			flashCard.answered = true;
			flashCard.answeredCorrectly = answer.correct;
		}
	}
});