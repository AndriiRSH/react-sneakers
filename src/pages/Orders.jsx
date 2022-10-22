import React from "react";

import axios from "axios";
import Card from "../components/Card";
function Orders() {
  const [Orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://62e978e83a5f1572e86b46ac.mockapi.io/orders"
        );
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        alert("Error with orders");
        console.error("error");
      }
    })();
  }, []);
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мої замовлення</h1>
      </div>

      <div className="d-flex flex-wrap">
        {(isLoading ? [...Array(8)] : Orders).map((item, index) => (
          <Card key={index} loading={isLoading} {...item}></Card>
        ))}
      </div>
    </div>
  );
}

export default Orders;
