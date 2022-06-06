import './Body.css';
import React, { useState, useEffect } from 'react';

import About from '../components/About';
import Albums from '../components/Albums';
import Contact from '../components/Contact';
import Events from '../components/Events';

const DUMMY_NAVIGATOR = [<About />, <Events />, <Albums />, <Contact />]

function Body(props) {

    const [navigationButtonNumber, setNavigationButtonNumber] = useState(0);
    var previous = null;

    useEffect(() => {
        setNavigationButtonNumber(props.pickedTitle)
    }, [props.pickedTitle])

    useEffect(() => {
        const setBoxColor = () => {
            document.querySelectorAll('.navigation-button').forEach(item => {
                item.classList.remove('selected-navigation-button');
            })
            document.querySelectorAll('.navigation-button')[navigationButtonNumber].classList.add('selected-navigation-button');
        }
        setBoxColor();
    }, [navigationButtonNumber]);

    useEffect(() => {
        if(navigationButtonNumber === 3){
            transformNavigationBarToLeft();
        }
    }, [navigationButtonNumber])

    const transformNavigationBarToLeft = () => {
        if (document.querySelector('.body-container').className !== 'body-container body-container-left') {
            document.querySelector('.body-container').classList.remove('body-container-top');
            document.querySelector('.navigation-bar').classList.remove('navigation-bar-top');
            document.querySelector('.navigation-bar').classList.remove('navigation-bar-top-static');
            document.querySelector('.navigation-bar').classList.remove('navigation-bar-left-static');
            document.querySelectorAll('.navigation-button').forEach((item) => {
                item.classList.remove('navigation-button-top');
            });
            if (document.querySelector('.about-container')) document.querySelector('.about-container').classList.remove('about-container-static');
            if (document.querySelector('.events-container')) document.querySelector('.events-container').classList.remove('events-container-static');
            if (document.querySelector('.albums-container')) document.querySelector('.albums-container').classList.remove('albums-container-static');
            if (document.querySelector('.contact-container')) document.querySelector('.contact-container').classList.remove('contact-container-static');

            document.querySelector('.body-container').classList.add('body-container-left');
            document.querySelector('.navigation-bar').classList.add('navigation-bar-left');
            document.querySelectorAll('.navigation-button').forEach((item) => {
                item.classList.add('navigation-button-left');
            });
            if (document.querySelector('.about-container')) document.querySelector('.about-container').classList.add('about-container-in');
            if (document.querySelector('.events-container')) document.querySelector('.events-container').classList.add('events-container-in');
            if (document.querySelector('.albums-container')) document.querySelector('.albums-container').classList.add('albums-container-in');
            if (document.querySelector('.contact-container')) document.querySelector('.contact-container').classList.add('contact-container-in');
        }
    }

    const transformNavigationBarToTop = () => {
        if (document.querySelector('.body-container').className !== 'body-container body-container-top') {
            document.querySelector('.body-container').classList.remove('body-container-left');
            document.querySelector('.navigation-bar').classList.remove('navigation-bar-left');
            document.querySelector('.navigation-bar').classList.remove('navigation-bar-left-static');
            document.querySelector('.navigation-bar').classList.remove('navigation-bar-top-static');
            document.querySelectorAll('.navigation-button').forEach((item) => {
                item.classList.remove('navigation-button-left');
            });
            document.querySelector('.body-container').classList.add('body-container-top');
            document.querySelector('.navigation-bar').classList.add('navigation-bar-top');
            document.querySelectorAll('.navigation-button').forEach((item) => {
                item.classList.add('navigation-button-top');
            });
        }
    }

    return (
        <div className='body-container body-container-top'>
            <div className='navigation-bar navigation-bar-top-static'>
                <button className='navigation-button navigation-button-top' onClick={() => {
                    previous = navigationButtonNumber;
                    setNavigationButtonNumber(0);
                    transformNavigationBarToTop();
                }}>O mnie</button>
                <button className='navigation-button navigation-button-top' onClick={() => {
                    previous = navigationButtonNumber;
                    setNavigationButtonNumber(1);
                    transformNavigationBarToTop();
                }}>Koncerty</button>
                <button className='navigation-button navigation-button-top' onClick={() => {
                    previous = navigationButtonNumber;
                    setNavigationButtonNumber(2);
                    transformNavigationBarToTop();
                }}>Albumy</button>
                <button className='navigation-button navigation-button-top' onClick={() => {
                    previous = navigationButtonNumber;
                    setNavigationButtonNumber(3);
                }}>Kontakt</button>
            </div>
            {DUMMY_NAVIGATOR[navigationButtonNumber]}
        </div>
    )
}

export default Body;