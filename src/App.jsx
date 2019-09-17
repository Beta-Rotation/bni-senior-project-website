import React from 'react';
import { Container } from "react-bootstrap";
import { BrowserRouter, Route } from "react-router-dom";
import {
  Header,
  Footer,
  Dashboard
} from "./components";

function App() {
  return (
  <BrowserRouter>
    <Container>
      <Header />
      <React.Fragment>
        <Route path="/ProgressCharts" />
        <Route path="/" component={Dashboard} exact />
      </React.Fragment>
      <Footer />
    </Container>
  </BrowserRouter>
  );
}

export default App;
