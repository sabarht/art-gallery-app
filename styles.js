import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  body {
    font-size:16px;
    margin: 0;
    font-family: system-ui;
    padding-bottom:36px ;
    background-color: #F0F4F7;
  }
  a {

  }
  h1{
    text-align: center;
  }
  h3{
    font-family: 'Playfair Display';
  }
  ul {
    padding: 0;
    list-style-type:none ;
    display: flex;
    flex-direction :column;
    align-items:center;
    gap: 1.5rem;
  }
  .back{

    position:fixed;
  top:24px;
  left:24px;

    }

`;
