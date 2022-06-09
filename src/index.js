import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import No_Navbar_Template from './component/No_Navbar_Template';
import Dropdown from './component/Dropdown';


ReactDOM.render(<No_Navbar_Template/>, document.getElementById('root'));

//ReactDOM.render(<Dropdown />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


