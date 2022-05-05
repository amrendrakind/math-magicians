import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Header from './components/Header';
import Home from './pages/Home';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </div>
    );
  }
}
export default App;
