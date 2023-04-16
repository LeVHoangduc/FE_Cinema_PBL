import React, { useState } from "react";
import "./login.scss";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email);
  };

  return (
    <div className="Login">
      <div className="auth-form-container">
        <h2 className="Login-title">Đăng nhập</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />
          <label htmlFor="password">Mật khẩu</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
          <button type="submit" className="btn-login">
            Đăng nhập
          </button>
        </form>

        <button
          className="btn-register"
          onClick={() => props.onFormSwitch("register")}
        >
          {" "}
          Chưa có tài khoản ? Đăng ký{" "}
        </button>
      </div>
    </div>
  );
};
