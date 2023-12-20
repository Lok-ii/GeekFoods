import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import GetInTouch from './Components/GetInTouch';
import Members from './Components/Members';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="app">
      <Header/>
      <Hero />
      <GetInTouch />
      <Members />
      <Footer />
    </div>
  );
}

export default App;
