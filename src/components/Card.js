import React from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

const SingleCard = styled.div`
  width: 20vw;
  height: 49vh;
  display: flex;
  box-shadow: 1px 1px 12px 0 rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  text-decoration: none;
  margin-bottom: 40px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  * {
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  }
   @media screen and (max-width: 960px) {
     width: 100%;
     height: 49vh;
   }
`;

const Image = styled.div`
  width: 100%;
  height: 55%;
  overflow-y: hidden;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const Text = styled.div`
  width: 100%;
  height: 45%;
  padding: 15px;
  overflow-y: hidden;
  h3 {
    margin-bottom: 8px;
  }
  p {
    font-size: 14px;
  }
`;

const CardItem = (props) => {
  
  return (
    <Link to={`/${props.item.cca3}`}>
    <SingleCard key={props.index}>
      <Image>
        <img src={props.item.flags[1]} alt="ma" />
      </Image>
      <Text>
        <h3>{props.item.name.common}</h3>
        <p>Population: {props.item.population.toLocaleString('en-US')}</p>
        <p>Region: {props.item.region}</p>
        <p>Capital: {props.item.capital}</p>
      </Text>
    </SingleCard>  
    </Link>
  );
};

export default CardItem;
