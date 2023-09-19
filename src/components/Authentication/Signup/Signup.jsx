import { useFormik } from "formik";
import { signUpSchema } from "../../../../validationSchemas.jsx";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: signUpSchema,
    onSubmit: () => {
      if (
        !formik.errors.name &&
        !formik.errors.email &&
        !formik.errors.password
      ) {
        const userData = {
          name: formik.values.name,
          email: formik.values.email,
          password: formik.values.password,
        };

        localStorage.setItem("userData", JSON.stringify(userData));

        navigate("/login");
      }
    },
  });

  return (
    <div className="flex h-screen font-sans">
      <div className="w-[50%] bg-white text-[#1E0E62] flex flex-col p-32">
        <div></div>
        <p className="text-7xl text-start font-bold">
          Sign Up to Discover Startup Features
        </p>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col flex-start mt-6">
            <div className="text-lg text-left mt-6">
              <label
                className={`block font-medium ${
                  formik.errors.name && formik.touched.name
                    ? "text-red-500"
                    : ""
                }`}
              >
                NAME
              </label>
              <input
                type="text"
                placeholder="Your name"
                className={`border border-gray-300 w-[470px] h-[60px] rounded-full p-2 mt-[15px] pl-6 ${
                  formik.errors.name && formik.touched.name
                    ? "text-red-500"
                    : ""
                }`}
                {...formik.getFieldProps("name")}
              />
              {formik.errors.name && formik.touched.name ? (
                <div className="text-red-500">{formik.errors.name}</div>
              ) : null}
            </div>
            <div className="text-lg text-left mt-6">
              <label
                className={`block font-medium ${
                  formik.errors.email && formik.touched.email
                    ? "text-red-500"
                    : ""
                }`}
              >
                EMAIL:
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
                PASSWORD:
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
            <div className="flex flex-start mt-12 max-w-[474px]">
              <button
                type="submit"
                className="bg-[#482BE7] text-white font-bold rounded-full w-[210px] h-[60px] p-2 absolute"
              >
                Sign Up
              </button>
              <p className="ml-56 text-[#151439] opacity-40">
                By signing up you agree to Our Terms and Privacy Policy
              </p>
            </div>
          </div>
        </form>
      </div>
      <div className="w-[50%] flex justify-center items-center">
        <img
          src="/login-signup.png"
          alt="Signup"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Signup;
