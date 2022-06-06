import React from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";


const Button = styled.button`
  border:none;
  display: flex;
  box-shadow: 1px 1px 12px 0 rgba(0, 0, 0, 0.2);
  width: 120px;
  height: 35px;
  padding: 10px 20px;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  border-radius: 3px;
`;
const Info = styled.div`
  width: 100%;
  height: 100%;
  padding: 120px 50px 150px 50px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  *{
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
  }
`;

const InfoSection = styled.div`
  margin-top: 50px;
  width: 100%;
  height: 100%; 
  display: flex;
  justify-content: space-around; 

  @media screen and (max-width: 960px) {
    height: auto;
    flex-direction: column;
  }
  
`;
const Image = styled.img`
  width: 40%;

  @media screen and (max-width: 960px) {
    height: 80%;
    width: 100%;
  }
  

`;
const Details = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  margin-top: 20px;
  width: 100%;

  p {
    margin-bottom: 10px;
  }

  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 100%;
  }
`;
const Display = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
  height: 100%;
  padding: 30px;
  
  @media screen and (max-width: 960px) {
    width: 100%;
    font-size: 18px;
    padding: 30px 0px;
  }
`;

const Borders = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  margin: 30px 0 20px 0;
  flex-wrap: wrap;
  * {
  font-size: 13px;
  }

`;
const Section = styled.div`
  width: 40%;
`;
const SectionM = styled.div`
  @media screen and (max-width: 960px) {
    margin-top: 20px;
  }
`;
const Countries = styled.div`
  display: flex;
  box-shadow: 1px 1px 20px 0 rgba(0, 0, 0, 0.1);
  width: auto;
  height: 30px;
  padding: 10px 30px;
  align-items: center;
  justify-content: center;
  margin: 0 10px 10px 8px;
  overflow-y: hidden;
  border-radius: 3px;
  
`;



const InfoPage = (props) => {
  let {id} = useParams();
  let navigate = useNavigate();
  
  
  const chosen = props.data.filter((country) => country.cca3 === id);
  let {flags, name, tld, population,region, subregion, capital, currencies, languages, borders} = chosen[0];
  let nativeName_ = name.nativeName ? name.nativeName[Object.keys(name.nativeName)[0]].common : name.common;
  let languages_ = languages ? Object.keys(languages).map(key => languages[key]).join(", ") : "None";
  let currencies_ = currencies ? Object.keys(currencies).map(key => currencies[key].name).join(", ") : "None";
  let borders_ = [];
  
  if (borders) {
    for (let i = 0; i < borders.length; i++) {
      [borders_[i]] = props.data.filter((country) => country.cca3 === borders[i]);
    }
  }


  
  console.log(chosen[0]);

  return (
    <Info>
      <Button
        onClick={() => {
          navigate("/");
        }}
      >
        <MdOutlineKeyboardBackspace style={{ marginRight: "10px" }}/>
      Back
      </Button>
      <InfoSection>
          <Image src={flags[0]}></Image>
        <Display>
        
          <h2>{name.common}</h2>
        
         <Details>
          <Section>
          <p><strong>Native Name: </strong>{nativeName_}</p>
          <p><strong>Population: </strong>{population.toLocaleString('en-US')}</p>
          <p><strong>Region: </strong>{region}</p>
          <p><strong>Sub Region: </strong>{subregion}</p>
          <p><strong>Capital: </strong>{capital[0]}</p>
          </Section>
           <SectionM>
           <p><strong>Top Level Domain: </strong>{tld} </p>
           <p><strong>Currencies: </strong>{currencies_}</p>
          <p><strong>Language: </strong>{languages_} </p>
           </SectionM>
        </Details>  
        <Borders>
        <strong>Border Countries: </strong>
          {borders_.map((borderC) => (
            <Link to={`/${borderC.cca3}`}>
              <Countries>{borderC.name.common}</Countries>
            </Link>
          ))}
        </Borders>
        </Display>
      </InfoSection>
    </Info>
  );
};

export default InfoPage;
