import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBuy } from "../../redux/modules/buys";
import { Section } from "../Home";

const ADDFORM = () => {
  const [buy, setBuy] = useState("");
  const [item, setItem] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");

  const dispatch = useDispatch();

  return (
    <Section>
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
    </Section>
  );
};

export default ADDFORM;
