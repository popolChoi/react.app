import React, { Component, Fragment } from 'react';
import axios from 'axios';
import ReactECharts from 'echarts-for-react';
import moment from 'moment';
import 'moment/locale/ko';

import {forEachRight} from 'lodash';

// https://echarts.apache.org/examples/en/editor.html?c=candlestick-sh-2015


export default class Container extends Component {
  state ={ marketAll: [], list: [], option: {} }

  componentDidMount() {
    // const fetch = require('node-fetch');

    axios({
      method: 'get',
      url: 'https://api.upbit.com/v1/market/all?isDetails=false',
    })
      .then((response) => {
        this.setState({ marketAll: response.data });
        console.log(response.data[0]);

        axios({
          method: 'get',
          url: `https://api.upbit.com/v1/candles/minutes/1?market=${response.data[0].market}&count=200`,
        }).then((response2) => {
          const categoryData = [];
          const values = [];
          forEachRight(response2.data, (e) => {
            categoryData.push({
              value: moment(e.candle_date_time_kst).format('hh:mm'),
              textStyle: {
                fontSize: 5,
              },
            });
            // 数据意义：开盘(open)，收盘(close)，最低(lowest)，最高(highest)
            values.push([
                e.opening_price, // 시가
                e.trade_price, // 종가
                e.low_price, // 저가
                e.high_price, // 고가
              ]);
          })
          this.setState({
            option: {
              categoryData,
              values,
              title: response.data[0].english_name,
            },
          });
        });
      });

  }

  render() {
    const { option } = this.state;
    return (
      <>
        <div>
          <ReactECharts
            style={{ width: '100%', height: '90vh', fontSize: 1 }}
            option={{
              title: {
                text: option.title,
              },
              animation: false,
              tooltip: {
                trigger: 'axis',
                axisPointer: { type: 'cross' },
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                // extraCssText: 'width: 170px',

                // position(pos, params, el, elRect, size) {
                //   const obj = { top: 10 };
                //   obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 30;
                //   return obj;
                // },
              },

              grid: {
                left: '12%',
                right: '3%',
              //   bottom: '15%'
              },
              series: {
                // name: '텍스트',
                barWidth: '60%',
                type: 'k',
                data: option.values ?? [] ,
                tooltip: {
                  formatter(param) {
                    console.log(param);
                    return [
                      '1',

                    ].join('');
                  },
                },
              },
              xAxis: {
                data: option.categoryData ?? [] ,

              },
              yAxis: {
                scale: true,
                splitArea: { show: true },
              },
              dataZoom: {
                show: true,
                type: 'slider',
              },

            }}
          />

        </div>

        {/* {JSON.stringify(this.state.marketAll[0], null, '\t') }
        {JSON.stringify(this.state.list[0], null, '\t') } */}

      </>
    );
  }
}
