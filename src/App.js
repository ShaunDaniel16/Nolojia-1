
import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import About from './containers/About';
import Contact from './containers/Contact';
import Hero from './containers/Hero';
import Services from './containers/Services';
import Services2 from './containers/Services2';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Hero/>
      <About/>
      <Services2/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
