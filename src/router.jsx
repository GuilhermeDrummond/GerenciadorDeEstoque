import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ItemsPage from "./pages/ItemsPage";
import CreateItems from "./pages/CreatItem";
import Individual from "./pages/Individual";

const router = (items, setItems, handleDeleteItem) => createBrowserRouter([
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
        path: "individual/:id",
        element: <Individual items={items} onDeleteItem={handleDeleteItem} />,
    },
]);

export default router;
