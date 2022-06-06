import './Albums.css';

import CafeBelga from '../images/cafebelga.jpg';
import Europa from '../images/europa.jpg';
import Flagey from '../images/flagey.jpg';
import Jarmark from '../images/jarmark.jpg';
import Marmur from '../images/marmur.jpg';
import PocztowkaZWwa from '../images/pocztowka.jpg';
import Soma from '../images/soma.jpg';
import Szprycer from '../images/szprycer.jpg';
import TrojkatWarszawski from '../images/trojkat.jpg';
import UmowaODzielo from '../images/umowa.jpg';
import Wosk from '../images/wosk.jpg';
import YoungHems from '../images/younghems.jpg';

function Albums() {

    const albums = [
        { title: "Europa (2020)", img: Europa },
        { title: "Jarmark (2020)", img: Jarmark },
        { title: "Pocztówka z WWA, Lato '19 (2019)", img: PocztowkaZWwa },
        { title: "Café Belga (2018)", img: CafeBelga },
        { title: "Flagey (2018)", img: Flagey },
        { title: "Soma 0,5 mg (2018)", img: Soma },
        { title: "Szprycer (2017)", img: Szprycer },
        { title: "Marmur (2016)", img: Marmur },
        { title: "Wosk (2016)", img: Wosk },
        { title: "Umowa o dzieło (2015)", img: UmowaODzielo },
        { title: "Trójkąt Warszawski (2014)", img: TrojkatWarszawski },
        { title: "Young Hems (2013)", img: YoungHems },
    ]

    return (
        <div className='albums-container albums-container-static'>
            <h1 className='albums-title'>Albumy</h1>
            <div className='albums-content'>
                {albums.map(item => (
                    <div key={item.title} className='albums-item'>
                        <h1 className='albums-name'>{item.title}</h1>
                        <img className='albums-image' src={item.img} alt='Zdjęcie albumu' />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Albums;