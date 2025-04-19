import CustomSVG from './detective.js';
import { useState, useRef } from 'react';

function ContactMe() {
  const [showContact, setShowContact] = useState(false);
  const [tempVar, setTempVar] = useState("..."); // question
  const [bTempVar, setbTempVar] = useState("Hey!!"); // answer
  const [animationKey, setAnimationKey] = useState(0); // key to reset animation
  
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
      <div className={`contact-wrapper ${showContact ? 'visible' : ''}`}>
        <div className="contact-info">
        {tempVar.includes('github') ? (
    <div key={animationKey} className="links fade-links">
      <div className="fade-link">
        <a 
          className = "link"
          href="https://github.com/HnarimanH" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ pointerEvents: 'auto' }}
        >
          Github: HnarimanH
        </a>
      </div>
      <div className="fade-link">
        <a 
        className = "link"
          href="https://t.me/narimanhosseinzadeh465" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ pointerEvents: 'auto' }}
        >
          Telegram: @narimanhosseinzadeh465
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

      <CustomSVG onClick={toggleContact} className={`detectiveContainer ${showContact ? 'visible' : ''}`}></CustomSVG>
      <p className={`who ${showContact ? 'visible' : ''}`}>Who is he? <br/> Click him</p>
    </div>
  );
}

export default ContactMe;

