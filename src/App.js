// import logo from './logo.svg';
// import './App.css';

import { Routes, Route } from 'react-router-dom';

import HomePage from './components/HomePage';

function App() {
    return (
        <main className="content-container">
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
            
        </main>
    );
}

export default App;
