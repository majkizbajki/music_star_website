import './About.css';

import myFaceImage from '../images/ja.jpg';

function About() {
    return (
        <div className='about-container about-container-static'>
            <h1 className='about-title'>Kilka słów o mnie...</h1>
            <div className='about-content'>
                <p className='about-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod pulvinar erat vel viverra. Aliquam eros dui, porttitor tristique fringilla nec, pulvinar et ex.
                    Donec nec porta enim, non malesuada magna. Morbi ultricies, nunc auctor condimentum eleifend, risus nulla pellentesque ante, nec tempus odio elit quis mauris.
                    Cras enim purus, dapibus ut pharetra laoreet, dictum et odio. Sed volutpat felis magna, sed iaculis neque aliquam at. Maecenas rhoncus sed tortor ut tristique.
                    Sed vitae purus ac mauris feugiat molestie sit amet at felis. Morbi convallis euismod felis, sit amet tempus nunc imperdiet ut. Ut feugiat eros ut velit consectetur
                    ullamcorper sit amet et ex. Sed interdum, libero nec sagittis consectetur, est diam iaculis dolor, nec placerat est metus dignissim lorem. Integer in laoreet lorem.
                    Vestibulum ut tincidunt dolor. Maecenas condimentum a dolor vel blandit. Duis imperdiet venenatis justo, quis dictum urna molestie et. Aenean id malesuada urna.
                </p>
                <div className='about-image-box'>
                    <img className='about-image' src={myFaceImage} alt="Zdjęcie twórcy" />
                </div>
            </div>
        </div>
    )
}

export default About;