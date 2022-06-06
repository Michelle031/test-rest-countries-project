import React from "react";
import styled from "styled-components";
import Cards from "./Cards";
import Card from "./CardHolder";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Page = ({
  theme,
  setTheme,
  status,
  setStatus,
  data,
  filtered,
  setFiltered,
}) => {
  return (
    <Container>
      <Cards
        theme={theme}
        setTheme={setTheme}
        status={status}
        setStatus={setStatus}
        data={data}
        filtered={filtered}
        setFiltered={setFiltered}
      />
      <Card theme={theme} setTheme={setTheme} filtered={filtered} />
    </Container>
  );
};

export default Page;
