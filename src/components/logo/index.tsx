import React from 'react';

import logo from '../../assets/images/logo.svg';

type TProps = {
  name: string;
};

const Logo: React.FC<TProps> = ({ name }) => (
  <div className="logo">
    <img src={logo} alt="Logo" />

    <span>{name}</span>
  </div>
);

export default Logo;
