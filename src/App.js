import { Route, Routes } from "react-router-dom";
import Header from "./components/container/header/Header";
import './App.css';
import Home from "./pages/home_page/Home";
import LoginPage from "./pages/login_page/LoginPage";
import FormCardPage from "./pages/form_card/FormCardPage";
import { ThemeProvider } from './theme/themeContext';

function App() {
    return (
        <div className="App">
            <ThemeProvider>
                <Header />
                <Routes>
                    <Route path='/' element={<LoginPage />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/form' element={<FormCardPage />} />
                </Routes>
            </ThemeProvider>
        </div>
    );
}

export default App;