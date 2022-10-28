import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import Main from "./components/Main";


const AppStyle = styled.div`
  width: 100%;
`

function App() {

  return (
   <AppStyle>
      <GlobalStyle />
      <Main />
   </AppStyle>
  );
}

export default App;
