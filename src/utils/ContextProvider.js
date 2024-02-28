import { useContext, useEffect, useState } from "react"
import { UserContext } from "./Context";
import { ThemeContext } from  "./Context";


export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        userName: '',
        gmail: '',
    });

    const updateUser = (userData) => {
        setUser(userData);
    }

    return (
        <UserContext.Provider value={{ user: user, updateUser }}>
            {children}
        </UserContext.Provider>
    );
}

export const useTheme = () => {
    return useContext(ThemeContext);
}

export const ThemeProvider = ({children}) => {
    const [ isDarkTheme, setDarkTheme ] = useState(false);

    toggleTheme = () => {
        setDarkTheme((prevState) => !prevState);
    }

    const theme = (isDarkTheme)? "dark" : "light";

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [isDarkTheme]);
    

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}