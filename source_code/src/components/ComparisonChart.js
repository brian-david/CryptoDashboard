import React, { Component } from 'react';
import Chart from 'react-google-charts';

class CompChart extends React.Component{
   constructor(){
      super();
      this.state = {
         coinsIDs: [],
         timeData: [],
      }
   }

   //get the IDs of the top 5 trading coins
   getTop5(){
      //sort function to organise the assoc array
      function sortFunction(a,b){
         if(a[1] === b[1]){
            return 0;
         }else{
            return(a[1] < b[1]? 1:-1);
         }
      }
      
      //get top 10 trading coins by vol
      var dataSet = [];
      function getVals(){
         return fetch('https://min-api.cryptocompare.com/data/top/totalvol?limit=5&tsym=USD')
         .then(res => res.json())
         .then(result => result.Data)
         .then((result) => {
            var cid = [];
            var cid5 = [];
            result.map(temp => {cid.push([temp.CoinInfo.Name, temp.ConversionInfo.TotalVolume24H])});
            cid.sort(sortFunction);
            for(var i=0; i<5; i++){
               cid5.push(cid[i][0]);
            }
            return cid5;
         })
         .then((result)=>{
            return fetch('https://min-api.cryptocompare.com/data/exchange/histoday?e=Coinbase&tsym='+result[0]+'&limit=100&aggregate=10')
               .then(res => res.json())
               .then(res => res.Data)
               .then((res)=>{
                  var dataSet = [];
                  dataSet.push(['time', 'volume']);
                  res.map(temp => {dataSet.push([new Date(temp.time*1000).toLocaleString(), temp.volume])});
                  return dataSet;
               })
         })
         .then((res) => {
            
            return res;
         })
         .catch(console.error());
      }
      return getVals();
   }

   componentWillMount(){
      this.getTop5().then(result => {
         this.setState({
            timeData: result
         })
         console.log(result)
      });
   }
   
   render(){
      return(
         <Chart
            width={'100%'}
            height={'500'}
            chartType="Line"
            loader={<div>Loading Chart</div>}
            data={this.state.timeData}
            options={{
               chart: {
               },
               width: 900,
               height: 500,
               series: {
                  // Gives each series an axis name that matches the Y-axis below.
                  0: { axis: 'Trading Volume' }
               },
               axes: {
                  // Adds labels to each axis; they don't have to match the axis names.
                  y: {
                  Temps: { label: 'Temps (Celsius)' },
                  Daylight: { label: 'Daylight' },
                  },
               },
            }}
            rootProps={{ 'data-testid': '4' }}
            />
      )
   }
}

export default CompChart;