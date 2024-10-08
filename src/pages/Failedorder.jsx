import React from 'react'
import Discount from '../components/Discount'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Failedorder = () => {
  return (
    <div>
        <Discount />
      <Header />

      <div className="h-[160px] bg-[#FBD9D0] py-[40px]">
        <div className="  mx-auto max-w-[1116px] ">
          <h3 className="font-bold text-2xl">Failed Order</h3>
          <div className="flex flex-row items-center mt-[8px] gap-2.5">
            <p className="text-sm  font-medium">Ecommerce</p>
            <img src="images/Chevron.png" alt="img" />
            <p className="text-sm  font-medium">Failed Order</p>
          </div>
        </div>
      </div>

      <div className="w-full mx-auto  flex flex-col justify-center items-center  text-center ">
        <div className="max-w-[1116px] flex flex-col items-center mt-[160px]">
          <img src="/images/Illustration.png" alt="img " />
          <h3 className="font-bold text-2xl">Oops! There was an issue</h3>
          <p className="max-w-[379px] font-normal text-sm mt-[16px]">
          Oops! There was a problem processing your order. Please review the details and try again.
          </p>
          <button className="bg-[#0E1422] w-[132px] h-[44px] text-white rounder-[4px font-medium text-sm mt-[48px] flex flex-row items-center gap-[9px] pl-7">
          Reorder
            <img src="/images/arrow.png" alt="img" className="mt-1" />
          </button>
        </div>
      </div>
      <Footer />
      
    </div>
  )
}

export default Failedorder
