import React from 'react';
import millify from 'millify';
import {Col,Row,Typography,Collapse,Avatar} from 'antd';
import HTMLReactParser from 'html-react-parser';

import { useGetCryptosExchangeQuery } from '../services/cryptoExchangeApi';
import Loader from './Loader';

const {Text}=Typography;
const {Panel}=Collapse;


const Exchanges = () => {
  const {data,isFetching}=useGetCryptosExchangeQuery();
  const exchangesList=data;
  {/*console.log(data);*/}
   
  if(isFetching) return  <Loader />;

  return (
    <>
       <Row>
           <Col span={6}>Exchanges</Col>
           <Col span={6}>24th Trade Volume</Col>
           <Col span={6}>24th Avg Trade Volume</Col>
           <Col span={6}>Trust Score</Col>
       </Row>
       <Row>
          {exchangesList.map((exchange)=>(
            <Col span={(24)}>
                <Collapse>
                  <Panel
                      Key={exchange.id}
                      showArrow={false}
                      header={(
                          <Row key={exchange.id}>
                               <Col span={6}>
                                 <Text><strong>{exchange.rank}</strong></Text>
                                 <Avatar className="exchage-image" src={exchange.image}/>
                                 <Text><strong>{exchange.name}</strong></Text>
                               </Col>
                              <Col span={6}>${millify(exchange.trade_volume_24h_btc)}</Col>
                              <Col span={6}>{millify(exchange.trade_volume_24h_btc_normalized)}</Col>
                              <Col span={6}>{millify(exchange.trust_score)}</Col>
                          </Row>
                      )}
                      >
                        {HTMLReactParser(exchange.description || '')}
                        <p>{exchange.name} was established in {exchange.year_established} by {exchange.country}. </p>                      
                        <p>{exchange.name} website is <a href={exchange.url} target="_blank" rel="noreferrer"> here</a></p>
                     
                  </Panel>
                </Collapse>
            </Col>
          ))}
       </Row>
    </>
  )
}

export default Exchanges
