import './GamePage.css';

function GamePage() {
    return (
        <>
            <h2 className="sub-title">Guess The Number</h2>
            <p className="text-holder">Number Length: 5</p>

            <form className="input-holder">
                <input type="number" className="number-input main-btn" placeholder="Enter a number" />
                <button className="submit-btn">Try</button>
                <p className="text-holder guesses-counter">Guesses Count: 12</p>
            </form>

            <section className="feedback-output">
                <p className="bulls">Bulls: <span className="bulls-count">3</span></p>
                <p className="cows">Cows: <span className="cows-count">2</span></p>
            </section>

            {/* <section className="feedback-right-number">
                <p className="congrats-message">You found the number <span className="right-number">59232</span> in <span className="guesses">12</span> guesses!</p>
            </section> */}
        </>
    );
}

export default GamePage;
