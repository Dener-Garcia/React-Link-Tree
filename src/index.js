import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Em vez de importarmos o App acima vamos usar nosso arquivo de rotas criado com o nome das paginas la do arquivo App.js dentro pasta src.

import {routerPages} from "./App";

// importando a configuracao de rotas em vez de renderizar o <app/> abaixo, eh o provider que vai definir qual pagina e qual componente vai ser mostrada no index.html dentor da div root

import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routerPages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

