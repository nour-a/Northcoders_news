import React, { Component } from 'react';
import { Link } from 'react-router';

class NavBar extends Component {
    render() {
        return (
            <nav className="nav has-shadow">
                <div className="container">
                    <div className="nav-left">
                        <a className="nav-item">
                            <img src="https://avatars2.githubusercontent.com/u/16081355?v=3&s=200" alt="northcoders" /></a>
                        <Link to='/' className="nav-item" >Top</Link>
                        <Link to='/football' className="nav-item">Football</Link>
                        <Link to='/cooking' className="nav-item">Cooking</Link>
                        <Link to='/coding' className="nav-item">Coding</Link>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;


