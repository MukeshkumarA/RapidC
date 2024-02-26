import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Contact = () => {
    const userData = useContext(UserContext);

    return (
         <div className="text-center font-bold">
            <h1>Contact Us Page</h1>
            <p>This is the contact us page of our website.</p>
            <p>{userData.user.userName}</p>
            {console.log(userData.user.userName)}
        </div>
    );
}

export default Contact;