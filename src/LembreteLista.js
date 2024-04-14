import React from 'react';

function LembreteLista() {
  const lembretesFicticios = [
    "Lembrete fictício 1",
    "Lembrete fictício 2",
    "Lembrete fictício 3"
  ];

  return (
    <div>
      <h2>Lembretes Fictícios</h2>
      <ul>
        {lembretesFicticios.map((lembrete, index) => (
          <li key={index}>{lembrete}</li>
        ))}
      </ul>
    </div>
  );
}

export default LembreteLista;
