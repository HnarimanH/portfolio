import { useState } from "react";
function About(){
  const [powered, setPowered] = useState(false);

  return (
    <div className="aboutContainer">
      <div className="textContainer">
      <button
          className={`powerBtn ${powered ? 'on' : 'off'}`}
          onClick={() => setPowered(!powered)}
        >
        </button>
        <h1 className="Hi">
          Hi. I'm <span className={`name ${powered ? 'glow' : 'off'}`}>Nariman</span>
        </h1>
        
        <p className="tagline">I build beautiful websites with <br/>dark magic(React) and JavaScript.</p>
        <p className="bio">
          I'm a passionate developer who loves turning ideas into reality,<br />
          With experience in web development.<br/>
          If you have any projects/ideas make sure to contact me.
        </p>
      </div>
      <div className="picContainer">
      
        <img id="me" className="image" src="image.jpg" alt="Nariman looking like a coding god" />
      </div>
    </div>
  );
}

export default About;