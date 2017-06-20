import React, { Component } from 'react';
import { Link } from 'react-router';

class NavBar extends Component {
    render() {
        return (
            <nav className="nav has-shadow">
                <div className="container">
                    <div className="nav-left">
                        <a className="nav-item">
                            <img src="https://northcoders.com/images/logos/learn_to_code_manchester_rw_original.png" alt="northcoders" />
                        </a>
                        <span class="nav-toggle">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                        <Link to='/' className="nav-item" >Top</Link>
                        <Link to='/football' className="nav-item">Football</Link>
                        <Link to='/cooking' className="nav-item">Cooking</Link>
                        <Link to='/coding' className="nav-item">Coding</Link>
                    </div>
                </div>
            </nav >
        );
    }
}

export default NavBar;


