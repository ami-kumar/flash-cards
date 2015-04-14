app.controller('MainController', function ($scope, FlashCardsFactory) {
	console.log(FlashCardsFactory.getFlashCards())
	$scope.flashCards = FlashCardsFactory.getFlashCards();

	$scope.answerQuestion = function (answer, flashCard) {
		if (!flashCard.answered) {
			flashCard.answered = true;
			flashCard.answeredCorrectly = answer.correct;
		}
	}
});