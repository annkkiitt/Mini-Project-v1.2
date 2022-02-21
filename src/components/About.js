import React from 'react'
import './Components.css';
import image1 from './globe.svg';
import image2 from './user.svg';
import image3 from './gear.svg';

export default function About() {

  return (
    <>
    <div className="accordian">
      <h3><img src={image1}></img>About Project</h3>
      <p>So my project is on <strong>Web design and development using REACT</strong>. React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies. React can be used as a base in the development of single-page applications.</p>
    </div>

    <div className="accordian">
      <h3><img src={image2}></img>About Me</h3>
      <p>I'm Ankit Rawat and currently I'm doing B.Tech in Computer Science from <strong>Graphic Era Hill University</strong>.</p>
    </div>

    <div className="accordian">
      <h3><img src={image3}></img>About Website</h3>
      <p><strong>TextUtils</strong> is a website which can be used to analyze text and can can be used to change case of text,copy text,remove extra space etc.</p>
    </div>
    </>
  )
}
