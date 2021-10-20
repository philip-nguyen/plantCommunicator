import React from 'react';
import Chart from 'react-google-charts';

const PlantDataChart = ({ moistureData }) => {
    const data = [['x', 'moisture']];
    
    return (
        <div>
            <Chart
                width={'600px'}
                height={'400px'}
                chartType="LineChart"
                loader={<div>Loading data visualization...</div>}
                data={data}
            />
        </div>
    )
}