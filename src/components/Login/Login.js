import React, { useState } from 'react';
import Message from '../Message/Message';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // This Function called on the form submition
  const login = () => {
    if (email === '' || password === '') {
      setMessage('Please Enter All the Fields To Login');
      return;
    }
  };
  // Rendering the Login Form
  return (
    <div>
      <section className='vh-100' style={{ backgroundColor: '#fff' }}>
        <div className='container py-5 h-100'>
          <div className='row d-flex justify-content-center align-items-center h-100'>
            <div className='col-12 col-md-8 col-lg-6 col-xl-5'>
              <div
                className='card shadow-2-strong'
                style={{ borderRadius: '1rem' }}>
                <div className='card-body p-5 text-center'>
                  <h1 className='text-uppercase text-center mb-5'>Veteran</h1>
                  <h3>Log In</h3>
                  {message ? <Message msg={message} /> : null}

                  <div className='form-outline mb-4'>
                    <input
                      type='email'
                      id='email'
                      className='form-control form-control-lg'
                      onChange={(event) => {
                        setEmail(event.target.value);
                      }}
                      value={email}
                    />
                    <label className='form-label'>Email</label>
                  </div>

                  <div className='form-outline mb-4'>
                    <input
                      type='password'
                      id='password'
                      className='form-control form-control-lg'
                      a
                      onChange={(event) => {
                        setPassword(event.target.value);
                      }}
                      value={password}
                    />
                    <label className='form-label'>Password</label>
                  </div>

                  <button
                    className='btn btn-primary btn-lg btn-block'
                    type='submit'
                    onClick={login}>
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
