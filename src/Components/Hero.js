import React from "react";
import "../hero.css"

export default function Hero() {
    return (
        <div className="hero">
            <div className="section-1">
                <p className="title">For learners and educators beyond the classrooms</p>
                <p className="sub-title">All your e-learning needs in one app </p>
                <button className="hero-sign-up">Sign up</button>
                <p><a className="hero-sign-in">Already a Member?</a></p>
            </div>
            <div className="section-2">
                <img className="main-img" src="https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </div>
        </div>
    )
}