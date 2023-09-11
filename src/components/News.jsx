import React,{useState} from 'react';
import {Select,Typography,Row,Col,Avatar,Card} from 'antd';
import moment from 'moment';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Loader from './Loader';

const {Text,Title}=Typography;
const {Option}=Select;
 
const  demoImage="https://i0.wp.com/cdn5.f-cdn.com/contestentries/1930441/48125469/608dec7e0efdb_thumb900.jpg";


const News = ({simplified}) => {
  const [newsCategory,setNewsCategory]=useState('Cryptocurrency')
  
  const {data:cryptoNews}=useGetCryptoNewsQuery({newsCategory})
  const {data}=useGetCryptosQuery(100);

  if(!cryptoNews?.articles) return  <Loader />;
  
  const articles=simplified?cryptoNews.articles.slice(0,10):cryptoNews.articles;
  
  
  return (
    <Row gutter={[24,24]}>
          {!simplified && (
            <Col span={24}>
               <Select
                  showSearch
                  className="select-news"
                  placeholder="select a Crypto"
                  optionFilterProp="children"
                  onChange={(value)=>{setNewsCategory(value)}}
                  filterOption={(input,option)=>option.children.toLowerCase().indexOf(input.toLowerCase())>=0}
               >
                      <Option value="Cryptocurrency">Cryptocurrency</Option>
                      {data?.data?.coins.map((coin) => <Option value={coin.name}>{coin.name}</Option>)}
               </Select>
            </Col>
          )}
          {articles.map((news)=>(
            <Col xs={24} sm={12} lg={8} key={news.url}>
              <Card hoverable className="news-card"  cover={<img alt={news.title} src={news.urlToImage || demoImage} style={{ height: '200px', width:'100%' ,objectFit: 'cover' }} />}>
                <a href={news.url} target="_blank" rel="noreferrer">
                  <div className="news-image-container">
                     <Title className="news-title" level={4}>{news.title}</Title>
                   </div>
                  <p>
                    {news.description.length>100 ? `${news.description.substr(0,100)}...`
                    :news.description
                    }
                  </p>
                  <div className="provider-container">
                       <div >
                          <Avatar src={news.urlToImage || demoImage} alt="news"/>
                          <Text className="provider-name">{news.source.name}</Text>
                       </div>  
                         <Text>{moment(news.publishedAt).startOf('ss').fromNow()}</Text>
                       
                  </div>
                </a>
              </Card>
            </Col>
          ))}
      
    </Row>
  )
}

export default News
 