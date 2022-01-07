import React, {useState, useEffect} from 'react';
import Chart from "react-apexcharts";

const Gamepage = () => {
  var TICKINTERVAL = 86400000
  let XAXISRANGE = 766600000

  let options = {
    chart: {
    id: 'realtime',
    height: 350,
    type: 'line',
    animations: {
      enabled: true,
      easing: 'linear',
      dynamicAnimation: {
        speed: 1000
      }
    },
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  title: {
    text: 'Dynamic Updating Chart',
    align: 'left'
  },
  markers: {
    size: 0
  },
  xaxis: {
    type: 'datetime',
    range: XAXISRANGE
  },
  yaxis: {
    max: 100
  },
  legend: {
    show: false
  },
  }
  let lastDate = new Date('11 Feb 2021 GMT').getTime()

  const [series, setSeries] = useState([{data:[]}])
  let fullData = []

  useEffect(() => {
    const getNewSeries = () => {
      console.log("series", series)
      fullData.push({x: lastDate, y: Math.floor(Math.random() * 100)})
      lastDate += TICKINTERVAL
      return [{data: fullData.slice()}]
    }
    const interval = setInterval(() => 
      setSeries(getNewSeries()), 500);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="app">
      <div className="row">
        <div className="realtime">
          <Chart
            options={options}
            series={series}
            type="line"
            height="800px"
          />
        </div>
      </div>
    </div>
  )
};

export default Gamepage;
