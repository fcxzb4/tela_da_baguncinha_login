import { Link, Route, Routes } from "react-router-dom"
import './App.css';
import LoginPage from './pages/login_page/LoginPage';
import HomePage from './pages/home_page/HomePage';

function App() {
    return (
        <div className="App">
            <header>
               <button>
                    <Link to={'/'}>Login</Link>
                    <Link to={'/home'}>Home</Link>
                </button>
            </header>
            <Routes >
                <Route path='/' element={<LoginPage />} />
                <Route path='/home' element={<HomePage />} />
            </Routes>
        </div>
    );
}

export default App;

