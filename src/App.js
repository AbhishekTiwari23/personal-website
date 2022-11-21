import './App.css';
import './App.scss';
import Home from './pages/home.js'
import LnadingPage from './pages/landingPage';
// import Abhishek from './assets/mypic/Abhishek.png'

function App() {
  return (
    <div className={"App ${theme} "}>
      <Home/>
      {/* <LnadingPage/> */}
    </div>
  );
}

export default App;
