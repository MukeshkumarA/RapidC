import { useContext } from "react";
import { UserContext } from "../../utils/Context";
import styles from './UserProfile.module.css';


const UserProfile = () => {

    const { user, updateUser } = useContext(UserContext);

    handleLogout = () => {
        updateUser({ userName: '', gmail: '', isLoggedIn: false });
        alert("Successfully logged out");
    }

    return (
        <div className={`${styles.userProfile} userProfile items-center`}>
            <div className="text-xl justify-center flex items-center border border-black w-10 h-10 rounded-full mt-[-10px]">
                {user?.userName?.slice(0, 1).toUpperCase()}
            </div>
            {/* <div>
                <img src="/src/assets/kisspng-india-login-computer-icons-emoticon-medicine-user-login-icon-5ab05c8bc2f8d1.4479395815215074677986.jpg" />
            </div> */}
            <div className={`${styles.userInfo} userInfo hidden font-light shadow-lg bg-pink-50 p-3 rounded-sm z-20 text-center`}> {/* Initially hidden */}
                <h2>{user?.userName[0]?.toUpperCase() + user?.userName?.slice(1)}</h2>
                <button className="hover:font-semibold" onClick={handleLogout} >Log out</button>
            </div>
        </div>

    );
}

export default UserProfile;