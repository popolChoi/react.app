import axios from 'axios';

export default class Model {
    // https://docs.upbit.com/reference#%EC%8B%9C%EC%84%B8-%EC%A2%85%EB%AA%A9-%EC%A1%B0%ED%9A%8C
    onMarketAll(){
        // isDetails: 유의종목 필드과 같은 상세 정보 노출 여부
        axios({
            method: 'get',
            url: 'https://api.upbit.com/v1/market/all?isDetails=false',
        })
        .then((response)=>response.data)
        .catch(()=>{})
    }

    onCandlesMinutes({unit = 1,market = 'KRW-BTC',count = 1}){
        axios({
            method: 'get',
            url: `https://api.upbit.com/v1/candles/minutes/${unit}?market=${market}&count=${count}`,
        })
        .then((response)=>response.data)
        .catch(()=>{})
    }

}