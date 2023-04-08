import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from './components/Home';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            }
        ]
    },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
