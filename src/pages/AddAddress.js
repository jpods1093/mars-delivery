import React, { useContext } from 'react';
import AddressForm from '../components/AddressForm';
import { AddressContext } from '../context/AddressContext';

const AddAddress = () => {
  const { addAddress } = useContext(AddressContext);

  const handleAddAddress = (newAddress) => {
    
    newAddress.id = Math.random().toString(36).substr(2, 9);
    addAddress(newAddress);
    
    alert('Endereço adicionado com sucesso!');
  };

  return (
    <div className="addadress">
      <h2>Adicionar Endereço</h2>
      <AddressForm onSubmit={handleAddAddress} />
    </div>
  );
};

export default AddAddress;
