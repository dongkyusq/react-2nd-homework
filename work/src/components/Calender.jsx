import React, { useState } from "react";
import styled from "styled-components";
import { Section } from "../Home";

const MONTHS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const MonthWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const MonthButtons = styled.button`
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  display: flex;
  height: 60px;
  padding: 20px;
  width: 104px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: ${(props) =>
    props.selected
      ? "var(--white-alpha-100, #fff)"
      : "var(--black-alpha-100, #000)"};
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background: ${(props) =>
    !props.selected
      ? "var(--black-alpha-100, #F6F7FA)"
      : "var(--bg-form, #2EC4B6)"};
  &:hover {
    background: #2ec4b6;
    color: #fff;
  }
`;

const Calender = ({ month, setMonth }) => {
  return (
    <Section>
      <MonthWrapper>
        {MONTHS.map((element) => {
          return (
            <MonthButtons
              key={element}
              selected={element === month}
              onClick={() => {
                setMonth(element);
              }}
            >{`${element}월`}</MonthButtons>
          );
        })}
      </MonthWrapper>
    </Section>
  );
};

export default Calender;
