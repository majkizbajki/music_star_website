import './Events.css';

function Events() {
    return (
        <div className='events-container events-container-static'>
            <h1 className='events-title'>Trasa koncertowa 2022</h1>
            <div className='events-content'>
                <h1 className='events-text-left'>Katowice, MCK – 7 maja 2022</h1>
                <h1 className='events-text-right'>Kraków, Tauron Arena – 8 maja 2022</h1>
                <h1 className='events-text-left'>Wrocław, Hala Stulecia – 14 maja 2022</h1>
                <h1 className='events-text-right'>Łódź, Wytwórnia – 15 maja 2022</h1>
                <h1 className='events-text-left'>Toruń, Toruń Arena – 20 maja 2022</h1>
                <h1 className='events-text-right'>Rzeszów, Millenium Hall – 22 maja 2022</h1>
                <h1 className='events-text-left'>Szczecin, Netto Arena – 27 maja 2022</h1>
                <h1 className='events-text-right'>Gdańsk, S1 – 28 maja 2022</h1>
                <h1 className='events-text-left'>Lublin, Targi Lublin – 3 czerwca 2022</h1>
                <h1 className='events-text-right'>Warszawa, Lotnisko Bemowo – 10 czerwca 2022</h1>
                <h1 className='events-text-left'>Poznań, Malta – 11 czerwca 2022</h1>
            </div>
            <div className='last-events'>
                <h1 className='last-events-title'>Taco na Narodowym</h1>
                <iframe width="60%" height="620px" src="https://www.youtube.com/embed/ejXNRaisVOE" title="Taco na Narodowym"></iframe>
            </div>
        </div>
    )
}

export default Events;