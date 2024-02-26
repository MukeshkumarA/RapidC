import { useState } from "react"
import UserContext from "./UserContext";


const UserProvider = ({ children }) => {
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

export default UserProvider;