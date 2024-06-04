import  { useState } from "react";
import logo from "../../../../public/logo.png"; // Assuming logo path is correct
import "../Login/Login.css"; // Assuming Login.css exists

const Login = () => {
  const [signInState, setSignInState] = useState("Sign In"); // Corrected variable name

  const handleSignInUpToggle = () => {
    setSignInState(signInState === "Sign In" ? "Sign Up" : "Sign In");
  };

  return (
    <div className="login h-[100vh]">
      <img src={logo} alt="Netflix Logo" className="login-logo w-[150px]" />
      <div className="login-form w-full max-w-[450px] border-r-4 p-[60px] m-auto">
        <h1 className="text-white text-[32px] font-[500] mb-[28px]">{signInState}</h1>
        <form action="">
          {signInState === "Sign Up" && (
            <input type="text" placeholder="Your Name" className="w-full mb-[20px]" />
          )}
          <input type="email" placeholder="Email" className="w-full mb-[20px]" />
          <input type="password" placeholder="Password" className="w-full mb-[20px]" />
          <button>{signInState}</button>

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
            <span
              className="ml-[6px] cursor-pointer font-bold text-white"
              onClick={handleSignInUpToggle}
            >
              {signInState === "Sign In" ? "Sign Up" : "Sign In Now"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
