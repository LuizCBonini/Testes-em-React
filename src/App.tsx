import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Configuracao from './Paginas/Configuracao';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<Configuracao />}/>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;