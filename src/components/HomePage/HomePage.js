import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <>
            <h1 className="main-title">Bulls <span className="enchant">&</span> Cows</h1>

            <section className="btn-holder">

                {/* <a href="./game.html" className="main-btn">Play</a> */}
                <Link to="/game" className="main-btn">Play</Link>
                <a href="#" className="main-btn">Rules</a>
                <a href="#" className="main-btn">Some other</a>
            </section>
        </>
    );
}

export default HomePage;