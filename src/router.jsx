import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home"
import ItemsPage from "./pages/ItemsPage"
import CreateItems from "./pages/CreatItem"
import EditItem from "./pages/EditItem"
import IndividualPage from "./pages/Individual"

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
    ,
    {
        path: "edit" ,
        element: <EditItem/>
    }
    ,
    {
        path: "individual" ,
        element: <IndividualPage/>
    }
    
])

export default router