import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Catalog from '../pages/Catalog'
import Detail from '../pages/Detail'
import Home from '../pages/Home'


const Switch = () => {
    return (
        //Switch
        <Routes>
            <Route
                path='/:category/search/:keyword'
                component={Catalog}
            />
            <Route
                path='/:category/:id'
                component={Detail}
            />
            <Route
                path='/:category'
                component={Catalog}
            />
            <Route
                path='/'
                exact
                component={Home}
            />
        </Routes>
    )
}

export default Switch // Routes