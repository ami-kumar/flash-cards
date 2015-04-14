app.controller('MainController', function ($scope, FlashCardsFactory) {
	console.log(FlashCardsFactory.getFlashCards())
	$scope.flashCards = FlashCardsFactory;

	$scope.answerQuestion = function (answer, flashCard) {
		if (!flashCard.answered) {
			flashCard.answered = true;
			flashCard.answeredCorrectly = answer.correct;
		}
	}
});