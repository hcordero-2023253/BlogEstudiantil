import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router"
import {CurseCommentsContainer} from '../pages/CursePublication';


const router = createBrowserRouter([
    {
        path: '/',
        element: (
                <CurseCommentsContainer/>
        ),
    },
])

const MyRoutes = ()=><RouterProvider router={router}/>

export default MyRoutes