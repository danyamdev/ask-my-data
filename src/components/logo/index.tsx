import React from 'react';

import logo from '../../assets/images/logo.svg';

const Logo: React.FC = () => {
  return (
    <div className="logo">
      <img src={logo} alt="Logo" />

      <span>Loans.xlsx</span>
    </div>
  );
};

export default Logo;
