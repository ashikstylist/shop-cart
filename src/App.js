import React, { Component } from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Authentication from './Pages/Authentication'
import Shoes from './Pages/Shoes'
import ShoeDetail from './Pages/ShoeDetail'
import './App.css'
import {AuthProvider} from './context/AuthContext'
import ScrollTop from "./Components/ScrollTop";

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


export default class App extends Component {
    render() {
        return (
            
            <AuthProvider>
                <Router >
                <div >
                <ScrollTop>
                    <Switch >
                    <Route exact path = "/" >
                        <Home />
                    </Route>
                    <Route path = "/about" >
                        <About />
                    </Route>
                    <Route path = "/contact" >
                        <Contact />
                    </Route>
                    <Route path = "/authentication" >
                        <Authentication />
                    </Route>
                    <Route path = "/shoes" >
                        <Shoes />
                    </Route>
                    <Route  path = "/shoe-detail/:id"
                    component = { ShoeDetail }
                    /> 
                    </Switch > 

                </ScrollTop>
                </div> 
                </Router >
            </AuthProvider>
        )
    }
}