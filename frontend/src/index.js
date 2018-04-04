import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Login'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'

if(sessionStorage.getItem('status') != null){
ReactDOM.render((<BrowserRouter><App /></BrowserRouter>), document.getElementById('root'));
}
else
{	
ReactDOM.render(<Login/>,document.getElementById('root'));
}
registerServiceWorker();
