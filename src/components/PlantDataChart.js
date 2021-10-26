import React, { useState, useEffect }from 'react';
import Chart from 'react-google-charts';
import { readMoistureReadings } from '../firebase';

const PlantDataChart = () => {
    const [data, setData] = useState([['x', 'moisture']]);
    

    useEffect(() => {
        readMoistureReadings(onDataRead);
    }, [])

    const onRefreshButtonPress = () => {
        readMoistureReadings(onDataRead);
    }

    const onDataRead = (items) => {
        //console.log(items);
        let i = 0;
        var readings = [['x', 'moisture']];
        for(var key in items) {
            //console.log(key);
            console.log(items[key]);
            readings.push([i, items[key]]);
            i = i + 1;
            //setData(data.push([i, items]));
        }
        console.log(readings);
        
        setData(readings);
    }

    return (
        <div>
            <button className="ui button" onClick={onRefreshButtonPress}>Refresh</button>
            <Chart
                width={'800px'}
                height={'600px'}
                chartType="LineChart"
                loader={<div>Loading data visualization...</div>}
                data={data}
                options={{
                    hAxis: {
                        title: 'Reading #',
                    },
                    vAxis: {
                        title: 'Moisture (V)',
                    }
                }}
            />
        </div>
    )
}

export default PlantDataChart;