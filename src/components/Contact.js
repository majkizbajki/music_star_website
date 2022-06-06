import './Contact.css';
import React, { useState, useEffect } from 'react';

const DUMMY_QUESTIONS = [
    { question: "Huey z Huey Lewis and the News grał na jakim instrumencie?", answers: ['Tak', 'Sport', 'Harmonijka'], goodAnswer: 'Harmonijka' },
    { question: "W którym roku 80-tych Queen poinformowała wszystkich, że ktoś inny ugryzł w pył?", answers: ['1980', 'Pizza', 'Norwegia'], goodAnswer: '1980' },
    { question: "Od 1981 roku Duran Duran wydał dotychczas ile albumów?", answers: ['Hollywood', 'Whitney Houston', '14'], goodAnswer: '14' },
    { question: "W którym roku ukazał się pierwszy wielki hit Katy Perry „I Kissed a Girl”?", answers: ['ABCDE', '2008', 'Katy Perry'], goodAnswer: '2008' },
    { question: "Który zespół odmówił nominacji do Nagrody Merkurego 2001, mówiąc, że ta nagroda jest „jak noszenie martwego albatrosa na szyi przez wieczność”? ", answers: ['Gorillaz', '2021', '1999'], goodAnswer: 'Gorillaz' },
]

function Contact(props) {
    const [randomQuestion, setRandomQuestion] = useState(Math.floor(Math.random() * DUMMY_QUESTIONS.length));

    const drawNumber = () => {
        setRandomQuestion(Math.floor(Math.random() * DUMMY_QUESTIONS.length));
    }

    const [firstClickFirstName, setFirstClickFirstName] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [isFirstNameValid, setIsFirstNameValid] = useState(false);

    const [firstClickLastName, setFirstClickLastName] = useState(false);
    const [lastName, setLastName] = useState("");
    const [isLastNameValid, setIsLastNameValid] = useState(false);

    const [firstClickEmail, setFirstClickEmail] = useState(false);
    const [email, setEmail] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(false);

    const [firstClickPhoneNumber, setFirstClickPhoneNumber] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);

    const [message, setMessage] = useState("");
    const [questAnswer, setQuestAnswer] = useState();

    const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
    const [isFormCorrect, setIsFormCorrect] = useState(false);

    useEffect(() => {
        if (firstClickFirstName) {
            if (firstName.length > 0) {
                document.querySelector('.firstname-correctness').style.visibility = 'hidden';
                setIsFirstNameValid(true);
            }
            else {
                document.querySelector('.firstname-correctness').style.visibility = 'visible';
                setIsFirstNameValid(false);
            }
        }

        if (firstClickLastName) {
            if (lastName.length > 0) {
                document.querySelector('.lastname-correctness').style.visibility = 'hidden';
                setIsLastNameValid(true);
            }
            else {
                document.querySelector('.lastname-correctness').style.visibility = 'visible';
                setIsLastNameValid(false);
            }
        }

        if (firstClickEmail) {
            let emailRegex = new RegExp('[a-z0-9]+@[a-z]+\\.[a-z]{2,3}');
            if (emailRegex.test(email)) {
                document.querySelector('.email-correctness').style.visibility = 'hidden';
                setIsEmailValid(true);
            }
            else {
                document.querySelector('.email-correctness').style.visibility = 'visible';
                setIsEmailValid(false);
            }
        }

        if (firstClickPhoneNumber) {
            let phoneNumberRegex = new RegExp("[0-9]{3}-[0-9]{3}-[0-9]{3}");
            if (phoneNumberRegex.test(phoneNumber)) {
                document.querySelector('.phonenumber-correctness').style.visibility = 'hidden';
                setIsPhoneNumberValid(true);
            }
            else {
                document.querySelector('.phonenumber-correctness').style.visibility = 'visible';
                setIsPhoneNumberValid(false);
            }
        }

        if (questAnswer === DUMMY_QUESTIONS[randomQuestion].goodAnswer) setIsCorrectAnswer(true);
        else setIsCorrectAnswer(false);

        if (isFirstNameValid && isLastNameValid && isEmailValid && isPhoneNumberValid) setIsFormCorrect(true)
        else setIsFormCorrect(false);

    }, [
        firstName, lastName, email, phoneNumber, questAnswer, randomQuestion, isFirstNameValid, isLastNameValid, isEmailValid, isPhoneNumberValid, isCorrectAnswer,
        firstClickFirstName, firstClickLastName, firstClickEmail, firstClickPhoneNumber
    ]);

    const sendForm = () => {
        if (questAnswer !== DUMMY_QUESTIONS[randomQuestion].goodAnswer) {
            drawNumber();
            document.querySelector('.form-validation').style.visibility = 'visible';
        }
        else {
            //
            // send form data function here!
            //
            document.querySelector('.form-validation').style.visibility = 'hidden';
            document.querySelector('.contact-title').style.display = "none";
            document.querySelector('.form-container').style.display = "none";
            document.querySelector('.form-passed').style.display = "flex";
        }
    }

    useEffect(() => {
        if(phoneNumber.length === 3 || phoneNumber.length === 7){
            document.getElementById('phonenumber').value = phoneNumber+"-";
        }
    }, [phoneNumber])

    return (
        <div className='contact-container contact-container-static'>
            <h1 className='contact-title'>Formularz kontaktowy</h1>
            <div className='form-container'>
                <div className='main-info-container'>
                    <div className='part-info-container'>
                        <input
                            type="text"
                            id='firstname'
                            name="firstname"
                            placeholder='Imię'
                            onChange={e => setFirstName(e.target.value)}
                            onFocus={() => {
                                document.querySelector('.firstname-correctness').style.visibility = 'show';
                                setFirstClickFirstName(true);
                            }}
                        />
                        <p className='firstname-correctness'>To pole jest obowiązkowe!</p>
                        <input
                            type="text"
                            id='lastname'
                            name="lastname"
                            placeholder='Nazwisko'
                            onChange={e => setLastName(e.target.value)}
                            onFocus={() => {
                                document.querySelector('.lastname-correctness').style.visibility = 'show';
                                setFirstClickLastName(true);
                            }}
                        />
                        <p className='lastname-correctness'>To pole jest obowiązkowe!</p>
                    </div>
                    <div className='part-info-container'>
                        <input
                            type="email"
                            id='email'
                            name="email"
                            placeholder='Adres e-mail'
                            onChange={e => setEmail(e.target.value)}
                            onFocus={() => {
                                document.querySelector('.email-correctness').style.visibility = 'show';
                                setFirstClickEmail(true);
                            }}
                        />
                        <p className='email-correctness'>Niepoprawny adres e-mail!</p>
                        <input
                            type="tel"
                            id='phonenumber'
                            name="phonenumber"
                            pattern='[0-9]{3}-[0-9]{3}-[0-9]{3}'
                            placeholder='Numer telefonu'
                            onChange={e => setPhoneNumber(e.target.value)}
                            onFocus={() => {
                                document.querySelector('.phonenumber-correctness').style.visibility = 'show';
                                setFirstClickPhoneNumber(true);
                            }}
                        />
                        <p className='phonenumber-correctness'>Niepoprawny numer telefonu!</p>
                    </div>
                </div>
                <textarea
                    placeholder='Treść wiadomości...'
                    id='message'
                    maxLength={250}
                    onChange={() => {
                        setMessage(document.getElementById('message').value);
                    }}
                />
                <h1 className='question-title'>Pytanie kontrolne</h1>
                <h2 className='question'>{DUMMY_QUESTIONS[randomQuestion].question}</h2>
                {DUMMY_QUESTIONS[randomQuestion].answers.map(item => (
                    <div className='form-radio-input-container' key={item}>
                        <input style={{ width: 25, height: 25 }} type="radio" name="answer" value={item} onClick={() => {
                            setQuestAnswer(item);
                        }} />
                        <label className='form-radio-label'>{item}</label>
                    </div>
                ))}
                <p className='form-validation'>Formularz został wypełniony niepoprawnie!</p>
                <button className='submit-button' onClick={() => {
                    if (isFormCorrect) {
                        sendForm();
                    }
                }}>Wyślij</button>
            </div>
            <div className='form-passed'>
                <h2 className='form-passed-title'>Twój formularz został przesłany do mojego menadżera!</h2>
                <h3 className='form-passed-message'>W najbliższym czasie skontaktuje się on z Tobą poprzez adres mailowy umieszczony w formularzu. </h3>
            </div>
        </div>
    )
}

export default Contact;