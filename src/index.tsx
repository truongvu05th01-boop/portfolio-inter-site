import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

if (
    window.location.pathname === '/os/index.html' &&
    new URLSearchParams(window.location.search).get('embed') === '1'
) {
    window.history.replaceState(
        null,
        '',
        `/os/${window.location.search}${window.location.hash}`
    );
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
