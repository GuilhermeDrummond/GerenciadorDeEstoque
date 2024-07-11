import { element } from "prop-types";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home"
import ItemsPage from "./pages/ItemsPage"
import CreateItems from "./pages/CreatItem"

const router = createBrowserRouter ([
    {
     path:"/",
     element: <Home />,
    }
    ,
    {
     path: "items" , 
     element: <ItemsPage />,
    }
    ,
    {
        path: "create" ,
        element: <CreateItems/>
    }
    
    
])

export default router