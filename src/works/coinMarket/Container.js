import React, { Component, Fragment } from 'react';
import axios from 'axios'
import ReactECharts from 'echarts-for-react';
//https://echarts.apache.org/examples/en/editor.html?c=candlestick-sh-2015
// 数据意义：开盘(open)，收盘(close)，最低(lowest)，最高(highest)
var data0 = splitData([
  ['', 2320.26,2320.26,2287.3,2362.94],
  ['', 2300,2291.3,2288.26,2308.38],
]);


function splitData(rawData) {
  var categoryData = [];
  var values = []
  for (var i = 0; i < rawData.length; i++) {
      categoryData.push(rawData[i].splice(0, 1)[0]);
      values.push(rawData[i])
  }
  return {
      categoryData: categoryData,
      values: values
  };
}





const option = {
  title: {
      text: '',
      left: 0
  },
  tooltip: {
      trigger: 'axis',
      axisPointer: {
          type: 'cross'
      }
  },
  legend: {
      data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30']
  },
  grid: {
      left: '10%',
      right: '10%',
      bottom: '15%'
  },
  xAxis: {
      type: 'category',
      data: data0.categoryData,
      scale: true,
      boundaryGap: false,
      axisLine: {onZero: false},
      splitLine: {show: false},
      splitNumber: 20,
      min: 'dataMin',
      max: 'dataMax'
  },
  yAxis: {
      scale: true,
      splitArea: {
          show: true
      }
  },
  dataZoom: [
      {
          type: 'inside',
          start: 50,
          end: 100
      },
      {
          show: true,
          type: 'slider',
          top: '90%',
          start: 50,
          end: 100
      }
  ],
  series: [
      {
          type: 'candlestick',
          data: data0.values,
      },
    
  ]
};

export default class Container extends Component {
  state ={marketAll : [], list:[], option: data0}


 
  componentDidMount() {
    // const fetch = require('node-fetch');

    axios({
      method:'get',
      url:'https://api.upbit.com/v1/market/all?isDetails=false',
    })
    .then((response) => {

      this.setState({marketAll: response.data})
      console.log(response.data[0].market);

      axios({
        method:'get',
        url:'https://api.upbit.com/v1/candles/minutes/1?market=KRW-BTC&count=1',
      }).then((response) => {
        console.log(response.data[0]);

        //https://docs.upbit.com/reference#%EB%B6%84minute-%EC%BA%94%EB%93%A4-1

        const data = [
          response.data.map(e=>[e.candle_date_time_kst,e.opening_price, e.low_price, e.trade_price, e.high_price ])
        ]

        console.log(splitData(data));

        

        const option = {}
        // this.setState({option: option})

      })
    });
    // const url = 'https://api.upbit.com/v1/market/all';

    // const options = { method: 'GET', qs: { isDetails: 'false' } };

    // fetch(url, options)
    //   .then((res) => res.json())
    //   .then((json) => console.log(json))
    //   .catch((err) => console.error(`error:${err}`));
  }

  render() {
    return (
      <>
      <div>
      <ReactECharts option={{
  title: {
      text: '',
      left: 0
  },
  tooltip: {
      trigger: 'axis',
      axisPointer: {
          type: 'cross'
      }
  },
  legend: {
      data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30']
  },
  grid: {
      left: '10%',
      right: '10%',
      bottom: '15%'
  },
  xAxis: {
      type: 'category',
      data: this.state.option.categoryData,
      scale: true,
      boundaryGap: false,
      axisLine: {onZero: false},
      splitLine: {show: false},
      splitNumber: 20,
      min: 'dataMin',
      max: 'dataMax'
  },
  yAxis: {
      scale: true,
      splitArea: {
          show: true
      }
  },
  dataZoom: [
      {
          type: 'inside',
          start: 50,
          end: 100
      },
      {
          show: true,
          type: 'slider',
          top: '90%',
          start: 50,
          end: 100
      }
  ],
  series: [
      {
          type: 'candlestick',
          data: this.state.option.values,
      },
    
  ]
}} />

      </div>


        {/* {JSON.stringify(this.state.marketAll[0], null, '\t') }
        {JSON.stringify(this.state.list[0], null, '\t') } */}

      </>
    );
  }
}
