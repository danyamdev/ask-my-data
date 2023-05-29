import React from 'react';

import { Chat, Header, Table } from './components';

import useApp from './use-app';

import 'antd/dist/reset.css';
import './assets/styles/index.scss';

const App: React.FC = () => {
  useApp();

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
