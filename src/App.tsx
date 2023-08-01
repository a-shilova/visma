import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'

import { Header } from '@components/Header/Header'

import { Main } from '@pages/Main'
import { Documents } from '@pages/Documents'
import { Calculator } from '@pages/Calculator'

import './main.css'

function Layout() {
    return (
        <>
            <Header />

            <hr />

            <Outlet />
        </>
    )
}

const App: React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Main />} />
                <Route path="/docs" element={<Documents />} />
                <Route path="/calc" element={<Calculator />} />
            </Route>
        </Routes>
    </BrowserRouter>
)

export default App
