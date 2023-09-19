import { useFormik } from "formik";
import { loginSchema } from "../../../../validationSchemas";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: {
      email: localStorage.getItem("email") || "",
      password: localStorage.getItem("password") || "",
    },
    validationSchema: loginSchema,
    onSubmit: () => {
      const storedUserData = JSON.parse(localStorage.getItem("userData"));
      if (
        storedUserData &&
        formik.values.email === storedUserData.email &&
        formik.values.password === storedUserData.password
      ) {
        navigate("/product-list");
      } else {
        setError("Email or password are incorrect.");
      }
    },
  });

  useEffect(() => {
    return () => {
      localStorage.removeItem("email");
      localStorage.removeItem("password");
    };
  }, []);

  return (
    <div className="flex h-screen font-sans">
      <div className="w-[50%] bg-white text-[#1E0E62] flex flex-col p-32">
        <p className="text-7xl text-start font-bold">
          Sign in and let&apos;s start your journey!
        </p>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col flex-start mt-6">
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
              {error && <div className="text-red-500">{error}</div>}
            </div>
            <div className="flex flex-start">
              <button
                type="submit"
                className="bg-[#482BE7] text-white font-bold rounded-full w-[210px] h-[60px] p-2 mt-16 left-[135px] absolute"
              >
                Sign In
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="w-[50%] flex justify-center items-center">
        <img
          src="/login-signup.png"
          alt="Signup"
          className="flex w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Login;
