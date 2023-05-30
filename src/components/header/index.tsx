import React from 'react';

import HeaderLeft from './components/header-left';
import HeaderRight from './components/header-right';

import useHeader from './use-header';

import './styles.scss';

const Header: React.FC = () => {
  const { props, table, options, logoName, onChange } = useHeader();

  return (
    <div className="header">
      <div className="header-inner">
        <HeaderLeft logoName={logoName} props={props} target={table.target} options={options} onChange={onChange} />

        <HeaderRight table={table} />
      </div>
    </div>
  );
};

export default Header;
