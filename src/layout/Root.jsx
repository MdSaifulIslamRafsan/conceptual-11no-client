import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <>
            {/* Navbar */}

            {/* outlet */}
            <Outlet></Outlet>
            {/* footer */}
        </>
    );
};

export default Root;