const ADD_BUY = "ADD_BUY";

export const addBuy = (payload) => {
  return {
    type: ADD_BUY,
    payload: payload,
  };
};

const initialState = [
  {
    id: 1,
    date: "2024-01-05",
    item: "식비",
    detail: "세광양대창",
    price: "100,000",
  },
  {
    id: 2,
    date: "2024-01-10",
    item: "도서",
    detail: "모던 자바 스크립트",
    price: "40,500",
  },
  {
    id: 2,
    date: "2024-02-15",
    item: "간식",
    detail: "아이스크림",
    price: "2,500",
  },
];

const buys = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BUY:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default buys;
