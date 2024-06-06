import { useState } from "react";
import logo from "../../../../public/logo.png";
import "../Login/Login.css";
import { login, signup } from "../../../firebase";

const Login = () => {
  const [signInState, setSignInState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const userauth = async (e) => {
    e.preventDefault();
    if (signInState === "Sign In") {
      await login(email, pass);
    } else {
      await signup(name, email, pass);
    }
  };

  const handleSignInUpToggle = () => {
    setSignInState(signInState === "Sign In" ? "Sign Up" : "Sign In");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    userauth(e);
  };

  return (
    <div className="login h-[100vh]">
      <img src={logo} alt="Netflix Logo" className="login-logo w-[150px]" />
      <div className="login-form w-full max-w-[450px] border-r-4 p-[60px] m-auto">
        <h1 className="text-white text-[32px] font-[500] mb-[28px]">{signInState}</h1>
        <form onSubmit={handleFormSubmit}>
          {signInState === "Sign Up" && (
            <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full mb-[20px]" />
          )}
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full mb-[20px]" />
          <input type="password" placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)} className="w-full mb-[20px]" />
          <button type="submit">{signInState}</button>

          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="Remember Me">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>

        <div className="form-switch text-white mt-[40px]">
          <p>
            New To Netflix?{" "}
            <span className="ml-[6px] cursor-pointer font-bold text-white" onClick={handleSignInUpToggle}>
              {signInState === "Sign In" ? "Sign Up" : "Sign In Now"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
