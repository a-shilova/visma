import {
    BrowserRouter,
    Route,
    RouterProvider,
    Routes,
    createBrowserRouter,
} from 'react-router-dom'

import './main.css'
import { Main } from '@pages/Main'
import { Documents } from '@pages/Documents'
import { Calculator } from '@pages/Calculator'
import { useEffect } from 'react'
import React from 'react'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <div>Error</div>,
        children: [
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

const App: React.FC = () => (
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)

export default App
