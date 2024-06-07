import  { useState } from "react";
import logo from "../../../../public/logo.png"; // Assuming logo path is correct
import "../Login/Login.css"; // Assuming Login.css exists
import {login,signup} from '../../../firebase'
import netflix_spinner from '../../../assets/netflix_spinner.gif'
const Login = () => {
  const [signInState, setSignInState] = useState("Sign In"); // Corrected variable name
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[loading,setloading]=useState(false)

  const user_auth = async (event)=>{
    setloading(true);
    event.preventDefault();
    if(signInState==="Sign In"){
      await login(email,password);
    }

    else{
      await signup(name,email,password);
    }
    setloading(false);
  }

  const handleSignInUpToggle = () => {
    setSignInState(signInState === "Sign In" ? "Sign Up" : "Sign In");
  };

  return (
    loading?<div className="login-spinner w-[100%] h-100vh flex items-center justify-center">
      <img src={netflix_spinner} className="w-[60px]" alt="" />
    </div>:
    <div className="login h-[100vh]">
      <img src={logo} alt="Netflix Logo" className="login-logo w-[150px]" />
      <div className="login-form w-full max-w-[450px] border-r-4 p-[60px] m-auto">
        <h1 className="text-white text-[32px] font-[500] mb-[28px]">{signInState}</h1>
        <form action="">
        {signInState === "Sign Up" && (
  <>
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
      type="text"
      placeholder="Your Name"
      className="w-full mb-[20px]"
    />
  </>
)}

          <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Email" className="w-full mb-[20px]" />
          <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Password" className="w-full mb-[20px]" />
          <button onClick={user_auth} type="submit">{signInState}</button>

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