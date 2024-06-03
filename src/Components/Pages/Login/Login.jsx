import logo from "../../../../public/logo.png"
import "../Login/Login.css"

const Login = () => {
  return (
    <div className="login h-[100vh]  ">
        <img src={logo} alt="" className="login-logo w-[150px]"/>
        <div className="login-form w-full max-w-[450px] border-r-4 p-[60px] m-auto ">
            <h1 className="text-white text-[32px] font-[500] mb-[28px]">Sign Up</h1>
            <form action="">
                <input type="text" placeholder="Your Name " />
                <c type="email" placeholder="Email" />
                <input type="password" placeholder="password" />
                <button>Sign Up</button>

                <div className="form-help">
                    <div className="remember">
                        <input type="checkbox" />
                        <label htmlFor="Remember Me"></label>
                    </div>
                </div>

            </form>
        </div>

      
    </div>
  )
}

export default Login
