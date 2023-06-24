import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MockAdapter from "axios-mock-adapter";
import axios from 'axios';
import { QueryClient, QueryClientProvider } from 'react-query';

const mock = new MockAdapter(axios, { onNoMatch: "passthrough" });
mock.onPost("/api/form").reply(200)


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={new QueryClient()}>
    <App />
    </QueryClientProvider>
  </React.StrictMode>
);
