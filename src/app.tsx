import React from 'react';
import { Spin } from 'antd';

import { Chat, Header, Table } from './components';

import useApp from './use-app';

import 'antd/dist/reset.css';
import './assets/styles/index.scss';

const App: React.FC = () => {
  const { loadingChat, loadingTable } = useApp();

  if (loadingTable || loadingChat) {
    return (
      <div className="app spin">
        <Spin size="large" />
      </div>
    );
  }

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
