import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import InfoPage from "./components/InfoPage";
import Page from "./components/Page";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { themes } from "./components/Theme";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [status, setStatus] = useState("All");

  const Fetch = async () => {
    const response = await fetch("https://restcountries.com/v3/all");
    const result = await response.json();
    setData(result);
  }
  useEffect(() => {
    Fetch();
    console.log(data[0]);
  }, []);

  return (
     
      <ThemeProvider theme={themes[theme]}>
        
        <Navbar theme={theme} setTheme={setTheme} />
        
        <Routes>
          <Route path="/" element={<Page
          theme={theme}
          setTheme={setTheme}
          status={status}
          setStatus={setStatus}
          data={data}
          filtered={filtered}
          setFiltered={setFiltered}
          />}/>
          
          
          <Route path="/:id" exact element={<InfoPage data={data} theme={theme} />}/>
          
        </Routes>
    
      </ThemeProvider>
    
    
  );
}

export default App;
