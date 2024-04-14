import React from 'react';

function LembreteLista() {
  const lembretesFicticios = [
    "Preparar aula de programação",
    "Fazer feira",
    "Preparar marmitas"
  ];

  return (
    <div>
      <ul>
        {lembretesFicticios.map((lembrete, index) => (
          <li key={index}>{lembrete}</li>
        ))}
      </ul>
    </div>
  );
}

export default LembreteLista;
