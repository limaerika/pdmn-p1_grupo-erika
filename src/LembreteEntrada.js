import React, { useState } from "react";

function LembreteEntrada(props) {
    const [lembrete, setLembrete] = useState('');

    function handleAdicionar() {
        props.onAddLembrete(lembrete);
        setLembrete('');
    }

return (
    <div>
        <input
        type="text"
        value={lembrete}
        onChange={ (e) => setLembrete(e.target.value)}
        placeholder="Digite seu novo lembrete"
        className="form-control"
        />
        <button onClick={handleAdicionar} className="btn btn-primary mt-3">Cadastrar</button>
    </div>
);
}

export default LembreteEntrada;