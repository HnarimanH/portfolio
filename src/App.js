import './css-assets/App.css';
import './css-assets/header.css';
import './css-assets/middle-container.css';
import './css-assets/media-queries.css';
import './css-assets/my-work.css';
import './css-assets/detective.css';
import './css-assets/contactme.css';



import Header from './components/header.js';
import About from "./components/middle-container.js";
import MyWorkSection from "./components/my-work.js";
import ContactMe from './components/contactMe.js';

function App() {
  return(
    <div className="container">

      <div className='meContainer'>
      <Header />
      <About />
      </div>
      <MyWorkSection />
      <ContactMe/>
      
      </div>
  );
}
export default App;