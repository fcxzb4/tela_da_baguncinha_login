import { Route, Routes } from "react-router-dom";
import Header from "./components/container/header/Header";
import './App.css';
import Home from "./pages/home_page/Home";
import LoginPage from "./pages/login_page/LoginPage";
import FormCardPage from "./pages/form_card/FormCardPage";
import { ThemeProvider } from './context/themeContext';
import { GlobalStyles } from "./styles/GlobalStyles";
import styled from "styled-components";
import PrivateRoute from "./Privateroutes";
import { AuthProvider } from "./context/AuthContext";
import Port from "./pages/portifolio_page/Port";

const AppStyle = styled.div`

`;

function App() {
    return (
        <AuthProvider>
            <div className="App">
                <ThemeProvider>
                    <GlobalStyles />
                    <Header />
                    <Routes>
                        <Route path='/port' element={ <Port/>} />
                        <Route path='/' element={<LoginPage />} />
                        <Route path='/home' element={
                            <PrivateRoute >
                                <Home />
                            </PrivateRoute>
                        } />
                        <Route path='/form' element={
                            <PrivateRoute>
                                <FormCardPage />
                            </PrivateRoute>
                        } />
                    </Routes>
                </ThemeProvider>
            </div >
        </AuthProvider>
    );
}

export default App;