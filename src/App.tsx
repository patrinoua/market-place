import React from 'react';
import './App.css';
import MarketList from './components/MarketList';
import store from './app/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MarketList />
      </div>
    </Provider>
  );
}

export default App;
