import { useContext } from "react";
import { UserContext } from "../utils/Context";


const Footer = () => {

    const { user } = useContext(UserContext);

    return (
        <div className="flex justify-center items-center mb-10">
            <h5 className="text-center">
                All Rights Reserved | {new Date().getFullYear()}. Developed by {user.name ? `${user.name}` : "Mukesh Kumar"}
            </h5>
        </div>
    );
}

export default Footer;