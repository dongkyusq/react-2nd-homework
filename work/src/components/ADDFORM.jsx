import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBuy } from "../../redux/modules/buys";

const ADDFORM = () => {
  const [buy, setBuy] = useState("");
  const [item, setItem] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");

  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        value={buy}
        onChange={(e) => {
          setBuy(e.target.value);
        }}
      />
      <input
        type="text"
        value={item}
        onChange={(e) => {
          setItem(e.target.value);
        }}
      />
      <input
        type="text"
        value={detail}
        onChange={(e) => {
          setDetail(e.target.value);
        }}
      />
      <input
        type="text"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(
            addBuy({
              id: new Date().getTime(),
              date: buy,
              item,
              detail,
              price,
            })
          );
        }}
      >
        저장
      </button>
    </div>
  );
};

export default ADDFORM;
