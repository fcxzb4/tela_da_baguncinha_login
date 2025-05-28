import { Link, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage"

function HomePage() {
    return <>
    <div className="App">
        <header>
            <nav>
                <Link to={'/HomePage'}>Home</Link>
                <Link to={'/'}>Login</Link>
            </nav>
        </header>
       <Route >
        <Route path="/" element={<LoginPage />}/>
        <Route path="/Home" element={<HomePage />}/>
       </Route>
    </div>
    </>

}
export default HomePage