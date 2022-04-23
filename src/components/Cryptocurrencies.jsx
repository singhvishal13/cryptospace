import React, { useState, useEffect } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';

import { useGetCryptosQuery } from '../Services/cryptoApi';

const Cryptocurrencies = ({simplified}) => {
  // const [count, setCount] = useState(10);
  const { data: cryptosList, isFetching } = useGetCryptosQuery();
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  const count = simplified ? 10  : cryptos.length;


  if(isFetching) return 'Loading...Crypto';
  
  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input placeholder="Search Cryptocurrency" onChange={(e) => setSearchTerm(e.target.value)}/>
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency,idx) =>(
          idx < count && <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
            <Link to={`/crypto/${currency.id}`}>
              {console.log(idx, currency)}
              <Card title={`${currency.rank}. ${currency.name}`}
                extra={<img className="crypto-image" src={currency.iconUrl} />}
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {millify(currency.marketCap)}%</p>
              </Card>
            </Link>
          </Col>)
)}
      </Row>
    </>
  )
}

export default Cryptocurrencies