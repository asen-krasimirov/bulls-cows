import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <>
            <h1 className="main-title">Bulls <span className="enchant">&</span> Cows</h1>

            <section className="btn-holder">

                <Link to="/game" className="main-btn">Play</Link>
                <Link to="/rules" className="main-btn">Rules</Link>
                {/* <a href="#" className="main-btn">Some other </a> */}
            </section>
        </>
    );
}

export default HomePage;