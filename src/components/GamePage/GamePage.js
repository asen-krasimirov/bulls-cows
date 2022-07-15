import './GamePage.css';

import { useState } from 'react';

import { useGuessContext } from '../../contexts/GuessContext';
import useRandomNumber from '../../hooks/useRandomNumber';

function GamePage() {
    const { numLength } = useGuessContext();
    const [numberToGuess, setNumberToGuess] = useState(useRandomNumber(numLength));

    const [bullsCount, setBullsCount] = useState(0);
    const [cowsCount, setCowsCount] = useState(0);
    
    const [guessesCount, setGuessesCount] = useState(0);
    const [hasGuessed, setHasGuessed] = useState(false);

    const handleNumberGuess = e => {
        e.preventDefault();

        setGuessesCount(guessesCount + 1);
        
        const formData = new FormData(e.target);
        let body = Object.fromEntries(formData);

        let curBulls = 0;
        let curCows = 0;

        for (let index = 0; index < numLength; index++) {
            let curDigitToGuess = numberToGuess[index];

            for (let guessIndex = 0; guessIndex < numLength; guessIndex++) {
                let curGuessDigit = body.guessedNumber[guessIndex];

                if (curGuessDigit == curDigitToGuess && index == guessIndex) {
                    curBulls++;
                }
                else if (curGuessDigit == curDigitToGuess) {
                    curCows++;
                }
            }
        }

        if (curBulls == numLength) {
            setHasGuessed(true);
        }
        else {
            setBullsCount(curBulls);
            setCowsCount(curCows);
        }
    }

    const validateNumberGuessData = number => {

    }

    const feedBackDisplay = (
        <section className="feedback-output">
            <p className="bulls">Bulls: <span className="bulls-count">{bullsCount}</span></p>
            <p className="cows">Cows: <span className="cows-count">{cowsCount}</span></p>
        </section>
    )

    const guessedDisplay = (
        <section className="feedback-right-number">
            <p className="congrats-message">You found the number <span className="right-number">{numberToGuess.join("")}</span> in <span className="guesses">{guessesCount}</span> { guessesCount !=  1 ? "guesses" : "guess"}!</p>
        </section>
    )

    return (
        <>
            <h2 className="sub-title">Guess The Number</h2>
            <p className="text-holder">Number Length: {numLength}</p>

            <form className="input-holder" onSubmit={handleNumberGuess}>
                <input name="guessedNumber" type="number" className="number-input main-btn" placeholder="Enter a number" maxLength={numLength} />
                <button className="submit-btn">Try</button>
                <p className="text-holder guesses-counter">Guesses Count: {guessesCount}</p>
            </form>

            {
                hasGuessed
                    ? guessedDisplay
                    : feedBackDisplay
            }
        </>
    );
}

export default GamePage;
