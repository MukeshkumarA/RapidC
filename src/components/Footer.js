import { useContext } from "react";
import { UserContext } from "../utils/Context";


const Footer = () => {

    const { user } = useContext(UserContext);

    return (
        <h5 className="p-10 m-10 text-center">
            All Rights Reserved | Designed with{" "} Copyright &copy;{new Date().getFullYear()}. Developed by {user.name ? `${user.name}` : "Mukesh kumar"}
        </h5>
    );
}

export default Footer;