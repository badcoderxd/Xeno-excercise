import React from 'react';
import ReactApexChart from 'react-apexcharts';

class AreaCharts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        
          series: [{
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
          }],
          options: {
            chart: {
              height: 150,
              type: 'area'
            },
            chart: {
      toolbar: {
        show: false,
        offsetX: 0,
        offsetY: 0,
        tools: {
          download: true,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: true | '<img src="/static/icons/reset.png" width="20">',
          customIcons: []
        },
      },
    },
    xaxis: {
        labels: {
          show:false,
        },
    },

    grid:{
        show:false,
        xaxis: {
          lines: {
              show: false
          }
      },  
      yaxis: {
          lines: {
              show: false
          }
      }  
      },

      fill: {
        colors:['#8A2BE2','#8A2BE2','#8A2BE2','#8A2BE2','#8A2BE2','#8A2BE2'],
      },
    
    colors: ['#8A2BE2','#8A2BE2','#8A2BE2','#8A2BE2','#8A2BE2','#8A2BE2'],

      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false,
        },
    },
    yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val + "%";
          }
        }
      
      },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'smooth'
            },
            
            
          },
        
        
        };
      }

    

      render() {
        return (
          

    <div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="area" height={150} />
</div>
  

        );
      }
    }
  export default AreaCharts;