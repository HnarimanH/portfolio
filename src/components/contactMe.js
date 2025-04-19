import CustomSVG from './detective.js';
import Lamp from './lamp.js';
import { useState, useRef } from 'react';

function ContactMe() {
  const [showContact, setShowContact] = useState(false);
  const [tempVar, setTempVar] = useState("..."); // question
  const [bTempVar, setbTempVar] = useState("Hey!!"); // answer
  const [animationKey, setAnimationKey] = useState(0); // key to reset animation
  const [isLampOn, setIsLampOn] = useState(false);
  const toggleLamp = () => {
    setIsLampOn(!isLampOn);
  };
  const toggleContact = () => {
    setShowContact(!showContact);
  };

  const conversation = [
    { question: "What do you want?", answer: "How do I reach him?" },
    { question: "Oh!? Why? What 'Business' do you have with him?", answer: "None of Your 'Business'. He knows me." },
    { question: "Ok Then, here it is.", answer: "Go On!" },
    { question: "github : HnarimanH , telegram : @narimanhosseinzadeh465", answer: "thanks bye" },
  ];

  const wichQ = useRef(0);

  function nextQuestion() {
    if (wichQ.current < conversation.length) {
      const q = conversation[wichQ.current];
      setTempVar(q.question);
      setbTempVar(q.answer);
      wichQ.current += 1;
      setAnimationKey(prevKey => prevKey + 1); 
    } else {
      
      setShowContact(!showContact);

    }
  }

  return (
    <div id="contact" className="contactMe">
      
      <div className={`contact-wrapper ${showContact ? 'visible' : ''} contact-wrapper-back ${isLampOn ? '' : 'black'}`}>
      <Lamp onClick={toggleLamp} isLampOn={isLampOn}></Lamp>
      <div className={`scene ${isLampOn ? 'visible' : ''}`}>
        <div className="contact-info">
          {tempVar.includes('github') ? (
                    <div key={animationKey} className="links fade-links">
                    <div className="fade-link" style={{ display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'center' }}>
                      <a href="https://instagram.com/nariman_heathen" target="_blank" rel="noopener noreferrer" title="Instagram">
                        <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="Instagram" height="30" width="30" />
                      </a>
                      <a href="https://t.me/narimanhosseinzadeh465" target="_blank" rel="noopener noreferrer" title="Telegram">
                        <img src="https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/telegram.svg" alt="Telegram" height="30" width="30" />
                      </a>
                      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hosseinzadehnariman465@gmail.com" target="_blank" rel="noopener noreferrer" title="Email">
                        <img src="https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/email.svg" alt="Email" height="30" width="30" />
                      </a>
                      <a href="https://github.com/HnarimanH" target="_blank" rel="noopener noreferrer" title="GitHub">
                        <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg" alt="GitHub" height="30" width="30" />
                       </a>
        
            </div>
          </div>
          
  ) : (
    <p className="question" id="question" key={animationKey}>
      {tempVar}
    </p>
  )}
        
        </div>
        <CustomSVG className='detectiveContainer'></CustomSVG>
        <button onClick={nextQuestion} className='answer' key={animationKey}>{bTempVar}</button>
      </div>
      </div>

      <CustomSVG onClick={toggleContact} className={`detectiveContainer ${showContact ? 'visible' : ''}`}></CustomSVG>
      <p className={`who ${showContact ? 'visible' : ''}`}>Who is he? <br/> Click him</p>
    </div>
  );
}

export default ContactMe;
