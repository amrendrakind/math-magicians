import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CalculatorPage from './pages/CalculatorPage';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import QuotesPage from './pages/QuotesPage';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/math-magicians" element={<HomePage />} />
          <Route path="/math-magicians/calculator" element={<CalculatorPage />} />
          <Route path="/math-magicians/quotes" element={<QuotesPage />} />
        </Routes>
      </div>
    );
  }
}
export default App;
