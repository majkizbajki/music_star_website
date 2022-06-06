import './App.css';
import React, { useState } from 'react';

import Header from "./components/Header";
import Body from './components/Body';

function App() {

  document.documentElement.style.setProperty('--pageOverflow', 'scroll');

  const [pickedTitle, setPickedTitle] = useState(0);

  function scrollDown(value) {
    setPickedTitle(value);
    if (value === 0 || value === 1 || value === 2) {
      document.querySelector('.body-container').classList.remove('body-container-left');
      document.querySelector('.navigation-bar').classList.remove('navigation-bar-left');
      document.querySelector('.navigation-bar').classList.remove('navigation-bar-left-static');
      document.querySelectorAll('.navigation-button').forEach((item) => {
        item.classList.remove('navigation-button-left');
      });
      if (document.querySelector('.about-container')) document.querySelector('.about-container').classList.remove('about-container-in');
      if (document.querySelector('.events-container')) document.querySelector('.events-container').classList.remove('events-container-in');
      if (document.querySelector('.albums-container')) document.querySelector('.albums-container').classList.remove('albums-container-in');
      if (document.querySelector('.contact-container')) document.querySelector('.contact-container').classList.remove('contact-container-in');


      document.querySelector('.body-container').classList.add('body-container-top');
      document.querySelector('.navigation-bar').classList.add('navigation-bar-top-static');
      document.querySelectorAll('.navigation-button').forEach((item) => {
        item.classList.add('navigation-button-top');
      });
      if (document.querySelector('.about-container')) document.querySelector('.about-container').classList.add('about-container-static');
      if (document.querySelector('.events-container')) document.querySelector('.events-container').classList.add('events-container-static');
      if (document.querySelector('.albums-container')) document.querySelector('.albums-container').classList.add('albums-container-static');
      if (document.querySelector('.contact-container')) document.querySelector('.contact-container').classList.add('contact-container-static');
    }
    else {
      document.querySelector('.body-container').classList.remove('body-container-top');
      document.querySelector('.navigation-bar').classList.remove('navigation-bar-top');
      document.querySelector('.navigation-bar').classList.remove('navigation-bar-top-static');
      document.querySelectorAll('.navigation-button').forEach((item) => {
        item.classList.remove('navigation-button-top');
      });
      if (document.querySelector('.about-container')) document.querySelector('.about-container').classList.remove('about-container-in');
      if (document.querySelector('.events-container')) document.querySelector('.events-container').classList.remove('events-container-in');
      if (document.querySelector('.albums-container')) document.querySelector('.albums-container').classList.remove('albums-container-in');
      if (document.querySelector('.contact-container')) document.querySelector('.contact-container').classList.remove('contact-container-in');


      document.querySelector('.body-container').classList.add('body-container-left');
      document.querySelector('.navigation-bar').classList.add('navigation-bar-left-static');
      document.querySelectorAll('.navigation-button').forEach((item) => {
        item.classList.add('navigation-button-left');
      });
      if (document.querySelector('.about-container')) document.querySelector('.about-container').classList.add('about-container-static');
      if (document.querySelector('.events-container')) document.querySelector('.events-container').classList.add('events-container-static');
      if (document.querySelector('.albums-container')) document.querySelector('.albums-container').classList.add('albums-container-static');
      if (document.querySelector('.contact-container')) document.querySelector('.contact-container').classList.add('contact-container-static');
    }
    setTimeout(() => {
      document.getElementById('app').scrollBy({
        top: 1,
        behavior: 'smooth'
      });
    }, 50);
  }

  return (
    <div id='app' className='app'>
      <Header scrollDown={scrollDown} className='header'></Header>
      <Body pickedTitle={pickedTitle} className='body'></Body>
    </div>
  );
}

export default App;
