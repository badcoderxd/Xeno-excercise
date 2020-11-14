import React from 'react';
import ReactApexChart from 'react-apexcharts';
import '../App.css';

class barchartSmall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [{
        name: 'Inflation',
        data: [2.3, 3.1, 4.0, 10.1, 4.0,5.0]
      }],
      options: {
        chart: {
          height: 350,
          type: 'bar',
          
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
  
        plotOptions: {
          bar: {
            background: 'transparent',
            dataLabels: {
              position: 'top', // top, center, bottom
            },
          }
        },
        
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            
          },
          offsetY: -20,
          style: {
            fontSize: '12px',
            colors: ["#304758"]
          }
        },
        
        xaxis: {
          labels: {
            show:false,
          },
         
          axisTicks: {
            show: false
          },
          crosshairs: {
            
          tooltip: {
            enabled: true,
          }
        },
        fill: {
          colors:['#8A2BE2','#8A2BE2','#8A2BE2','#8A2BE2','#8A2BE2','#8A2BE2'],
        }
      },
      colors: ['#8A2BE2','#8A2BE2','#8A2BE2','#8A2BE2','#8A2BE2','#8A2BE2'],
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
        

        title: {
          text: 'Monthly Inflation in Argentina, 2002',
          floating: true,
          offsetY: 330,
          align: 'center',
          style: {
            color: '#444'
          }
        }
      },
      plotOptions: {
      bar: {
        horizontal: false,
        startingShape: 'rounded',
        endingShape: 'rounded',
        columnWidth: '10%',
      }
    },
    

    };
  }



  render() {
    return (
      

<div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={150} />

</div>

);
}
}

export default barchartSmall;
