import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ItemsPage from "./pages/ItemsPage";
import CreateItems from "./pages/CreatItem";
import EditItem from "./pages/EditItem";
import Individual from "./pages/Individual";

const router = (items, setItems) => createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "items",
        element: <ItemsPage items={items} setItems={setItems} />,
    },
    {
        path: "create",
        element: <CreateItems items={items} setItems={setItems} />,
    },
    {
        path: "edit/:id",
        element: <EditItem items={items} setItems={setItems} />,
    },
    {
        path: "individual/:id",
        element: <Individual items={items} />,
    },
]);

export default router;
