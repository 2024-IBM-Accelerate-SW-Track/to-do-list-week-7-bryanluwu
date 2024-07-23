import React, { Component } from 'react';
import "./About.css";
import ibmpfp from "../assets/ibmpfp.JPG";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div>
        <div className="split left">
        <div className="centered">
        <img 
        className="profile_image"
        src={ibmpfp}
        alt="Profile Pic"
        ></img>
        </div>
        </div>
        <div className="split right">
        <div className="centered">
        <div className="name_title">Bryan Phillips</div>
        <div className="brief_description">
        <p>Hey! My name is Bryan, and I'm a rising junior at North Carolina State University studying computer science. 
            I intend to learn as much as I can throughout this program, and I hope to be able to form bonds that will extend past this program too!
        </p>
        <p>Outside of just the usual computer science lifestyle, I love rock climbing, working out, eating good food, skating, and playing sports with friends. 
            I also own a onewheel board that I particularly enjoy riding around campus with.
        </p> 
        <p>In terms of what I am interested in most in computer science, 
            I would say I would like to indulge in full-stack development and would love to learn more about this particular aspect. 
            Although most of my education has been catered more towards back-end development, I hope to be able to learn more about cloud, security, and front-end development 
            throughout this program.
        </p>
        </div>
        </div>
        </div>
        </div>
      </div>
    )
  }
}