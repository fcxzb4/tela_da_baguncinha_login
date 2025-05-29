import { Link, Route, Routes } from "react-router-dom"
import './App.css';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

function App() {
    return (
        <div className="App">
            <header>
                <nav>
                    <Link to={'/'}>Login</Link>
                    <Link to={'/home'}>Home</Link>
                </nav>
            </header>
            <Routes >
                <Route path='/' element={<LoginPage />} />
                <Route path='/home' element={<HomePage />} />
            </Routes>
        </div>
    );
}

export default App;

