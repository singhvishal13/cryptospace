import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Navbar, Exchanges, Homepage, News, Cryptocurrencies, CryptoDetails } from './components';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <div className="navbar" id="navbar">
          <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes" id="container">
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route exact path="/exchanges">
                <Exchanges />
              </Route>
              <Route exact path="/cryptocurrencies">
                <Cryptocurrencies />
              </Route>
              <Route exact path="/crypto/:coinId">
                <CryptoDetails />
              </Route>
              <Route exact path="/news">
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>
        <div className="footer" id="footer">
          <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
              CryptoSpace By Vishal Singh
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App