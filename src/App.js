import './stylesheets/App.css';
import logo from './images/logo.png'
import Calculator from './components/Calculator';
function App() {
  return (
    <div className="App">
      <div className="app-header">
        <img className="header-logo" src={logo} alt="Logo de la pagina" />
      </div>
      <div className="app-body">
        <div className="app-calculator">
          <Calculator />
        </div>
        <div className="app-description">
          asd
        </div>
      </div>
    </div>
  );
}

export default App;
