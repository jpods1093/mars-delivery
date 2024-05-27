import React, { useContext, useState } from 'react';
import AddressForm from '../components/AddressForm';
import { AddressContext } from '../context/AddressContext';

const EditAddress = () => {
  const { addresses, updateAddress } = useContext(AddressContext);
  const [searchLot, setSearchLot] = useState('');
  const [searchedAddress, setSearchedAddress] = useState(null);

  const handleSearchAddress = () => {
    // Buscar na lista de endereços pelo número do lote
    const foundAddress = addresses.find((addr) => addr.lot === searchLot);
    if (foundAddress) {
      setSearchedAddress(foundAddress);
    } else {
      setSearchedAddress(null);
      alert('Endereço não encontrado.');
    }
  };

  const handleUpdateAddress = (updatedAddress) => {
    updateAddress(updatedAddress);
    // Navegar de volta ou mostrar uma mensagem de sucesso
    alert('Endereço atualizado com sucesso!');
  };

  return (
    <div className="editadress">
      <h2>Editar Endereço</h2>
      <div >
        <label htmlFor="searchLot">Buscar por Lote:</label>
        <input
          type="text"
          id="searchLot"
          value={searchLot}
          onChange={(e) => setSearchLot(e.target.value)}
        />
        <button onClick={handleSearchAddress}>Buscar</button>
      </div>
      {searchedAddress && (
        <>
          <h3>Detalhes do Endereço:</h3>
          <AddressForm address={searchedAddress} onSubmit={handleUpdateAddress} />
        </>
      )}
    </div>
  );
};

export default EditAddress;
