function codeBreaker()
{
    const prompt = require('prompt-sync')();

    console.clear();
    console.log("Welcome to CodeBreaker!");

    const secretCode = generateRandomCode();
    let attemptsLeft = 12;

    console.log("A 4-digit secret code has been generated. Can you guess it?");

    while (attemptsLeft > 0)
    {
        const userGuess = prompt("Enter your 4-digit guess: ");

        if (!/^\d{4}$/.test(userGuess))
        {
            console.log("Invalid input! Please enter exactly 4 digits.");
            continue;
        }

        const feedback = getFeedback(secretCode, userGuess);
        console.log(`Corret digits in the correct place: ${feedback.correctPlace}`);
        console.log(`Correct digits in the wrong place: ${feedback.wrongPlace}`);
        attemptsLeft--;

        if (feedback.correctPlace === 4)
        {
            console.log("Congratulations! You guessed the correct code!");
            return;
        }
        else
        {
            console.log(`Guesses left: ${attemptsLeft}`);
        }
    }

    console.log(`You've run out of guesses! The correct code was: ${secretCode.join('')}`);
}

function generateRandomCode()
{
    let code = [];
    for (let i = 0; i < 4; i++)
    {
        code.push(Math.floor(Math.random() * 10));
    }
    return code;
}

function getFeedback(secretCode, userGuess)
{
    const guessArray = userGuess.split('').map(Number);
    let correctPlace = 0;
    let wrongPlace = 0;

    let secretCodeCopy = [...secretCode];
    let guessCopy = [...guessArray];

    for (let i = 0; i < 4; i++)
    {
        if (guessCopy[i] === secretCodeCopy[i])
        {
            correctPlace++;
            secretCodeCopy[i] = guessCopy[i] = null;
        }
    }

    for (let i = 0; i < 4; i++)
    {
        if (guessCopy[i] !== null && secretCodeCopy.includes(guessCopy[i]))
        {
            wrongPlace++;
            secretCodeCopy[secretCodeCopy.indexOf(guessCopy[i])] = null;
        }
    }

    return { correctPlace, wrongPlace };
}

codeBreaker();