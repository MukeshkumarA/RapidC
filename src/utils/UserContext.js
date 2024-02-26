import { createContext } from "react";

const UserContext = createContext({
    user: {
        userName: "",
        gmail: "",
        isLoggedIn: false,
    },
});

export default UserContext;