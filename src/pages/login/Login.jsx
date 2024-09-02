import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../app/reducers/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { RiCloseLargeLine } from "react-icons/ri";

export default function Login() {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ username: userName, password })).then((action) => {
      if (action.payload) {
        localStorage.setItem("accessToken", action.payload);
        toast.success("Спасибо! Вы успешно зарегистрированы", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => {
          navigate("/role");
        }, 1500);
      } else {
        toast.error("Этот пользователь недоступен для системы", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        navigate("/sign-in");
      }
    });
  };

  return (
    <div>
      <div className="relative flex items-center justify-center w-screen h-screen bg-main-black">
        <Link to={"/"}>
          <RiCloseLargeLine
            className="absolute cursor-pointer top-5 right-5"
            color="red"
            size={30}
          />
        </Link>
        <form
          onSubmit={handleSubmit}
          className="md:w-[30%] w-[80%] py-10 px-6 bg-[#101010] rounded flex justify-center items-center flex-col shadow-2xl shadow-main-red"
        >
          <p className="mb-5 text-3xl uppercase text-main-white">Вход</p>
          <input
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            name="username"
            className="mb-5 md:p-3 p-2 w-[95%] focus:border-purple-700 rounded border-2 outline-none"
            placeholder="Имя пользователя"
            required
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            className="mb-5 md:p-3 p-2 w-[95%] focus:border-purple-700 rounded border-2 outline-none"
            placeholder="Пароль"
            required
          />
          <button
            className="bg-main-red text-white font-bold p-2 rounded w-[95%]"
            id="login"
            type="submit"
          >
            <span>Вход</span>
          </button>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}
