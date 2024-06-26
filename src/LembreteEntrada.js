import React, { Component } from 'react';

class LembreteEntrada extends Component {
    state = {
      lembrete: ''
    };
  

  btnSubmit = (event) => {
    event.preventDefault();
    const { lembrete } = this.state;
    if (!lembrete.trim()) return; // Impede a adição de lembretes vazios
    this.props.onAddLembrete(lembrete);
    this.setState({ lembrete: '' });
  };

  btnChange = (event) => {
    this.setState({ lembrete: event.target.value });
  };

  render() {
    const { lembrete } = this.state;
    return (
      <form onSubmit={this.btnSubmit}>
        <div className="input-group">
          <input
            type="text"
            value={lembrete}
            onChange={this.btnChange}
            placeholder="Digite um novo lembrete"
            className="form-control text-center mt-2 "
          />
          <div className="input-group">
            <button
              type="submit"
              className="btn btn-primary form-control mt-2 "
              disabled={!lembrete.trim()} // Desabilita o botão se o campo estiver vazio
            >
              Adicionar Lembrete
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default LembreteEntrada;