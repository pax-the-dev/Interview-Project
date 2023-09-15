import loginSignupImage from "../../../assets/login-signup.png";
import "@fontsource/dm-sans";

function Login() {
  return (
    <div className="login flex h-screen font-sans">
      <div className="w-3/5 bg-white text-[#1E0E62] p-4">
        <p className="text-7xl text-left mt-[99px] ml-[115px] font-bold">
          Sign in and let's start your journey!
        </p>
        <div className="w-[470px] h-[324px] mt-[51px] ml-[115px]">
          <div className="email text-lg text-left mt-6">
            <label className="block font-medium">EMAIL</label>
            <input
              type="text"
              id="email"
              placeholder="Your email"
              className="border border-gray-300 w-[470px] h-[60px] rounded-full p-2 mt-[15px] pl-6"
            />
          </div>
          <div className="password text-lg text-left mt-6">
            <label className="block font-medium">PASSWORD</label>
            <input
              type="text"
              id="password"
              placeholder="Your password"
              className="border border-gray-300 rounded-full w-[470px] h-[60px] p-2 mt-[15px] pl-6"
            />
          </div>
          <button
            type="button"
            className="bg-[#482BE7] text-white font-bold rounded-full w-[210px] h-[60px] p-2 mt-16 left-[135px] absolute"
          >
            Sign In
          </button>
        </div>
      </div>
      <div className="w-3/5">
        <img src={loginSignupImage} alt="Login" className="w-full h-full" />
      </div>
    </div>
  );
}

export default Login;
