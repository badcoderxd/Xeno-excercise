import React from 'react';
import ReactApexChart from 'react-apexcharts';

class DbChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          name: 'Net Profit',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }, {
          name: 'Revenue',
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }, ],
        options: {
          chart: {
            type: 'bar',
            height: 350
          },
          fill: {
            colors:['#8A2BE2','#8A2BE2','#8A2BE2','#8A2BE2','#8A2BE2','#8A2BE2'],
          },
        
        colors: ['#8A2BE2','#8A2BE2','#8A2BE2','#8A2BE2','#8A2BE2','#8A2BE2'],
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '55%',
              endingShape: 'rounded'
            },
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
          },
          xaxis: {
            categories: ['1 Aug', '2 Aug', '3 Aug', '3 Aug', '3 Aug', '6 Aug', '7 Aug', '8 Aug', '9 Aug'],
          },
          yaxis: {
            title: {
              text: '$ (thousands)'
            }
          },
          fill: {
            opacity: 1
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return "$ " + val + " thousands"
              }
            }
          }
        },
      
      
      };
    }

  

    render() {
      return (
        

  <div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
</div>


      );
    }
  }

  export default DbChart;