import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../app/reducers/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { RiCloseLargeLine } from "react-icons/ri";

const validationSchema = Yup.object({
  username: Yup.string()
    .required("Имя пользователя обязательно")
    .matches(/^[a-zA-Z0-9]+$/, "Имя пользователя может содержать только буквы и цифры."),
  firstName: Yup.string().required("Имя обязательно"),
  lastName: Yup.string().required("Фамилия обязательна"),
  email: Yup.string()
    .email("Неверный адрес электронной почты")
    .required("Требуется адрес электронной почты"),
  password: Yup.string()
    .required("Требуется пароль")
    .min(8, "Пароль должен содержать не менее 8 символов."),
  confirmPassword: Yup.string()
    .required("Требуется подтверждение пароля")
    .oneOf([Yup.ref("пароль"), null], "Пароли должны совпадать"),
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
          <Form className="md:w-[40%] w-[70%] h-[85%] py-5 md:px-5 px-2 bg-[#101010] rounded flex justify-center items-center flex-col shadow-2xl shadow-main-red ">
            <p className="mb-3 text-[clamp(16px,3vw,28px)] uppercase text-main-white">
              Регистрация
            </p>

            <div className="mb-3 w-[90%]">
              <Field
                type="text"
                name="username"
                className="md:p-3 p-2 w-full focus:border-purple-700 rounded border-2 outline-none"
                placeholder="Имя пользователя"
              />
              <p className="text-main-red">{usernameErr}</p>
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-500 text-[10px]"
              />
            </div>

            <div className="mb-3 w-[90%]">
              <Field
                type="text"
                name="firstName"
                className="md:p-3 p-2 w-full focus:border-purple-700 rounded border-2 outline-none"
                placeholder="Имя"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-red-500 text-[10px]"
              />
            </div>

            <div className="mb-3 w-[90%]">
              <Field
                type="text"
                name="lastName"
                className="md:p-3 p-2 w-full focus:border-purple-700 rounded border-2 outline-none"
                placeholder="Фамилия"
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-red-500 text-[10px]"
              />
            </div>

            <div className="mb-3 w-[90%]">
              <Field
                type="email"
                name="email"
                className="md:p-3 p-2 w-full focus:border-purple-700 rounded border-2 outline-none"
                placeholder="Email"
              />
              <p className="text-main-red">{emailErr}</p>
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-[10px]"
              />
            </div>

            <div className="mb-3 w-[90%]">
              <Field
                type="password"
                name="password"
                className="md:p-3 p-2 w-full focus:border-purple-700 rounded border-2 outline-none"
                placeholder="Пароль"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-[10px]"
              />
            </div>

            <div className="mb-3 w-[90%]">
              <Field
                type="password"
                name="confirmPassword"
                className="md:p-3 p-2 w-full focus:border-purple-700 rounded border-2 outline-none"
                placeholder="Повтор пароля"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-red-500 text-[10px]"
              />
            </div>

            <button
              type="submit"
              className="bg-main-red text-white font-bold p-2 rounded w-[90%]"
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
