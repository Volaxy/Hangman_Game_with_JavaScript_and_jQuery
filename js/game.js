let createGame = function(sprit) {
    let secretWord;
    let kick = [];
    let step = 1;
    let usedLetters = [];

    let sprite = sprit;

    let setSecretWord = function(word) {
        secretWord = word;

        kick = Array(secretWord.length).fill("");

        step = 2;
    };
    
    let getKick = function() {
        return kick;
    };

    let getStep = function() {
        return step;
    };

    let proccessKick = function(letter) {
        if(!usedLetters.includes(letter)) {
            if(secretWord.includes(letter)) {

                for(let i = 0; i < secretWord.length; i++) {
                    if(secretWord[i] == letter) {
                        kick[i] = letter;
                    }
                }

            } else {
                sprite.nextFrame();
            }

            usedLetters.push(letter);
        }

        verifyGameStatus();
    };

    let verifyGameStatus = function() {
        if(!kick.includes("")) {
            return "WIN";
        }

        if(sprite.isFinished()) {
            return "LOSE";
        }
        
        return "NOT FINISHED";
    };

    return {
        setSecretWord,
        getKick,
        getStep,
        proccessKick,
        verifyGameStatus
    }
};