import React, { useState } from 'react';

const AddressForm = ({ address, onSubmit }) => {
  const [lot, setLot] = useState(address?.lot || '');
  const [name, setName] = useState(address?.name || '');
  const [planet, setPlanet] = useState(address?.planet || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (lot && name && planet) {
      onSubmit({ lot, name, planet });
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="lot">Lote (4 dígitos):</label>
        <input
          type="text"
          id="lot"
          value={lot}
          onChange={(e) => setLot(e.target.value)}
          maxLength="4"
        />
      </div>
      <div className="input-container">
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label htmlFor="planet">Planeta de Referência:</label>
        <input
          type="text"
          id="planet"
          value={planet}
          onChange={(e) => setPlanet(e.target.value)}
        />
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
};

export default AddressForm;
