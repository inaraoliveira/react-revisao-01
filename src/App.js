
import './App.css';
import Card from './components/card/Card.jsx';
import Header from './components/header/Header.jsx';
import Titulo from './components/titulo/Titulo.jsx';
import Footer from './components/footer/Footer.jsx';


function App() {
  return (
    <div className="App">
      <Header/>
      <Titulo/>
      <Card/>
      <Footer/>
    </div>
  );
}

export default App;
