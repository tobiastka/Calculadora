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
          <p className='description-title'>This is my super calculator</p>
          <p className='description-subtitle'>Well maybe it's not that spectacular ԅ (≖‿≖ԅ)</p>
          <p className='description-text'>This project was made with the intention of reviewing the concepts of component states through the use of hooks and a bit of logic.</p>
          <p className='description-text'>The technology used in this project was mostly React, using vanilla CSS styles and MathJS to make the calculation of the operations a bit easier!</p>
        </div>
      </div>
    </div>
  );
}

export default App;
