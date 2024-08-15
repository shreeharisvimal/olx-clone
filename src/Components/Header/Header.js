import React, { useContext } from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { useNavigate } from 'react-router-dom';
import { AuthContext, FireBaseContext } from '../store/FireBasecontext';


function Header() {
  const navigate = useNavigate()
  const {user} = useContext(AuthContext)
  const {Firebase} = useContext(FireBaseContext)

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
        <span onClick={()=>navigate('/Signin')}>{user?`welcome ${user.displayName}`:'Login'}</span>
          <hr />
        </div>
        {user && <span className="loginPage" onClick={()=>{
          Firebase.auth().signOut();
          navigate('/')
        }}>logout</span>}
        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent" onClick={()=> navigate('/create')}>
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
