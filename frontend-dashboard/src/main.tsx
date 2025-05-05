import React from 'react'
import {createRoot} from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import {routes} from "./routes";

import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
