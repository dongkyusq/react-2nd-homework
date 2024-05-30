import ADDFORM from "./components/ADDFORM";
import BuyList from "./components/BuyList";
import styled from "styled-components";
import Calender from "./components/Calender";
import { useState } from "react";

const Container = styled.main`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
`;

export const Section = styled.section`
  background-color: #ffffff;
  border-radius: 16px;
  padding: 20px;
`;

export default function Home() {
  const [month, setMonth] = useState(1);

  console.log(month);

  return (
    <Container>
      <ADDFORM />
      <Calender month={month} setMonth={setMonth} />
      <BuyList />
    </Container>
  );
}
