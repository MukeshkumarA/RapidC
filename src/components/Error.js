import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    const { status, statusText } = error;
    return (
        <div className="text-center font-bold">
            <h1>Oops!!!</h1>
            <h2>Something went wrong...</h2>
            <h2>{status + ":" + statusText}</h2>
        </div>
    );
}

export default Error;