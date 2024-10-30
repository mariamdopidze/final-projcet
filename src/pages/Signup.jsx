import React from 'react'
import Discount from '../components/Discount'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Signup = () => {
  return (
    <div>
        <Discount />
        <Header />
        <div className="h-[160px] bg-[#F6F6F6] py-[40px]">
        <div className="  mx-auto max-w-[1116px] ">
          <h3 className="font-bold text-2xl">Sign up</h3>
          <div className="flex flex-row items-center mt-[8px] gap-2.5">
            <p className="text-sm  font-medium">Ecommerce</p>
            <img src="images/Chevron.png" alt="img" />
            <p className="text-sm  font-medium">Sign up</p>
          </div>
        </div>
      </div>

      <div className="w-full mx-auto  flex flex-col justify-center items-center   ">
        <div className="max-w-[1116px] mt-[128px]">
          <button className="rounded-[4px]  border-[4px] border-bg-[#B6B7BC] w-[320px] h-[44px] text-center flex flex-row items-center gap-[9px] pl-14">
            <img src="/images/Google.png" alt="" />
            Continue with Google
          </button>
          <div className="flex gap-3">
            <hr className="w-[136px] border bg-[#E6E7E8] mt-[32px]" />
            <p className="mt-[25px] font-medium text-xs">OR</p>
            <hr className="w-[140px] border bg-[#E6E7E8] mt-[32px]" />
          </div>

          <div class="mt-[34px]">
            <label
              for="default-input"
              class="block mb-2 text-sm font-medium  dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="default-input"
              class=" border border-[#E6E7E8] w-[320px] h-[45px] text-sm rounded-de focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div class="mt-[15px]">
            <label
              for="default-input"
              class="block mb-2 text-sm font-medium  dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="default-input"
              class="border border-[#E6E7E8]  w-[320px] h-[45px]  text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div class="mt-[15px]">
            <label
              for="default-input"
              class="block mb-2 text-sm font-medium  dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="default-input"
              class="border border-[#E6E7E8]  w-[320px] h-[45px]  text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <p className="font-medium text-xs mt-[16px] max-w-[318px]">
          By creating an account you agree with our Terms of Service, Privacy Policy,

          </p>
          <button className="bg-black w-[318px] h-[44px] mt-[24px] rounded text-white text-center font-medium text-sm">
          Create account
          </button>
          <a href='/login'>
          <p className="font-normal text-sm text-[#5C5F6A] mt-[24px] text-center">
          Already have an account? Log in
          </p>
          </a>
        </div>
      </div>
      <Footer />
      
    </div>
  )
}

export default Signup
