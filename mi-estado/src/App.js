import logo from './logo.svg';
import './App.css';
import { Mi_Estado } from './componentes/Mi_Estado';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
     <h2>Estados e React</h2>
       
      </header>
      <h2>Hook useState</h2>
      <Mi_Estado/>
    </div>
  );
}

export default App;
