import { useFormik } from "formik";
import { loginSchema } from "../../../../validationSchemas";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: () => {
      if (!formik.errors.email && !formik.errors.password) {
        navigate("/product-list");
      }
    },
  });

  return (
    <div className="login flex h-screen font-sans">
      <div className="w-3/5 bg-white text-[#1E0E62] p-4">
        <p className="text-7xl text-left mt-[99px] ml-[115px] font-bold">
          Sign in and let&apos;s start your journey!
        </p>
        <div className="w-[470px] h-[324px] mt-[51px] ml-[115px]">
          <div className="text-lg text-left mt-6">
            <label
              className={`block font-medium ${
                formik.errors.email && formik.touched.email
                  ? "text-red-500"
                  : ""
              }`}
            >
              EMAIL
            </label>
            <input
              type="email"
              placeholder="Your email"
              className={`border border-gray-300 w-[470px] h-[60px] rounded-full p-2 mt-[15px] pl-6 ${
                formik.errors.email && formik.touched.email
                  ? "text-red-500"
                  : ""
              }`}
              {...formik.getFieldProps("email")}
            />
            {formik.errors.email && formik.touched.email ? (
              <div className="text-red-500">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="text-lg text-left mt-6">
            <label
              className={`block font-medium ${
                formik.errors.password && formik.touched.password
                  ? "text-red-500"
                  : ""
              }`}
            >
              PASSWORD
            </label>
            <input
              type="password"
              placeholder="Your password"
              className={`border border-gray-300 w-[470px] h-[60px] rounded-full p-2 mt-[15px] pl-6 ${
                formik.errors.password && formik.touched.password
                  ? "text-red-500"
                  : ""
              }`}
              {...formik.getFieldProps("password")}
            />
            {formik.errors.password && formik.touched.password ? (
              <div className="text-red-500">{formik.errors.password}</div>
            ) : null}
          </div>
          <form onSubmit={formik.handleSubmit}>
            <button
              type="submit"
              className="bg-[#482BE7] text-white font-bold rounded-full w-[210px] h-[60px] p-2 mt-16 left-[135px] absolute"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
      <div className="w-[60%]">
        <img src="/login-signup.png" alt="Signup" className="w-full h-full" />
      </div>
    </div>
  );
}

export default Login;
