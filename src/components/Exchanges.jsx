import React from 'react';
import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar } from 'antd';
import HTMLReactParser from 'html-react-parser';


import { useGetCryptoExchangeQuery } from '../Services/cryptoExchangeApi';
//import Loader from './Loader';

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const { data:exchangeList, isFetching } = useGetCryptoExchangeQuery();
  // const { data, isFetching } = useGetCryptoExchangeQuery();
  // const exchangeList = data?.data;
  if (isFetching) return '..Loading Exchanges';
  console.log(exchangeList)
  
  return (
    <>
      <Row  style={{backgroundColor: 'rgb(0, 21, 41)', height:38, fontSize: 22, color:'white'}}>
        <Col span={6} >Exchanges</Col>
        <Col span={3} >Symbol</Col>
        <Col span={6} >price</Col>
        <Col span={4} >24h</Col>
        <Col span={5} >7d</Col>
      </Row>      
        {exchangeList.result.map((exchange) => (
         <Row >
          <Col span={24} >
            <Collapse > 
              <Panel 
                key={exchange.rank}
                showArrow={false}
                header={(
                  <>
                    <Col span={6}>
                      <Text><strong>{exchange.rank} . </strong></Text>
                      <Text><strong>{exchange.name}</strong></Text>
                    </Col>
                    <Col span={3}>{exchange.circulatingSupply.substring((exchange.circulatingSupply.indexOf(' ') + 1))}</Col>
                    <Col span={6}>{exchange.price}</Col>
                    <Col span={4}>{exchange['24h']}%</Col>
                    <Col span={5}>{exchange['7d']}%</Col>
                </>
                  )}
              >
                <Row style={{justifyContent: 'center', backgroundColor: 'rgb(0, 21, 41)', color:'white'}}>
                    <Col >
                      <Text style={{color:'white'}}><strong>Total Market Cap    :     </strong></Text>
                      {exchange.marketCap}
                    </Col>                    
                </Row>
                <Row style={{justifyContent: 'center', backgroundColor: 'rgb(0, 21, 41)', color:'white'}}>
                    <Col >
                      <Text style={{color:'white'}}><strong>Total Market Volume    :     </strong></Text>
                      {exchange.marketCap}
                    </Col>                    
                </Row>
                <Row style={{justifyContent: 'center', backgroundColor: 'rgb(0, 21, 41)', color:'white'}}>
                    <Col >
                      <Text style={{color:'white'}}><strong>Total Circulating Supply    :     </strong></Text>
                      {exchange.circulatingSupply}
                    </Col>                    
                </Row>
              </Panel>
            </Collapse>
          </Col>
        </Row>
        ))}
    </>
  );
};

export default Exchanges;