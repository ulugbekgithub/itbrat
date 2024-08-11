import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../app/reducers/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { RiCloseLargeLine } from "react-icons/ri";

const validationSchema = Yup.object({
  username: Yup.string()
    .required("Username is required")
    .matches(/^[a-zA-Z0-9]+$/, "Username can only contain letters and numbers"),
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [usernameErr, setUsernameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const handleSubmit = (values) => {
    dispatch(
      register({
        username: values.username,
        first_name: values.firstName,
        last_name: values.lastName,
        email: values.email,
        password: values.password,
        confirm_password: values.confirmPassword,
      })
    )
      .then((action) => {
        if (action.payload.access && action.payload.refresh) {
          navigate("/sign-in");
        } else {
          setEmailErr(action.payload.email);
          setUsernameErr(action.payload.username);
        }
      })
      .catch((error) => {
        console.error("An error occurred during registration:", error);
      });
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center relative bg-main-black">
      <Link to={"/"}>
          <RiCloseLargeLine
            className="absolute top-5 right-5 cursor-pointer"
            color="red"
            size={30}
          />
        </Link>
      <Formik
        initialValues={{
          username: "",
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="p-10 bg-[#101010] rounded flex justify-center items-center flex-col shadow-2xl shadow-main-red">
            <p className="mb-5 text-3xl uppercase text-main-white">
              Регистрация
            </p>

            <div className="mb-5 w-80">
              <Field
                type="text"
                name="username"
                className="p-3 w-full focus:border-purple-700 rounded border-2 outline-none"
                placeholder="Имя пользователя"
              />
              <p className="text-main-red">{usernameErr}</p>
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="mb-5 w-80">
              <Field
                type="text"
                name="firstName"
                className="p-3 w-full focus:border-purple-700 rounded border-2 outline-none"
                placeholder="Имя"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="mb-5 w-80">
              <Field
                type="text"
                name="lastName"
                className="p-3 w-full focus:border-purple-700 rounded border-2 outline-none"
                placeholder="Фамилия"
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="mb-5 w-80">
              <Field
                type="email"
                name="email"
                className="p-3 w-full focus:border-purple-700 rounded border-2 outline-none"
                placeholder="Email"
              />
              <p className="text-main-red">{emailErr}</p>
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="mb-5 w-80">
              <Field
                type="password"
                name="password"
                className="p-3 w-full focus:border-purple-700 rounded border-2 outline-none"
                placeholder="Пароль"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="mb-5 w-80">
              <Field
                type="password"
                name="confirmPassword"
                className="p-3 w-full focus:border-purple-700 rounded border-2 outline-none"
                placeholder="Повтор пароля"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-red-500"
              />
            </div>

            <button
              type="submit"
              className="bg-main-red hover:bg-purple-900 text-white font-bold p-2 rounded w-80"
            >
              Регистрация
            </button>

            <a className="mt-2" href="/sign-in">
              <span className="text-main-white">Есть аккаунт? </span>
              <span className="text-main-red">Войдите</span>
            </a>
          </Form>
        )}
      </Formik>
    </div>
  );
}
