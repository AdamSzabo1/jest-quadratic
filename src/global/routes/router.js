import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import { QuadraticContainer } from "../../features/quadratic";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                index: true,
                element: <QuadraticContainer />
            }
        ]
    }
]);

export default router;
