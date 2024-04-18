import React, { Component } from 'react';
import LembreteEntrada from './LembreteEntrada';
import LembreteLista from './LembreteLista';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  state = {
    lembretes: []
  }

  addLembrete = (novoLembrete) => {
    this.setState(prevState => ({
      lembretes: [...prevState.lembretes, novoLembrete]
    }));
  }

  LembreteClick = (lembrete) => {
    alert('Lembrete clicado: ' + lembrete);
    console.log('Lembrete clicado:', lembrete);
  }

  render() {
    const { lembretes } = this.state;
    return (
      <div className="container-fluid mt-4">        
        <div className="row">
          <div className="col-12">
            <h4 className="display-7 text-center">Gerenciador de Lembretes</h4>
          </div>
        </div>

        <div className='card border-warning mb-2' style={{ backgroundColor: '#fff9c4' }}>

          <div className='card-body'>
            <div className="row align-items-center">
              <LembreteLista lembretes={lembretes} onLembreteClick={this.LembreteClick} />
            </div>
          </div>
        </div>
        <LembreteEntrada onAddLembrete={this.addLembrete} />
      </div>

    );
  }
}

export default App;
