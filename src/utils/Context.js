import { createContext, useContext } from "react";

export const UserContext = createContext({
    user: {
        userName: "",
        gmail: "",
        isLoggedIn: false,
    },
});


export const ThemeContext = createContext({});
