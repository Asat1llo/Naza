import styled, { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle` 
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
}

ul {
  list-style-type: none;
}

a {
  display: inline-block;
  text-decoration: none;
}

img {
  display: inline-block;
}

button {
  border: none;
  cursor: pointer;
}
`

export default GlobalStyle