import Profile from "./Profile";

const About = () => {
    return (
        <div className="text-center font-bold">
            <h1>About Us Page</h1>
            <p>This is the about us page of our website.</p>
            <Profile name={"Mukesh"} />
        </div>
    )
}

export default About;