import { useContext } from "react";
import UserContext from "../utils/UserContext";

const UserProfile = () => {

    const {user, updateUser} = useContext(UserContext);

    handleLogout = () => {
        console.log("logout clicked")
        updateUser({userName:'', gmail: '', isLoggedIn: false});
        alert("Logged out successfully");
    }

    return (
        <div className="user-profile">
            <h3>{user.userName.slice(0,1).toUpperCase()}</h3>
            <div>
                <h2 onClick={handleLogout}>Log out</h2>
            </div>
        </div>
    );
}

export default UserProfile;