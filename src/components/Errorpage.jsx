import { useRouteError } from "react-router-dom";

const Errorpage = () => {
    const err =  useRouteError();
    console.log(err);
    return (
    <div>
        <h2>OOPS!</h2>
        <h3>Something went wrong</h3>
        <h3>{err.status}: {err.statusText}</h3>
    </div>
    )
}

export default Errorpage