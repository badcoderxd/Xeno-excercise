import React from 'react';
import ReactApexChart from 'react-apexcharts';

class PieChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        
        series: [44, 55, 41],
        
           
        
        options: {

            colors: ['#8A2BE2', '#b4b9d6', '#646c9a'],
            
            fill: {
                colors: ['#8A2BE2', '#b4b9d6', '#646c9a']
              },
              
              dataLabels: {
                enabled: false
              },
              labels: ['HTML', 'Css', 'Js'],
          chart: {
            type: 'pie',
          }
        },
        
      
      };
    }

  

    render() {
      return (
        

  <div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="donut" height={150} />
</div>


      );
    }
  }

  export default PieChart;