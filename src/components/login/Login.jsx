import React from 'react';
import './login.scss';
import '../generalStyles/main.scss';

const randomNumberInRange = () => {
  return Math.floor(Math.random() * 100 + 30);
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
                <input type='text' />
              </div>
              <div className='login__password'>
                <label htmlFor=''>Enter password :</label>
                <input type='password' />
              </div>
              <div className='login__confirm'>
                <button className='login__confirm-button'>Confirm</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
