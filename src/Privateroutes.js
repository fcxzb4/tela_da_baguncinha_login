import { Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";


const PrivateRoute = ({Children}) => {
    const {youreLoged } = useAuth();

    return youreLoged ? Children : <Navigate to="/" />
};

export default PrivateRoute