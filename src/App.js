import './App.css';
import './App.scss';
import Header from './components/header/header';
import Hero from './components/hero/hero';
import Skills from './components/skills/skills';
import Education from './components/education/education';
import OpenSource from './components/opensource/opensource';
import Footer from './components/footer/footer';
import Projects from './components/myprojects/myproject';
import Achievements from './components/achievements/achievements';
import ParticlesComponent from './Point';
// import Abhishek from './assets/mypic/Abhishek.png'
function App() {
  return (
    <div className="App">
      
     <Header/>
     <Hero/>
     <Skills/>
     <Projects/>
     <Education/>
     <OpenSource/>
     <Achievements/>
     <Footer/>
     <ParticlesComponent/> 
     <p>Made with love by Abhishek Tiwari</p>
     {/* <Abhishek/> */}
    </div>
  );
}

export default App;
