import React from 'react'
import {
    Link,
    Outlet,
    RouterProvider,
    createBrowserRouter,
} from 'react-router-dom'

import { Main } from '@pages/Main'
import { Documents } from '@pages/Documents'
import { Calculator } from '@pages/Calculator'

import './main.css'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <div>Error</div>,
        children: [
            { index: true, element: <Main /> },
            {
                path: 'calc',
                element: <Calculator />,
            },
            {
                path: 'docs',
                element: <Documents />,
            },
        ],
    },
    {
        path: '*',
        element: <div>Not match</div>,
    },
])

function Layout() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/docs">Documents</Link>
                    </li>
                    <li>
                        <Link to="/calc">Calculator</Link>
                    </li>
                </ul>
            </nav>

            <hr />

            <Outlet />
        </div>
    )
}

const App: React.FC = () => (
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)

export default App
