import React from 'react';

function LembreteLista({ lembretes, onLembreteClick }) {
  //col-lg-3 col-md-4 col-sm-6 mb-4
  return (
    <div>
      <div className="row align-items-center">
        {lembretes.map((lembrete, index) => (
          <div key={index} className="col-xxl-3 col-lg-4 col-sm-12 p-2">
            <div className="card">
              <div className="card-body" onClick={() => onLembreteClick(lembrete)}>
                <p className="card-text text-center">{lembrete}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LembreteLista;

