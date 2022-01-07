import React, {useState, useEffect, useRef} from 'react';
import Chart from "react-apexcharts";
import allStocks from "../data.json";
import { Typography } from '@mui/material';
import { StyledButton } from '../components/StyledComponents';
import EndgameModal from '../components/EndgameModal';
import { styled } from '@mui/material/styles';

const XAXISRANGE = 766600000;
const STARTING_MONEY = 1000;

const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '24px',
});

const Space = styled('div')({
  flexGrow: 1,
});

const retrieveRandomStock = () => {
  return allStocks[Math.floor(Math.random() * allStocks.length)];
};

const parseStocks = (stocksJson) => {
  let stocks = [];
  let mn = Number.MAX_VALUE, mx = Number.MIN_VALUE;
  for(const [key, value] of Object.entries(stocksJson["DAILY_PRICE"])) {
    stocks.push([new Date(key), value])
    mn = Math.min(mn, value);
    mx = Math.max(mx, value)
  }
  stocks.reverse();

  return { stocks: stocks, mn: mn, mx: mx };
};

const generateOptions = (stocksJson, mn, mx) => {
  return {
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
  };
};

const Gamepage = () => {
  const [stocksJson] = useState(retrieveRandomStock());
  const [cash, setCash] = useState(STARTING_MONEY);
  const [isBuying, setIsBuying] = useState(true);
  const [series, setSeries] = useState([{ data:[] }]);
  const [price, setPrice] = useState(0);
  const [buy, setBuy] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef({
    index: 0,
    fullData: [],
    ...parseStocks(stocksJson)
  });

  const handleGameOver = () =>{
    if (!isBuying) {
      setCash((cash * price / buy).toFixed());
    }
    setIsModalOpen(true);
  };

  useEffect(() => {
    const getNewSeries = () => {
      const [nx, ny] = ref.current.stocks[ref.current.index];
      ref.current.fullData.push({ x: nx, y: ny });
      ref.current.index += 1;
      setPrice(ny);
      return [{ data: ref.current.fullData.slice() }]
    }

    const interval = setInterval(() => 
      (ref.current.index < ref.current.stocks.length? setSeries(getNewSeries()) : handleGameOver()), 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const makeTransaction = () => {
    if (isBuying) {
      setBuy(price);
    } else{
      setCash((cash * price / buy).toFixed());
    }
    setIsBuying(!isBuying);
  };

  return (
    <>
      <EndgameModal isOpen={isModalOpen} profit={((cash - STARTING_MONEY) / STARTING_MONEY * 100).toFixed(2)} company={stocksJson["STOCK_NAME"]} />
      <Wrapper>
        <Typography variant="h4">
          Current Money: {cash} SGD
        </Typography>
        <Space />
        <StyledButton variant="contained" onClick={makeTransaction}> 
          <Typography variant="h6">
            {isBuying ? "BUY" : "SELL"}
          </Typography>
        </StyledButton>
      </Wrapper>
      <Chart
        options={generateOptions(stocksJson, ref.current.mn, ref.current.mx)}
        series={series}
        type="line"
        height="800px"
      />
    </>
  );
};

export default Gamepage;
