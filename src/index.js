import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import {AuthProviders} from "./Providers/AuthProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProviders>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProviders>
  </React.StrictMode>
);

