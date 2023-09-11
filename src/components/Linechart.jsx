import React from 'react'
import {Line} from 'react-chartjs-2';
import {Col,Row,Typography} from 'antd';
import Chart from 'chart.js/auto';

const {Title} =Typography;

const Linechart = ({coinHistory,currentPrice,coinname}) => {
  
    const coinPrice=[];
    const coinTimestamp=[];

    for(let i=0;i<coinHistory?.data?.history?.length;i+=1){
        coinPrice.push(coinHistory.data.history[i].price);
        coinTimestamp.push(new Date(coinHistory.data.history[i].timestamp*1000).toLocaleDateString());
    }
   {/*console.log(coinPrice);
  console.log(coinTimestamp);*/}
  const data={
    labels: coinTimestamp,
    datasets:[
        {
            label:'price in USD',
            data:coinPrice,
            fill:false,
            backgroundColor:'#0071bd',
            borderColor: '#0071bd',
        }
    ]
  }
  const options={
    scales:{
        yAxes:[
            {
                ticks:{
                    beginAtZero: true
                }
            }
        ]
    }
  }   

  return (
    <>
     <Row className="chart-header">
              <Title level={2} className="chart-title">{coinname} Price Chart</Title>
              <Col className="price-container">
                <Title level={5} className="price-change">{coinHistory?.data?.change}%</Title>
                <Title level={5} className="current-price">Current {coinname} price : ${currentPrice}</Title>
              </Col>
     </Row>
    <Line data={data} options={options}> </Line>

     
    </>
  )
}

export default Linechart
