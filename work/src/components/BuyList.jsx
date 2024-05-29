import React from "react";
import { useSelector } from "react-redux";

const BuyList = () => {
  const buys = useSelector((state) => state.buys);
  console.log(buys);
  return (
    <div>
      {buys.map(function (buy) {
        return (
          <div key={buy.id}>
            {buy.date}, {buy.item} - {buy.detail} {buy.price}원
          </div>
        );
      })}
    </div>
  );
};

export default BuyList;
