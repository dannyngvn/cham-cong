import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <div className="login-page">
      <form className="login-form">
        <label htmlFor="">Tên đăng nhập</label>
        <input type="text" placeholder="Tên đăng nhập" />
        <label htmlFor="">Mật khẩu</label>
        <input type="password" placeholder="Mật khẩu" />
        <button>Đăng Nhập</button>
        <Link to="forgot-password">Quên mật khẩu ?</Link>
      </form>
    </div>
  );
};

export default Login;
