import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './routes';

// * Componentes do React
import Header from './components/Header';

import store from './store'

export default function App() {
  return (
    //* O provider vai permitir que o redux acesse todos nossos componentes e vice versa
    <Provider store={store}> 
      <BrowserRouter>
        <Header/>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}