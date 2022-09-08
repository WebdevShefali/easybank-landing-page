
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import logo from './images/logo.svg';
import footerlogo from './images/footerlogo.svg';
import introImage from './images/image-mockups.png'
import Services from './components/Services';
import api from './images/icon-api.svg';
import budgeting from './images/icon-budgeting.svg';
import onboarding from './images/icon-onboarding.svg';
import online from './images/icon-online.svg';
import Articles from './components/Articles';
import confetti from './images/image-confetti.jpg';
import currency from './images/image-currency.jpg';
import plane from './images/image-plane.jpg';
import restaurant from './images/image-restaurant.jpg';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
<Navbar logo={logo}/>
<Home introImage={introImage}/>
<Services api={api} budgeting={budgeting} onboarding={onboarding} online={online}/>
<Articles confetti={confetti} currency={currency} plane={plane} restaurant={restaurant}/>
<Footer footerlogo={footerlogo}/>
    </div>
  );
}

export default App;
