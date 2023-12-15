import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Basic = () => {
    return (
        <div>
            <h1>Bangladesh</h1>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Basic;