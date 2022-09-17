import React, { useState } from "react";
import Button from "../components/Button";
import Inputs from "../components/Inputs";
import API from "../config/API";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const onForm = (value, type) => {
    setForm({
      ...form,
      [type]: value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    API.login(form)
      .then((res) => {
        console.log(res);
        localStorage.setItem("testToken", res.data.token);
        setMessage("ورود موفقیت امیز");
        setTimeout(() => {
          navigate("/List", { replace: true });
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
        setMessage("نام کاربری یا کلمه عبور اشتباه است");
      });
  };
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="logo-side">
          <div className="logo-size">
            <img className="img-res" src="./logo512.png" alt="" />
          </div>
        </div>
        <div className="content-side">
          <form className="form">
            <p
              className={message.includes("اشتباه") ? "is-error" : "is-success"}
            >
              {message}
            </p>
            <label htmlFor="">نام کاربری</label>
            <Inputs.Input
              value={form.username}
              onChange={(e) => onForm(e.target.value, "username")}
            />
            <label htmlFor="">رمز عبور</label>
            <Inputs.Input
              type="password"
              value={form.password}
              onChange={(e) => onForm(e.target.value, "password")}
            />
            <div className="submit-form">
              <Button content={"ورود به حساب کاربری"} onClick={onSubmit} />
              <p className="forget-pass">رمز عبور را فراموش کرده ام</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
