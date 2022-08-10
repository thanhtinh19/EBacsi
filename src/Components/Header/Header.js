import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className='container-header'>
      <div className='header'>
        <Link to="/"><img className="logo" src="../img/icon/logo.png" alt="" /></Link>
        <div className="menu-wrapper menu-gold">
          <ul className="menu">
            <li><Link to ="/introduce">GIỚI THIỆU </Link></li>
            <li>
              <Link to="/service"> CÁC GÓI DỊCH VỤ Y TẾ</Link>
              <ul>
                <li><Link to="/service"> Tất cả các gói</Link></li>
                <li><Link to="/serCom"> Gói khám 1</Link></li>
                <li><Link to="/serCom2"> Gói khám 2</Link></li>
                <li><Link to="/serCom3"> Gói khám 3</Link></li>
                <li><Link to="/serCom4"> Gói khám 4</Link></li>
                <li><Link to="/serCom5"> Gói khám 5</Link></li>
                <li><Link to="/serCom6"> Gói khám 6</Link></li>
                <li><Link to="/serCom7"> Gói khám 7</Link></li>
                <li><Link to="/serCom8"> Gói khám 8</Link></li>
              </ul>
            </li>
            <li><Link to="/news"> TIN TỨC</Link></li>
            <li><Link to="/register"> ĐĂNG KÝ NHẬN TƯ VẤN</Link></li>
          </ul>
        </div>
        <i className="fa fa-shopping-cart"></i>
      </div>
    </div>
  );
}

export default Header;
