import React, {useState, useEffect} from 'react';
import Chart from "react-apexcharts";
import stocksJson from "../sample.json"

const Gamepage = () => {
  let XAXISRANGE = 766600000

  let stocks = []
  let mn = Number.MAX_VALUE, mx = Number.MIN_VALUE;
  for(const [key, value] of Object.entries(stocksJson["DAILY_PRICE"])) {
    stocks.push([new Date(key), value])
    mn = Math.min(mn, value);
    mx = Math.max(mx, value)
  }

  stocks.reverse()
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
    text: stocksJson["STOCK_NAME"],
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
    max: mx,
    min: mn
  },
  legend: {
    show: false
  },
  }

  const gameOver = () =>{ };
  let idx = 0;

  const [series, setSeries] = useState([{data:[]}])
  let fullData = []

  useEffect(() => {
    const getNewSeries = () => {
      const [nx, ny] = stocks[idx]
      fullData.push({x: nx, y: ny})
      idx+=1
      return [{data: fullData.slice()}]
    }
    const interval = setInterval(() => 
      (idx < stocks.length? setSeries(getNewSeries()) : gameOver()), 500);
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
