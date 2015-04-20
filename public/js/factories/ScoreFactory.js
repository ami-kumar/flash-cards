app.factory('ScoreFactory', function () {
    // facilitate communication between StatsController and flash card
    //  controllers

    return {
        correct: 0,
        incorrect: 0
    }
})