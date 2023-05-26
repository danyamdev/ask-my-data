import React from 'react';

import { Header } from './components';

import 'antd/dist/reset.css';
import './assets/styles/index.scss';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

export default App;
