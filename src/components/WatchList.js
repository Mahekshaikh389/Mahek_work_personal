import React, { useState } from "react";
import {Tooltip, Grow} from "@mui/material"
import {  watchlist } from "../data/data";
import {BarChartOutlined, KeyboardArrowDown, KeyboardArrowUp, MoreHorizOutlined} from "@mui/icons-material";
import { useContext } from "react";
import GeneralContext from "./GeneralContext";
import { PieChart } from "./PieChart";

const WatchList = () => {

  const labels = watchlist.map((subArray)=>subArray["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: 'Price',
        data: watchlist.map((stock)=>stock.price),
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index)=>{
          return(
            <WatchListIteam stock={stock} key={index} />
          )
      

        })}
      </ul>

      <PieChart data={data} style={{width:"100px"}} />
    </div>
  );
};

export default WatchList;




const WatchListIteam = ( {stock}) => {
  const [showWatchListIteam, setShowWatchListIteam] = useState(false)

  const handleWatchListHover =(e)=>{
    setShowWatchListIteam(true)
  }

  const handleWatchListHoverexit =(e)=>{
    setShowWatchListIteam(false)
  }


  return(
    <li onMouseEnter={handleWatchListHover} onMouseLeave={handleWatchListHoverexit}>
      <div className="item">
        <span className={stock.isDown ? "Down" : "up" }>{stock.name}</span>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? 
          <KeyboardArrowDown className="down" />
          :
           <KeyboardArrowUp className="down" />
        }
        <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchListIteam && <WatchlistAction uid={stock.name} /> }
    </li>
  )
}


const WatchlistAction =({uid}) => {

  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  const handleSellClick = () => {
    generalContext.openSellWindow(uid);
  };


  return(
  <span className="actions">
    <span>
      <Tooltip
      placement="top"
      title="Buy (B)"
      arrow
      TransitionComponent={Grow}
      >
        <button className="buy"
        onClick={handleBuyClick}>Buy</button>
      </Tooltip>

      <Tooltip
      placement="top"
      title="Sell (S)"
      arrow
      TransitionComponent={Grow}
      >
        <button className="sell"
         onClick={handleSellClick} >Sell</button>
      </Tooltip>

      <Tooltip
      placement="top"
      title="Analytics (A)"
      arrow
      TransitionComponent={Grow}
      >
        <button>
           <BarChartOutlined className="icon"></BarChartOutlined>
        </button>
       
      </Tooltip>
      <Tooltip
      placement="top"
      title="More"
      arrow
      TransitionComponent={Grow}
      >
        <button>
          <MoreHorizOutlined className="icon"></MoreHorizOutlined>
        </button>
       
      </Tooltip>
    </span>

  </span>
  )
}