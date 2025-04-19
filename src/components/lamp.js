

import { useEffect, useMemo } from 'react';

const Lamp = ({ onClick, isLampOn }) => {
    // Wrap clickSound initialization in useMemo to prevent unnecessary re-creations
  const clickSound = useMemo(() => new Audio('/sounds/click.wav'), []);

  // Preload the sound (optional)
  useEffect(() => {
    clickSound.load();
  }, [clickSound]);

  const handleLampClick = () => {
    clickSound.play();  // Play the sound on click
    onClick();  // Execute the passed onClick function (toggle lamp)
  };
    

    return (
        <div className={`lampContainer ${isLampOn ? 'on' : ''}`} onClick={handleLampClick}>
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
               viewBox="0 0 512 512">
<path id="bodyLight" fill="#FFE76D" d="M108.129,357.729c0,27.24,54.804,51.692,147.87,51.692s147.87-24.453,147.87-51.692H108.129z"/>
<path id="body4" fill="#CFC8AB" d="M462.595,347.497h-14.078c-3.479-81.16-57.145-149.314-130.754-174.201l-61.765-11.191
	l-61.765,11.191C120.624,198.183,66.959,266.337,63.48,347.497H49.404c-4.637,0-8.393,3.757-8.393,8.393s3.757,8.393,8.393,8.393
	h413.191c4.637,0,8.393-3.757,8.393-8.393S467.231,347.497,462.595,347.497z"/>
<rect id="body3" x="194.235" y="91.265" fill="#F0E6D1" width="123.529" height="82.032"/>
<rect id="body2" x="194.235" y="57.691" fill="#CFC8AB" width="123.529" height="33.574"/>
<g>
	<path id="body1" fill="#B4A990" d="M317.764,82.875H194.235c-4.637,0-8.393,3.757-8.393,8.393s3.757,8.393,8.393,8.393h123.529
		c4.637,0,8.393-3.757,8.393-8.393S322.401,82.875,317.764,82.875z"/>
	<path id="body1" fill="#B4A990" d="M194.235,66.08h123.529c4.637,0,8.393-3.757,8.393-8.393s-3.757-8.393-8.393-8.393h-9.49V28.84
		c0-15.858-11.762-28.84-26.143-28.84h-52.263c-14.381,0-26.143,12.982-26.143,28.84v20.453h-9.49c-4.637,0-8.393,3.757-8.393,8.393
		S189.598,66.08,194.235,66.08z"/>
</g>
<g>
	<path id="littleLight" fill="none" d="M255.999,512c-4.637,0-8.393-3.757-8.393-8.393v-58.869c0-4.637,3.757-8.393,8.393-8.393
		c4.637,0,8.393,3.757,8.393,8.393v58.869C264.393,508.243,260.636,512,255.999,512z"/>
	<path id="littleLight" fill="none" d="M156.659,502.542c-1.09,0-2.197-0.213-3.262-0.664c-4.271-1.804-6.27-6.728-4.466-10.998
		l23.399-55.397c1.805-4.272,6.733-6.268,10.998-4.466c4.271,1.804,6.27,6.728,4.466,10.998l-23.399,55.397
		C163.042,500.616,159.931,502.542,156.659,502.542z"/>
	<path id="littleLight" fill="none" d="M355.34,502.545c-3.272,0-6.381-1.926-7.735-5.13l-23.399-55.398
		c-1.803-4.269,0.196-9.194,4.466-10.998c4.265-1.803,9.193,0.196,10.998,4.466l23.399,55.398c1.803,4.269-0.196,9.194-4.466,10.998
		C357.537,502.331,356.429,502.545,355.34,502.545z"/>
</g>
</svg>

        </div>
    
);}


export default Lamp;