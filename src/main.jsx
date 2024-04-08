import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import AllMovies from './components/AllMovies.jsx';
import TopMovies from './components/TopMovies.jsx';
import RewardedMovie from './components/RewardedMovie.jsx';
import MostIncomeMovie from './components/MostIncomeMovie.jsx';
import ContextProvider from './provider/ContextProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:"404 Page Not Found",
    children:[
      {
        path:'/',
        element:<AllMovies></AllMovies>
      },
      {
        path:'/topMovies',
        element:<TopMovies></TopMovies>
      },
      {
        path:'/rewardedMovies',
        element:<RewardedMovie></RewardedMovie>
      },
      {
        path:'/mostIncomeMovies',
        element:<MostIncomeMovie></MostIncomeMovie>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
    <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>,
)
