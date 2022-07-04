
import axios from 'axios';
import React, { Component } from 'react';
import Chart from 'react-apexcharts';



// const PortfolioChart = ({ chartData }) => {

//     console.log(chartData)


//     return (
//         <div>
//             <>
//                 <Chart
//                     options={this.state.options}
//                     series={this.state.series}
//                     type="bar"
//                     height="450"
//                     width="1000"
//                 />
//                 <button onClick={this.onClick}>Change orientation</button>
//             </>
//         </div>
//     )
// }

// export default PortfolioChart




class PortfolioChart extends Component {
    constructor(props) {
        super(props);
        // Chart data array
        // const chartPriceArr = Array.from(props.chartData.current_price)
        // console.log(chartPriceArr)

        // const chartData = {}
        let chartNameArr = props.chartData.map((item, i) => item.name)
        let chartPriceArr = props.chartData.map((item, i) => item.current_price.toFixed(2))
        chartNameArr = chartNameArr.slice(0, 10)
        chartPriceArr = chartPriceArr.slice(0, 10)
        console.log(chartNameArr)
        console.log(chartPriceArr)

        this.state = {
            options: {
                chart: {
                    background: '#1a1a1c',
                    foreColor: 'white'
                },
                xaxis: {
                    catgories: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose']
                },
                plotOptions: {
                    bar: {
                        horizontal: false
                    }
                },
                fill: {
                    colors: ['#f44f36']
                },
                dataLabels: { // labels on bars
                    enabled: false
                },
                title: { //chart title
                    text: 'Current Asset Price',
                    align: 'center',
                    margin: 20,
                    offsetY: 20,
                    style: {
                        fontSize: '25px'
                    }
                }
            },
            series: [{
                name: 'Population',
                data: chartPriceArr
            }]
        }

        

    }


    // click function to change horizontal/vertical
    onClick = () => {
        this.setState({
            options: {
                ...this.state.options,
                plotOptions: {
                    ...this.state.options.plotOptions,
                    bar: {
                        ...this.state.options.plotOptions.bar,
                        horizontal: !this.state.options.plotOptions.bar.horizontal
                    }
                }
            }
        });
    }

    render() {
        return (
            <>
                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="bar"
                    height="450"
                    width="800"
                />
                <button onClick={this.onClick}>Change orientation</button>
            </>
        )
    }
}


export default PortfolioChart