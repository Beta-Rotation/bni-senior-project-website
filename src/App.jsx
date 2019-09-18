import React from 'react';
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import {
  Header,
  Footer,
  Dashboard,
  NotFound,
  ProgressCharts,
  TimeTracker,
  Resources
} from "./components";

const ScWrapper = styled.div`
    padding: 25px 0;
`;

function App() {
  return (
  <BrowserRouter>
    <Container>
      <Header />
      <ScWrapper>
        <Switch>
          <Route path="/ProgressCharts" component={ProgressCharts} />
          <Route path="/TimeTracker" component={TimeTracker} />
          <Route path="/Resources" component={Resources} />
          <Route path="/" exact component={Dashboard} />
          <Route component={NotFound} />
        </Switch>
      </ScWrapper>
      <Footer />
    </Container>
  </BrowserRouter>
  );
}

export default App;