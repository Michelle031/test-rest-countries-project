import React, { useState, useEffect } from "react";
import { HiSearch } from "react-icons/hi";
import styled from "styled-components";

const Cardscontainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  padding: 120px 50px 15px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

const SearchBar = styled.div`
  width: 35%;
  height: 50px;
  padding: 10px 15px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 12px 0 rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 960px) {
    margin-bottom: 10px;
    width: 100%;
  }
`;
const Select = styled.div`
  width: 15%;
  height: 50px;
  padding: 10px 15px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 12px 0 rgba(0, 0, 0, 0.1);

  select {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    border: none;
    width: 100%;
    height: 100%;
    outline: none;

    * {
      padding: 10px 15px;
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
    }
  }
  @media screen and (max-width: 960px) {
    width: 50%;
    align-self: flex-start;
  }
`;
const Input = styled.div`
  width: 90%;
  height: 100%;

  input {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    border: none;
    width: 100%;
    height: 100%;
  }


`;

const Cards = (props) => {
  const [input, setInput] = useState("");
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    if (input === "") {
      filterHandler();
    } else {
      var check = new RegExp("^" + input.toLowerCase());
      props.setFiltered(
        props.data.filter(
          (item) => check.test(item.name.common.toLowerCase()) === true
        )
      );
    }
  }, [input]);

  
  const statusHandler = (e) => {
    props.setStatus(e.target.value);
  };

  const filterHandler = () => {
    switch (props.status) {
      case "All":
        props.setFiltered(props.data);
        break;
      case "Africa":
        props.setFiltered(
          props.data.filter((item) => item.region === "Africa")
        );
        break;
      case "America":
        props.setFiltered(
          props.data.filter((item) => item.region === "Americas")
        );
        break;
      case "Asia":
        props.setFiltered(props.data.filter((item) => item.region === "Asia"));
        break;
      case "Oceania":
        props.setFiltered(
          props.data.filter((item) => item.region === "Oceania")
        );
        break;
      case "Europe":
        props.setFiltered(
          props.data.filter((item) => item.region === "Europe")
        );
        break;

      default:
        props.setFiltered(props.data);
        break;
    }
  };


  useEffect(() => {
    filterHandler();
  }, [props.status]);
  
  return (
    <Cardscontainer>
      <SearchBar>
        <HiSearch style={{ margin: "0 auto", width: "20%" }} />
        <Input>
          <input
            type="text"
            placeholder="Search for a country..."
            onChange={inputHandler}
          />
        </Input>
      </SearchBar>
      <Select>
        <select onChange={statusHandler}>
          <option value="All" >
            Filter By Region
          </option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Oceania">Oceania</option>
          <option value="Europe">Europe</option>
        </select>
      </Select>
    </Cardscontainer>
  );
};

export default Cards;
