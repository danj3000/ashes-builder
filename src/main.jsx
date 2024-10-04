import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './app/store'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './login/LoginScreen.jsx';
import Builder from './Builder.jsx';
import ErrorPage from './ErrorPage.jsx';
import HomeScreen from './HomeScreen.jsx';
import HomeLayout from './HomeLayout.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Builder />,
      },

      {
        path: '/decks',
        element: <HomeLayout />,
        children: [
          {
            path: '/decks',
            element: <HomeScreen />,
          }
          ,
          {
            path: 'login',
            element: <Login />,
          }
        ]
      }
    ],
    errorElement: <ErrorPage />
  }
]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
