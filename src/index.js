import React from 'react';
import ReactDOM from 'react-dom';
import LembreteEntrada from './LembreteEntrada';
import LembreteLista from './LembreteLista';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [lembretes, setLembretes] = React.useState([]);

  function addLembrete(novoLembrete) {
    setLembretes(prevLembretes => [...prevLembretes, novoLembrete]);
  }

  function handleLembreteClick(lembrete) {
    alert('Lembrete clicado: ' + lembrete);
    console.log('Lembrete clicado:', lembrete);
  }

  return (
    <div className="container-fluid">
      <br />
      <div className="row">
        <div className="col-12">
          <h4 className="display-7 text-center">Gerenciador de Lembretes</h4>
        </div>
      </div>
      <div className='card border-warning mb-3' style={{backgroundColor: '#fff9c4'}}>
        <div className='card-body'>
          <LembreteLista lembretes={lembretes} onLembreteClick={handleLembreteClick} />
        </div>
      </div>
      <LembreteEntrada onAddLembrete={addLembrete} />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
