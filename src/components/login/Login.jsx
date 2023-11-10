import React from 'react';
import './login.scss';
import '../generalStyles/main.scss';
import logo from '../../assets/social/instalogo.jpeg';
import img from '../../assets/logo/ermis.jpg';
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
            <div className='container-medium'>
              {' '}
              <img s src={img} alt='' className='login__header-logo' />
            </div>
          </div>
          <div className='login__counter'>Members : {num}</div>
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
            <a
              href='https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2Fermismember%3Figshid%3DNzZlODBkYWE4Ng%253D%253D%26fbclid%3DIwAR2mu12AF9ZLsqINyP88WVSRgsFJaLubwsSSid3frUWJ-Gi8CkMsVzfM9lg&h=AT1HzQXuM5EBfAbf7Lpnu96pBRBCTcO2hORdiYWNT5AzCw-qb6Xbrzx7PX-hjKcjaeplOJylfkP3Ge4zpaZp69Xzs0dD254164MNYhPATr3VFZFJdO_oTuuh1KaerOtwR7883Q'
              target='_blank'
              rel='noreferrer'
              className='social__link'
            >
              <img className='social__icon' src={logo} alt='find us' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
