import React, { useRef, useState } from 'react';
import "./contact.css";
import Phone from "../../images/phone.svg"
import email1 from "../../images/email.svg"
import whatsapp from "../../images/whatsapp.svg"
import instagram from "../../images/instagram.svg"
import Facebook from "../../images/facebook.png"
import address from "../../images/address.png"
import emailjs from 'emailjs-com';
import { useContext } from 'react';
import { ThemeContext } from '../../context';

const Contact = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  

  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_re7jk9h', 
      'template_fglkaqg', 
      formRef.current, '1aZQ-TvnCFA_856Ev')
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
      }, 
      (error) => {
          console.log(error.text);
      }
      );
  };

  return (
    <div className='c'>
      <div className="c-shape"></div>
      <div className="c-bg"></div>
      <div className="c-bg1"></div>
      <div className="c-wrapper">
      <div className="c-left">
         <div className="c-infi-z">
            <h1 className="c-title">
            Let's Talk about your Project
            </h1>
            </div>
        <div className="c-info">
            <div className="c-info-item">
                <img src={Phone}
                alt="" 
                className="c-icon" 
                />
                +234 903 365 0904
            </div>
            <div className="c-info-item">
                <img src={email1}
                alt="" 
                className="c-icon" 
                />
                erhisowomedanielking@gmail.com
            </div>
            <div className="c-info-item">
                <img src={whatsapp}
                alt="" 
                className="c-icon" 
                />
                +234 802 647 3174
            </div>
            <div className="c-info-item">
                <img src={instagram}
                alt="" 
                className="c-icon" 
                />
                erhis_daniel@ig
            </div>
            <div className="c-info-item">
                <img src={Facebook}
                alt="" 
                className="c-icon" 
                />
                erhisohwodedaniel@facebook.com
            </div>
            <div className="c-info-item">
                <img src={address}
                alt="" 
                className="c-icon" 
                />
                Victoria Island, Lagos, Nigeria.
            </div>
        </div>
      </div>
        <div className="c-right">
        <p className="c-desc">
            <b>What's your story?</b> Get in touch. Always available for
            freelancing if the right project comes along.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" 
            name="user_name" 
            style={{color:darkMode ? "white" : "white" , background:darkMode ? " " : "rgba(0, 0, 0, 0.486"}}/>
            <input type="text" placeholder="Subject" 
            name="user_subject"
            style={{color:darkMode ? "white" : "white" , background:darkMode ? " " : "rgba(0, 0, 0, 0.486"}}/>
            <input type="text" placeholder="Email" 
            name="user_email" 
            style={{color:darkMode ? "white" : "white" , background:darkMode ? " " : "rgba(0, 0, 0, 0.486"}}/>
            <textarea rows="5" placeholder="Message" 
            name="message"
            style={{color:darkMode ? "white" : "white" , background:darkMode ? " " : "rgba(0, 0, 0, 0.486"}}/>
            <button className='Btn' style={{color:darkMode ? "white" : "black", 
            borderColor:darkMode ? "white" : "black", 
            backgroundColor:darkMode ? "black" : "white" }}>
              Submit</button>
            {done && "Thank you...."}
          </form>
        </div>
      </div>
      <div className="c-footer">eris.dev@2022</div>
    </div>
  )
}

export default Contact
