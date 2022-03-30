import React from 'react';
import shh from "../assets/shh.jpg";
import "../styles/About.css"

function About() {
  return (
    <div className='about'>
        <div 
        className='aboutTop' 
        style={{ backgroundImage: `url(${shh})` }}
        ></div>
        <div className='aboutBottom'>
            <h1>ABOUT US</h1>
            <p>Mr. Shawarmas menu is intentionally simple, with an emphasis on quality over quantity. Every menu item has been mindfully 
                added and meticulously tested to edible perfection. Only the highest quality ingredients are considered, 
                including spices direct from Israel and halal meats. While higher quality demands higher costs, the difference in taste is unmistakeable</p>
        </div>
    </div>
  );
}

export default About;