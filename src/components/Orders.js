import React, {useState, useEffect} from "react";

import axios from "axios";


const Orders = () => {

  const [addOrders, setAddOrders]= useState([])

  useEffect(()=>{
    axios.get("http://localhost:3002/addOrder").then((res)=>{
      console.log(res.data)
      setAddOrders(res.data)
    })
  }, [])

  
  return (
    <div className="orders">
      
      <div className="order-table">
        <table>
          <tr>
            <th>Name</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Mode</th>
           
          </tr>

          {addOrders.map((stock, index)=>{
           
            return(
               <tr key={index}>
            <td>{stock.name}.</td>
            <td>{stock.qty}</td>
            <td>{stock.price}</td>
            <td>{stock.mode}</td>
          </tr>

            )

          } )}
        </table>
      </div>
    </div>
  );
};

export default Orders;