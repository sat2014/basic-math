import React from 'react';
import {
    XYPlot,
    XAxis, // Shows the values on x axis
    YAxis, // Shows the values on y axis
    VerticalBarSeries,
    LabelSeries
} from 'react-vis';

class BarChart extends React.Component {
    render() {
        const data = this.props.data;
        let chartDomainMax = 500
            // Math.max(
            // data[0].y,
            // data[1].y,
            // data[2].y,
            // data[3].y
            // )
        const chartWidth = 400;
        const chartHeight = 500;
        const chartDomain = [0, chartDomainMax > 0 ? chartDomainMax+10 : 10];
        return (
            <XYPlot 
                xType="ordinal" 
                width={chartWidth} 
                height={parseInt(chartHeight)} 
                yDomain={chartDomain}
            >
                <XAxis />
                <YAxis />
                <VerticalBarSeries                    
                    color="#12939A"
                    data={data}
                />
                <LabelSeries
                    data={data.map(obj => {
                        return { ...obj, label: obj.y.toString() }
                    })}
                    labelAnchorX="middle"
                    labelAnchorY="text-after-edge"
                />
            </XYPlot>
        );
    }
}
export default BarChart;