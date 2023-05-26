import React from 'react';

import { Chat, Header, Table } from './components';

import 'antd/dist/reset.css';
import './assets/styles/index.scss';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />

      <div className="app-main">
        <Table />

        <Chat />
      </div>
    </div>
  );
};

export default App;
