import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Routes from "./Routes";
import "./App.css";

function App() {
  return (
    <Router>
      <Route component={Routes} />
    </Router>
  );
}

export default App;
