import './Header.css';
import React, { useState, useEffect } from 'react';

import albumsImage from '../images/albumy.jpg';
import eventsImage from '../images/koncerty.jpg';
import aboutImage from '../images/o_mnie.jpg';
import contactImage from '../images/kontakt.jpg';

const DUMMY_HEADER_TITLES = [
    { title: 'O mnie', href: '.about-container', img: aboutImage },
    { title: 'Koncerty', href: '.events-container', img: eventsImage },
    { title: 'Albumy', href: '.albums-container', img: albumsImage },
    { title: 'Kontakt', href: '.contact-container', img: contactImage }
];

function Header(props) {

    const headerTitles = DUMMY_HEADER_TITLES;
    const [titleNumber, setTitleNumber] = useState(0);

    let titleTimer = setTimeout(() => {
        if (titleNumber === (headerTitles.length - 1))
            setTitleNumber(0);
        else
            setTitleNumber(titleNumber + 1);
    }, 5000);


    useEffect(() => {
        const setBoxColor = () => {
            document.querySelectorAll('.rounded-box').forEach(item => {
                item.classList.remove('selected-rounded-box');
            })
            document.querySelectorAll('.rounded-box')[titleNumber].classList.add('selected-rounded-box');
        }
        setBoxColor();
    }, [titleTimer, titleNumber]);

    return (
        <div className='header-container'>
            <div className='title-container'>
                <button className='left-button' onClick={async () => {
                    clearTimeout(titleTimer);
                    if (titleNumber === 0)
                        setTitleNumber(headerTitles.length - 1);
                    else
                        setTitleNumber(titleNumber - 1);
                }}>
                    &lt;
                </button>
                <div className='title-box'>
                    <h1 className='title'>Taco Hemingway</h1>
                    <button className='title-button' onClick={() => {
                        props.scrollDown(titleNumber);
                    }}>{headerTitles[titleNumber].title}</button>
                    <div className='rounded-box-container'>
                        {headerTitles.map(item => <div key={item.title} className='rounded-box' />)}
                    </div>
                </div>
                <button className='right-button' onClick={() => {
                    clearTimeout(titleTimer);
                    if (titleNumber === (headerTitles.length - 1))
                        setTitleNumber(0);
                    else
                        setTitleNumber(titleNumber + 1);

                }}>
                    &gt;
                </button>
            </div>
            <div className='image-container'>
                <div className='image-box'>
                    <img className='title-image' src={headerTitles[titleNumber].img} alt="Zdjęcie tytułowe" />
                </div>
            </div>
        </div>
    )
}

export default Header;