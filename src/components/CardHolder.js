import React from "react";
import styled from "styled-components";
import CardItem from "./Card";

const CardHolder = styled.div`
  width: 100%;
  height: ${(props) => props.theme.data ? "auto" : "70vh"};
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 15px 50px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const Card = (props) => {
  return (
    <CardHolder>
      { props.filtered
        .sort(() => 0.5 - Math.random())
        .slice(0, 8)
        .map((item) => (
          <CardItem key={item.id} item={item} theme={props.theme} />
        ))}
    </CardHolder>
  );
};

export default Card;
