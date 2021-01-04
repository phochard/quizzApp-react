import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Navbar extends Component {
    state = {}
    render() {
        return ( <nav className = "navbar has-background-white"
            role = "navigation"
            aria-label = "main navigation" >
            <div className = "navbar-brand" >
            <a className = "navbar-item"
            href = "/" >
            <img src = "https://cdn.pixabay.com/photo/2017/06/15/11/49/question-mark-2405202__340.png"
            alt = "img"
            className = "logo" />
            </a> </div >
            
            <div id = "navbarBasicExample"
            className = "navbar-menu" >
            <div className = "navbar-start" >
            <NavLink exact to = "/"
            className = "navbar-item is-size-2"
            activeClassName = "is-active" > Accueil </NavLink>  
            <NavLink to = "/categories"
            className = "navbar-item is-size-2"
            activeClassName = "is-active" > Thèmes </NavLink>  
            <NavLink to = "/quizzs"
            className = "navbar-item is-size-2"
            activeClassName = "is-active" > quizz </NavLink>

            </div> </div > </nav>
        );
    }
}
export default Navbar;