import React from 'react';
import './App.css';

const App = () => (
  <ul className="navigation_bar">
  <a className="a" href="./main.html">
  <img src="./mocks/logo.png" className="logo_pic"/>
  </a>
  <li className="login">
  <a className="a" href="./new.html?mode=login">ورود</a>
  </li>
  <li className="register">
  <a className="a" href="./new.html?mode=register">عضویت</a>
  </li>
  <li className="help"><a className="a">راهنما</a></li>
  <div className="divStyle"></div>
</ul>
);
 


export default App;
