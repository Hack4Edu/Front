import React from 'react';

const Header = () => {

  return(
    <div>
      <header className="d-flex justify-content-center py-3">
      <ul className="nav nav-pills">
        <li className="nav-item"><a className="nav-link active" aria-current="page">Home</a></li>
        <li className="nav-item"><a className="nav-link">Features</a></li>
        <li className="nav-item"><a className="nav-link">Pricing</a></li>
        <li className="nav-item"><a className="nav-link">FAQs</a></li>
        <li className="nav-item"><a className="nav-link">About</a></li>
      </ul>
    </header>
    </div>
  ) 
}

export default Header;