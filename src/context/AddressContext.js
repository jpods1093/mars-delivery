import React, { createContext, useState } from 'react';

export const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
  const [addresses, setAddresses] = useState([]);

  const addAddress = (newAddress) => {
    setAddresses([...addresses, newAddress]);
  };

  const updateAddress = (updatedAddress) => {
    const updatedAddresses = addresses.map((addr) =>
      addr.id === updatedAddress.id ? updatedAddress : addr
    );
    setAddresses(updatedAddresses);
  };

  return (
    <AddressContext.Provider value={{ addresses, addAddress, updateAddress }}>
      {children}
    </AddressContext.Provider>
  );
};
