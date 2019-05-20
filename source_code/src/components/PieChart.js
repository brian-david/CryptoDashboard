import React, { Component } from 'react';
import Chart from 'react-google-charts';

class PieChart extends React.Component{
   constructor(){
      super();
      this.state = {
         rows: [],
         volume: [],
         isLoaded: false,
      }
   }

   getGraphData(){

   }

   getTop5(){
      function sortFunction(a,b){
         if(a[1] === b[1]){
            return 0;
         }else{
            return(a[1] < b[1]? 1:-1);
         }
      }
      
      fetch('https://min-api.cryptocompare.com/data/top/totalvol?limit=5&tsym=USD')
         .then(res => res.json())
         .then(json => {
            var rows = [];
            var high;
            json = json.Data;
            json.map(x => {rows.push([x.CoinInfo.FullName, x.ConversionInfo.TotalVolume24H])});

            rows.sort(sortFunction);

            var topFive = [['name', 'vol']];
            
            for(var i=0; i<5; i++){
               topFive.push(rows[i]);
            }

            this.setState({
               isLoaded: true,
               rows: topFive,
               
            })
            
         })
   }

   componentWillMount(){
      this.getTop5();
      this.getGraphData();
   }

   render() {
      return(
         <Chart
            width={'500px'}
            height={'300px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={this.state.rows}
            options={{
               pieSliceText: 'label',
               animation: {
                  startup: true,
                  easing: 'linear',
                  duration: 1500,
                },
            }}
         />
      );
     
   }
}

export default PieChart;

