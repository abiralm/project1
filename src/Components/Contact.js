import React from "react";
import { Link } from "react-router-dom";
import "../styles.css"

export default function Contact() {
    return (
        <div>
            <div className="contact">
                <h1>Need Something? We are here to help.</h1>
                <h2>Send your queries below</h2>
            </div>
            <div>
                <form action="/action_page.php">
                    <input type="text" id="fname" name="firstname" placeholder="Your query..." />
                </form>
                <button></button>
            </div>

        </div>
    )
}