import { useContext } from "react";
import { UserContext } from "../utils/Context";

const UserProfile = () => {

    const {user, updateUser} = useContext(UserContext);

    handleLogout = () => {
        console.log("logout clicked")
        updateUser({userName:'', gmail: '', isLoggedIn: false});
        alert("Successfully logged out");
    }

    return (
        <div className="user-profile items-center">
            <div className="justify-center flex items-center text-white bg-black w-10 h-10 rounded-full mt-[-10px]">
                {user.userName.slice(0, 1).toUpperCase()}
            </div>
            <div className="user-info hidden z-50 w-[70px] h-8">
                <h2 className="text-black">{user.userName}</h2>
                <button onClick={handleLogout} className="bg-black text-white px-3 py-1 rounded mt-2">Log out</button>
            </div>
        </div>
    );
}

export default UserProfile;