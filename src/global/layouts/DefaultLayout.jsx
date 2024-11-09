import { Outlet } from "react-router";

const DefaultLayout = () => {

    return (
        <div className="container app-area">
            <Outlet />
        </div>
    );
}

export default DefaultLayout;
