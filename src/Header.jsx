import React from 'react';
import styled from 'styled-components';
import { useNavigate} from 'react-router-dom';


const HeaderContainer = styled.div`
  box-sizing: border-box;
  position: fixed;
    top: -15px;
    left: 0px;
  z-index: 2;
  padding-right: 10px;
  padding-left: 40px;
  background-color: #29b8ff;
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  font-family: 'Bad Script', cursive;
  border-bottom: solid 4px white;
  padding-left: 10px;
  color: white;

`;


const Header = ({ theme, themeToggler}) => {

  const navigate = useNavigate();



  return (
    <HeaderContainer data-testid='header'>
      <h1 className="version">Job Finder Demo 1.3.2</h1>
      <button onClick={() => {navigate('/')}}>Home</button>
      <label className="switch">
        <input
          type="checkbox"
          />
        <span className="slider round"
          onClick={() => { themeToggler();}}>
          <span className='sun'
            onClick={() => { themeToggler();}}>

          </span>
          <span className='sun'
            onClick={() => { themeToggler();}}>

          </span>
        </span>
      </label>

    </HeaderContainer>
  );
};




export default Header;