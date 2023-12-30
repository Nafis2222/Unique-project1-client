import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Basic = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default Basic;