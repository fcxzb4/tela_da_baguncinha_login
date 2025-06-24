import {createContext , useContext ,  useState} from 'react';

const AutoContext = createContext ();

export const AuthProvider=({children})=> {
    const [youreLoged , setyoureLoged] = useState (false);

    const login =() => setyoureLoged(true);
    const logout = ()=> setyoureLoged(false);

    return (
        <AutoContext.Provider value={{youreLoged , login ,logout}}>
            {children}
        </AutoContext.Provider>
    );
};

export const useAuth = () => useContext(AutoContext);