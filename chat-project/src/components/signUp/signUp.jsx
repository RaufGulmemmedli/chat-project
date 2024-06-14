import React, { useState } from "react";
import Style from "../login/login.module.css";
import { Link } from "react-router-dom";
import { auth, signUpWithEmailAndPassword } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Sign Up Successful");
    } catch (error) {
      alert(error.message);
    }
  };

  console.log(email);
  console.log(password);

  return (
    <div className={Style.main}>
      <div className={Style.loginMain}>
        <h1>Sign Up</h1>
        <div className={Style.signUp}>
          <p>Already have an account?</p>
          <Link to="/login">Login</Link>
        </div>
        <div className={Style.input}>
          <input type="text" placeholder="Email" className="signUpInputName" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" className="signUpInputPassword" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className={Style.button}>
          <button onClick={handleSignUp}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
