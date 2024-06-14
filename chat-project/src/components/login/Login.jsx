import React, { useState } from "react";
import Style from "../login/login.module.css";
import { Link } from "react-router-dom";
import { signInWithEmailAndPasswordFunc, signInWithGoogle } from "../../firebase"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPasswordFunc(email, password);
      alert("Login Successful");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className={Style.main}>
      <div className={Style.loginMain}>
        <h1> Welcome Back</h1>
        <div className={Style.signUp}>
          <p>New here?</p>
          <Link to="/signup">Sign Up</Link>
        </div>
        <div className={Style.input}>
          <input type="text" placeholder="Email" className="loginInputName" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" className="loginInputPassword" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className={Style.button}>
          <button onClick={handleLogin}>Login</button>
          <button onClick={signInWithGoogle}>Login with Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
