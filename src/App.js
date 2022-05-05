import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Home from './pages/Home';

class App extends React.PureComponent {
  render() {
    return (
      <Routes>
        <Route path="/" component={<Home />} />
        <Route path="/calculator" component={<Calculator />} />
      </Routes>
    );
  }
}
export default App;
