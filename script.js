'use strict';

const game = {
    playerNameInput: $('#playerNameInput'),
    playerNameDisplay: $('#playerNameDisplay'),
    barTally: $('#barTally'),
    playerGuess: $('.playerGuess'),
    currentScreen: $('#splashScreen'),
    difficultyMode: $('#easyBtn'),
    tallyCounter: 0,
    correctGuesses: 0,
    secretBreed: [],
    playerWord: [],
    easyBreeds: ['boxer', 'pug', 'husky', 'akita', 'corgi'],
    mediumBreeds: ['maltese', 'poodle', 'beagle', 'bulldog', 'labrador'],
    hardBreeds: ['bullmastiff', 'affenpinscher', 'labradoodle', 'newfoundland', 'pomeranian'],

    startGame: function () {
        $('#startGameBtn').removeAttr('disabled');
        $('#startGameBtn').css({'background-color':'green', 'color':'white'});
    },
    switchScreen: function (currentScreen) {
        game.currentScreen = currentScreen;
        $('.screen').hide();
        $(game.currentScreen).show();
    },

     // Difficulty level selected by player

    chosenDifficulty: function (difficulty) {
        game.difficultyMode = difficulty;
    },
    selectEasyBreed: function () {
        let secretBreed = game.easyBreeds[Math.floor(Math.random() * game.easyBreeds.length)];
        game.secretBreed = secretBreed;
        game.chosenDifficulty('#easyBtn')
        console.log(secretBreed);
    },
    selectMediumBreed: function () {
        let secretBreed = game.mediumBreeds[Math.floor(Math.random() * game.mediumBreeds.length)];
        game.secretBreed = secretBreed;
        game.chosenDifficulty('#mediumBtn')
        console.log(secretBreed);
    },
    selectHardBreed: function () {
        let secretBreed = game.hardBreeds[Math.floor(Math.random() * game.hardBreeds.length)];
        game.secretBreed = secretBreed;
        game.chosenDifficulty('#hardBtn')
        console.log(secretBreed);
    },

    // Update and display secret dog breed as underlines

    displayBreed: function () {
        let dog = game.secretBreed;
        $('#secretWord').html('')
        for (let i=0; i < dog.length; i++) {
            const letterSpan = '<span class="secretLetter">_</span>'
            $('#secretWord').append(letterSpan);
        }
    },
    updateBreed: function () {
        let dogStr = game.secretBreed;
        let dogChar = dogStr.split("");
        console.log(dogChar);
    },

    // Keeping score of player correct and incorrect guesses

    updateTally: function () {
        game.tallyCounter = game.tallyCounter + 1;
        $('#barTally').html(`Bars on cage: ${game.tallyCounter}`);
    },
    checkAnswer: function () {
        if (game.playerWord.join("") === game.secretBreed) {
            console.log('win');
            setTimeout(game.dropCageBars, 1000);
            setTimeout(game.moveDog, 2000);
            setTimeout(game.winScreen, 4000);
        }
    },

    // Winning the game

    dropCageBars: function () {
        $('.singleBar').hide();
    },

    moveDog: function () {
        $('.corgi').animate({left: '400px'}, "slow");
    },

    winScreen: function () {
        game.switchScreen('#winningScreen');
    },

    // Player loses - revealing secret word

    endGame: function () {
        game.switchScreen('#gameOverScreen');
        game.revealAnswer();
    },
    revealAnswer: function () {
        $('#wordReveal').html(`The breed was: ${game.secretBreed}`)
    },

    // Play again - randomly selects new word to guess within same difficulty level

    playAgain: function () {
        game.tallyCounter = 0;
        game.correctGuesses = 0;
        game.playerWord = [];
        $('#barTally').html(`Bars on cage: ${game.tallyCounter}`);
        $('.singleTreat').hide();
        $('.playerGuess').removeClass('disabled');
        $('.singleBar').hide();
        $('#lock').hide();
        $('.corgi').removeAttr('style');
        clearTimeout(game.dropCageBars);
        clearTimeout(game.moveDog);
        clearTimeout(game.winScreen);
        clearTimeout(game.lockCage);
    },
    
    // Fully reset game

    resetGame: function () {
        window.location.reload();
    },

    // Move cage bars and lock animations

    lockCage: function () {
        $('#lock').slideDown();
    },
    
    moveBar: function (barToMove) {
        $(barToMove).slideDown();
    },

    moveCage: function () {

        game.updateTally();

        if (game.tallyCounter === 1) {
            game.moveBar($('#barOne'));
        } else if (game.tallyCounter === 2) {
            game.moveBar($('#barTwo'));
        } else if (game.tallyCounter === 3) {
            game.moveBar($('#barThree'));
        } else if (game.tallyCounter === 4) {
            game.moveBar($('#barFour'));
        } else if (game.tallyCounter == 5) {
            game.moveBar($('#barFive'));
        } else if (game.tallyCounter === 6) {
            game.moveBar($('#barSix'));
        } else if (game.tallyCounter === 7) {
            game.moveBar($('#barSeven'));
        } else if (game.tallyCounter === 8) {
            game.moveBar($('#barEight'));
        } else if (game.tallyCounter === 9) {
            game.moveBar($('#barNine'));
        } else if (game.tallyCounter === 10) {
            game.moveBar('#barTen');
            setTimeout(game.lockCage, 1000);
            $('.playerGuess').addClass('disabled')
            setTimeout(game.endGame, 3000);
        } else {
            console.log('no match');
        }
    },

    // Move treats animations

    moveTreat: function (treatToMove) {
        $(treatToMove).slideDown();
    },

    // Check which treat to move depending on how many correct guesses the player has made

    moveCorrectTreat: function () {

        game.correctGuesses++;

        if (game.correctGuesses == 1) {
            game.moveTreat($('#treatOne'));
        } else if (game.correctGuesses == 2) {
            game.moveTreat($('#treatTwo'));
        } else if (game.correctGuesses == 3) {
            game.moveTreat($('#treatThree'));
        } else if (game.correctGuesses == 4) {
            game.moveTreat($('#treatFour'));
        } else if (game.correctGuesses == 5) {
            game.moveTreat($('#treatFive'));
        } else if (game.correctGuesses == 6) {
            game.moveTreat($('#treatSix'));
        } else if (game.correctGuesses == 7) {
            game.moveTreat($('#treatSeven'));
        } else if (game.correctGuesses == 8) {
            game.moveTreat($('#treatEight'));
        } else if (game.correctGuesses == 9) {
            game.moveTreat($('#treatNine'));
        } else if (game.correctGuesses == 10) {
            game.moveTreat($('#treatTen'));
        } else if (game.correctGuesses == 11) {
            game.moveTreat(('#treatEleven'));
        } else if (game.correctGuesses == 12) {
            game.moveTreat(('#treatTwelve'))
        } else {
            console.log('no match');
        }
    },

    // Setting up event listeners

    setUp: () => {
        $('#joinGameBtn').on('click', () => {
            player.updatePlayerName();
        })

        $('#startGameBtn').on('click', () => {
            game.switchScreen('#gameScreen');
            $('#easyBtn').removeClass('disabled')
            $('#mediumBtn').removeClass('disabled');
            $('#hardBtn').removeClass('disabled');
        })

        $('#easyBtn').on('click', () => {
            $('#mediumBtn').addClass('disabled');
            $('#hardBtn').addClass('disabled');
            game.startGame();
            game.selectEasyBreed();
            game.updateBreed();
            game.displayBreed();
        })

        $('#mediumBtn').on('click', () => {
            $('#easyBtn').addClass('disabled');
            $('#hardBtn').addClass('disabled');
            game.startGame();
            game.selectMediumBreed();
            game.updateBreed();
            game.displayBreed();
        })

        $('#hardBtn').on('click', () => {
            $('#easyBtn').addClass('disabled');
            $('#mediumBtn').addClass('disabled');
            $('#startGameBtn').removeClass('disabled');
            game.startGame();
            game.selectHardBreed();
            game.updateBreed();
            game.displayBreed();
        })

        $('.playerGuess').on('click', (event) => {
            console.log(event.target)
            const letter = event.target.textContent
            let hasMatch = false;
            for (let i = 0; i < game.secretBreed.length; i++) {
                if (game.secretBreed[i] === letter) {
                    console.log('match at index', i)
                    hasMatch = true;
                    $('.secretLetter').eq(i).text(letter);
                    $(event.target).addClass('disabled');
                    game.playerWord[i] = letter;
                    game.checkAnswer();
                } else {
                    $(event.target).addClass('disabled');
                }
            }

            if (hasMatch === true) {
                game.moveTreat();
                game.moveCorrectTreat();
            } else {
                game.moveCage();
            }
            
        })

        $('.btn-danger').on('click', () => {
            game.switchScreen('#splashScreen');
            game.resetGame();
        })

        $('#playAgainBtn').on('click', () => {
            game.playAgain();
            game.switchScreen('#gameScreen');
            if (game.difficultyMode == '#easyBtn') {
                game.selectEasyBreed();
            } else if (game.difficultyMode == '#mediumBtn') {
                game.selectMediumBreed();
            } else {
                game.selectHardBreed();
            }
            game.updateBreed();
            game.displayBreed();
        })

        $('#playAgainBtn2').on('click', () => {
            game.playAgain();
            game.switchScreen('#gameScreen');
            if (game.difficultyMode == '#easyBtn') {
                game.selectEasyBreed();
            } else if (game.difficultyMode == '#mediumBtn') {
                game.selectMediumBreed();
            } else {
                game.selectHardBreed();
            }
            game.updateBreed();
            game.displayBreed();
        })

    },
}

const player = {
    name: null,
    updatePlayerName: function () {
        if ($('#playerNameInput').val().length === 0) {
            $('.alert').show();
            return;
        } else if ($('#playerNameInput').val().length >= 1) {
            $('#playerNameInput').hide();
            $('.alert').hide();
            player.name = $('#playerNameInput').val();
            $('#playerNameDisplay').html(`Player: ${player.name}`);
        }
    },
}

game.setUp();