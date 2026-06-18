import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

const AuthPage = () => {
  const [login, setLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md mt-15 mb-10 sm:max-w-lg lg:max-w-xl 
        backdrop-blur-xl bg-white/5 border border-white/10 
        rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10 
        transition-all duration-300">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl 
          font-serif text-white text-center mb-2">
          {login ? "Welcome Back " : "Create Account "}
        </h2>

        <p className="text-gray-400 text-center mb-6 text-sm sm:text-base">
          {login
            ? "Login to continue your journey"
            : "Sign up to get started"}
        </p>
        <div className="flex bg-white/10 rounded-lg p-1 mb-6">
          <button
            onClick={() => setLogin(true)}
            className={`w-1/2 py-2 sm:py-3 rounded-md text-xs sm:text-sm font-semibold transition ${
              login
                ? "bg-blue-300 text-black shadow-md"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Login
          </button>

          <button
            onClick={() => setLogin(false)}
            className={`w-1/2 py-2 sm:py-3 rounded-md text-xs sm:text-sm font-semibold transition ${
              !login
                ? "bg-blue-300 text-black shadow-md"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Register
          </button>
        </div>
        <div className="transition-all duration-300">
          {login ? (
            <LoginForm setIsLogin={setLogin} />
          ) : (
            <RegisterForm setIsLogin={setLogin} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;