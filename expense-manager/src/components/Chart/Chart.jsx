import React from "react";
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props)=>{
    const datapointVal = props.dataPoint.map(dataPoint=>dataPoint.value);
    const maxValue = Math.max(...datapointVal);

    return (
        <div className="chart">
            {props.dataPoint.map(dataPoint=>
             <ChartBar 
                key ={dataPoint.label}
                label = {dataPoint.label}
                value = {dataPoint.value}
                maxVal = {maxValue}
            />)}
        </div>
    )
};
export default Chart;