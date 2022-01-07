import React, {useState, useEffect} from 'react';
import Chart from "react-apexcharts";
import stocksJson from "../sample.json"
import { Button, Grid, IconButton, Modal, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


const Gamepage = () => {
  let XAXISRANGE = 766600000

  let stocks = []
  let mn = Number.MAX_VALUE, mx = Number.MIN_VALUE;
  for(const [key, value] of Object.entries(stocksJson["DAILY_PRICE"])) {
    stocks.push([new Date(key), value])
    mn = Math.min(mn, value);
    mx = Math.max(mx, value)
  }
  const StyledButton = styled(Button)(({ theme }) => ({
    borderColor: '#000000',
    textColor: '#000000',
    backgroundColor: theme.palette.secondary.primary,
    width: '8%',
    margin: '0.2%'
  }));

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
  const [cash, setCash] = useState(1000)
  const gameOver = () =>{
      if (state) {
        getNewCash((cash*price/buy).toFixed()) // Sell unsold stocks by the end of the round
      }
      // then, trigger game over state
  };

  let idx = 0;
  const [state, setState] = useState(true)
  const [series, setSeries] = useState([{data:[]}])  
  const [price, setPrice] = useState(0)
  const [buy, setBuy] = useState(0)
  const [clicks, setClicks] = useState(0)

  let fullData = []

  useEffect(() => {
    const getNewPrice = (price) => { setPrice(price) };
    const getNewSeries = () => {
      const [nx, ny] = stocks[idx]
      fullData.push({x: nx, y: ny})
      idx+=1
      getNewPrice(ny);
      return [{data: fullData.slice()}]
    }

    const interval = setInterval(() => 
      (idx < stocks.length? setSeries(getNewSeries()) : gameOver()), 500);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const getNewCash = (cash) => {setCash(cash)};
  const makeTransaction = () => {
    setClicks(clicks+1)
    if(state){
      setBuy(price);
    }
    else{
      getNewCash((cash*price/buy).toFixed())
  
    }
    setState(!state)
  }
  return (
    <div className="app">
    <div className="row">
    <div> <h1> Current Money : {cash} SGD </h1>  </div>
    <div align = "right">
    <StyledButton variant="outlined" onClick = {makeTransaction}> 
    <Typography variant="h3">
    {state ? "BUY" : "SELL"}
    </Typography>
    </StyledButton>
    </div>
    </div>
    <div className="row">    
    <div className="realtime">
    <Chart
    options={options}
    series={series}
    type="line"
    height="800px"
    />
    <Button variant="primary" className="btn-primary"/>
    </div>

    </div>
    </div>

    )
};

export default Gamepage;
