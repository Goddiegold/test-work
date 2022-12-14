import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "react-toastify/dist/ReactToastify.css";
import reportWebVitals from './reportWebVitals';
import UserContextProvider from './context/UserContext';
import { debugContextDevtool } from 'react-context-devtool';
import MeetContextProvider from './context/MeetContext';
import {Provider} from "react-redux"
import store from './store';

const container =   ReactDOM.createRoot(document.getElementById("root"));

container.render(
    <UserContextProvider>
    <Provider store={store}>
        <App/>
    </Provider>
    </UserContextProvider>
);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// Attach root container
debugContextDevtool(container, {debugContext:true,debugReducer:true});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
