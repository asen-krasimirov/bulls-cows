// import logo from './logo.svg';
// import './App.css';

import { Routes, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import GamePage from './components/GamePage';

function App() {
    return (
        <main className="content-container">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/game" element={<GamePage />} />
            </Routes>
            
        </main>
    );
}

export default App;
