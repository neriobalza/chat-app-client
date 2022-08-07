import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/views/Home.scss";

const Home = () => {
  const [login, setLogin] = useState(true);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    navigate("/k", { replace: true });
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    navigate("/k", { replace: true });
  };

  const handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    setLoginData({
      ...loginData,
      [key]: value,
    });
  };

  const handleSwitchLogin = () => {
    setLogin(!login);
  };

  return (
    <main className="home">
      {login ? (
        <section className="login">
          <h2>Login</h2>

          <form
            onSubmit={handleLogin}
            className="login__form"
            autoComplete="off"
          >
            <input
              type="email"
              name="email"
              id="l-email"
              placeholder="Email"
              required
              value={loginData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              id="l-password"
              placeholder="Password"
              required
              value={loginData.password}
              onChange={handleChange}
            />
            <button>Log in</button>
          </form>
          <div className="login__switch">
            <p onClick={handleSwitchLogin}>Create an account</p>
          </div>
        </section>
      ) : (
        <section className="login">
          <h2>Sign Up</h2>

          <form
            onSubmit={handleSignUp}
            className="login__form"
            autoComplete="off"
          >
            <input
              type="email"
              name="email"
              id="s-email"
              placeholder="Email"
              required
              value={loginData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              id="s-password"
              placeholder="Password"
              required
              value={loginData.password}
              onChange={handleChange}
            />
            <input
              type="password"
              name="repeatPassword"
              id="repeat-password"
              placeholder="Repeat Password"
              required
              value={loginData.repeatPassword}
              onChange={handleChange}
            />
            <button>Sign Up</button>
          </form>

          <div className="login__switch">
            <p onClick={handleSwitchLogin}>I already have an account</p>
          </div>
        </section>
      )}
    </main>
  );
};

export default Home;
