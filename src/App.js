import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import Offers from './components/Offers.jsx';
import About from './components/About.jsx';
import Process from './components/Process.jsx';
import Elevate from './components/Elevate.jsx';
import Consult from './components/Consult.jsx';
import Slider from './components/Slider.jsx';
import Newsletter from './components/Newsletter.jsx';

function App() {
  return (
    <div >
      <Navbar />
      <Hero/>
      <Offers/>
      <About/>
      <Process/>
      <Elevate/>
      <Slider/>
      <Consult/>
      <Newsletter/>
    </div>
  );
}

export default App;