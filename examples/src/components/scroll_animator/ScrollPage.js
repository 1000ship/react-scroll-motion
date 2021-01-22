import React from "react";
import styled from "styled-components";
import { ScrollPageContext } from "./ScrollContext";

const Container = styled.div`
  margin: 0px;
  padding: 0px;
  height: 100vh;
  position: relative;
`;

const ScrollPage = ({ children, page }) => {

  return <Container>
    <ScrollPageContext.Provider value={{page}}>
      {children}
    </ScrollPageContext.Provider>
  </Container>;
};

export default ScrollPage;
