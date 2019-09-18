import React from 'react';
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  Header,
  Footer,
  Dashboard,
  NotFound,
  ProgressCharts
} from "./components";

function App() {
  return (
  <BrowserRouter>
    <Container>
      <Header />
      <React.Fragment>
        <Switch>
          <Route path="/ProgressCharts" component={ProgressCharts} />
          <Route path="/" exact component={Dashboard} />
          <Route component={NotFound} />
        </Switch>
      </React.Fragment>
      <Footer />
    </Container>
  </BrowserRouter>
  );
}

export default App;
