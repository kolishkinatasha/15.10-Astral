import React from 'react';

import { Link } from 'react-router-dom';

import './style.css';

const NotFountPage = () =>  (
  <div>
      <h2>Page not found</h2>
      <Link to="/">На главную</Link>

      {/* <div className="eyes">
        <div className="eye">
          <div className="ball"></div>
        </div>

        <div className="eye">
          <div className="ball"></div>
        </div>
      </div> */}

  </div>
);

 //выдает ошибку работе не мешает
// let balls = document.getElementsByClassName('ball');
// document.onmousemove = function(){
//     let x = event.clientX * 100 / window.innerWidth + "%";
//     let y = event.clientY * 100 / window.innerHeight + "%";
//   for (let i = 0; i < 2; i++){     
    
//       balls[i].style.left = x;
//       balls[i].style.top = y;
//       balls[i].style.transform = 'translate(-"+x+",-"+y+")';
    
//   }
// } 

export default NotFountPage;
