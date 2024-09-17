import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { Primercomponente } from './Primercomponente';
import { Segundocomponente } from './Segundocomponente';
import { Tercercomponente} from './Tercercomponente';
//import { Primercomponente } from './Primercomponente';

class App extends Component {
  render(){

const ficha_medica ={
  altura: "137cm",
  gruposangre: "B+",
  estadoSalud: "bueno",
  alregias:"ninguno"
};

    return (
      <div className="App">
        <div className="App-header">
        <Primercomponente/>
        <hr/>
       
        </div>
        <Segundocomponente/>
        <hr/>
        <Tercercomponente nombre="Juanita" apellido="Juarez" ficha={ficha_medica}/>
        </div>
      
    );
  }
}
  


export default App;
