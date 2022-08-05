import React from "react";
import { Link } from "react-router-dom";
import "../styles.css"

export default function Navbar() {
    return (
        <nav className="navv">
            <div className="nav-1">
                <a href="/" className="logo">Logo</a>
            </div>
            <div >
                <ul className="nav-2">
                    <Link to="/about">
                        <li><a>About</a></li>
                    </Link>
                    {/*<Link to="/classrooms">
                        <li><a href="/classrooms">Classrooms</a></li>
                    </Link>
                    <Link to="/materials">
                        <li><a>Materials</a></li>

                    </Link>*/}
                    <Link to="/discussions">
                        <li><a>Discussion</a></li>
                    </Link>
                    <Link to="/contact">
                        <li><a>Contact</a></li>
                    </Link>
                </ul>
            </div>
            <div className="nav-3">
                <button className="sign-up"> Sign Up</button>
                <button className="sign-in">Sign In</button>
            </div>
        </nav>
    )
}