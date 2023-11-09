import React from 'react';
import './login.scss';
import '../generalStyles/main.scss';
import logo from '../../assets/social/instalogo.jpeg';

const randomNumberInRange = () => {
  return Math.floor(Math.random() * 1000 + 30);
};

const num = randomNumberInRange();

function Login() {
  return (
    <div className='container-medium'>
      <div className='login'>
        <div className='login__wrapper'>
          <div className='login__header'>
            <h2 className='login__header-title'>Join our group</h2>
          </div>
          <div className='login__counter'>{num}</div>
          <div className='login__body'>
            <div className='login__placeholders'>
              <div className='login__username'>
                <label htmlFor=''>Enter username :</label>
                <input className='login__inputs' type='text' />
              </div>
              <div className='login__password'>
                <label htmlFor=''>Enter password :</label>
                <input className='login__inputs' type='password' />
              </div>
              <div className='login__confirm'>
                <button className='login__confirm-button'>Confirm</button>
              </div>
            </div>
          </div>
          <div className='social'>
            <a href='/' className='social__link'>
              <img className='social__icon' src={logo} alt='find us' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
