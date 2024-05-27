import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <nav>
      <ul className="button-list">
        <li className="header-button"><Link to="/add">Adicionar Endereço</Link></li>
        <li className="header-button"><Link to="/edit">Editar Endereço</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
