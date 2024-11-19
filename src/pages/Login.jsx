import React, { useState } from "react";
import Discount from "../components/Discount";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cookies from "js-cookie";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitForm = (e) => {
    e.preventDefault();
    setIsLoading(true);

    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userName,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        Cookies.set("AccessToken", json.token);
        setIsLoading(false);
        alert("წარმატებულია");
      })
      .catch((err) => {
        console.log(err);

        alert("მომხმარებელი ვერ მოიძებნა");
        setIsLoading(false);
      });
  };

  const onUserName = (e) => {
    setUserName(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div>
      <Discount />
      <Header />
      <div className="h-[160px] bg-[#F6F6F6] py-[40px]">
        <div className="  mx-auto max-w-[1116px] ">
          <h3 className="font-bold text-2xl">Login</h3>
          <div className="flex flex-row items-center mt-[8px] gap-2.5">
            <p className="text-sm  font-medium">Ecommerce</p>
            <img src="images/Chevron.png" alt="img" />
            <p className="text-sm  font-medium">Login</p>
          </div>
        </div>
      </div>

      <div className="w-full mx-auto  flex flex-col justify-center items-center   ">
        <div className="max-w-[1116px] mt-[128px]">
          <form onSubmit={onSubmitForm}>
            <button className="rounded-[4px]  border-[4px] border-bg-[#B6B7BC] w-[320px] h-[44px] text-center flex flex-row items-center gap-[9px] pl-14">
              <img src="/images/Google.png" alt="" />
              Continue with Google
            </button>
            <div className="flex gap-3">
              <hr className="w-[136px] border bg-[#E6E7E8] mt-[32px]" />
              <p className="mt-[25px] font-medium text-xs">OR</p>
              <hr className="w-[140px] border bg-[#E6E7E8] mt-[32px]" />
            </div>

            <div className="mt-[34px]">
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium  dark:text-white"
              >
                UserName
              </label>
              <input
                onChange={onUserName}
                type="text"
                className=" border border-[#E6E7E8] w-[320px] h-[45px] text-sm rounded-de focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <div className="mt-[15px]">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium  dark:text-white"
              >
                Password
              </label>
              <input
                onChange={onPasswordChange}
                type="password"
                className="border border-[#E6E7E8]  w-[320px] h-[45px]  text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <a href="/password">
              <p className="font-medium text-xs mt-[16px] text-right">
                Forgot Password?
              </p>
            </a>
            <button
              type="submit"
              className="bg-black w-[318px] h-[44px] mt-[24px] rounded text-white text-center font-medium text-sm"
            >
              {isLoading ? "Loading..." : "Login"}
            </button>
            < a href="/signup">
            <p className="font-normal text-sm text-[#5C5F6A] mt-[24px] text-center">
              Don't have an account? Sign up
            </p>
            </a>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
