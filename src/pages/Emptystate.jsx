import React from 'react'
import Discount from '../components/Discount'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Emptystate = () => {
    const menu = [
        {
          icon: "Cart.png",
          title: "Order",
        },
        {
          icon: "Heart.png",
          title: "Wishlist",
        },
        {
          icon: "Vector (2).png",
          title: "Address",
        },
        {
          icon: "Key.png",
          title: "Password",
        },
        {
          icon: "User (1).png",
          title: "Account Detail",
        },
        {
          icon: "Logout.png",
          title: "Logout",
        },
      ];
      
  return (
    <div>
      <Discount />
      <Header />
      <div className="h-[160px] bg-[#F6F6F6] py-[40px]">
        <div className="  mx-auto max-w-[1116px] ">
          <h3 className="font-bold text-2xl">My Account</h3>
          <div className="flex flex-row items-center mt-[8px] gap-2.5">
            <p className="text-sm  font-medium">Ecommerce</p>
            <img src="images/Chevron.png" alt="img" />
            <p className="text-sm  font-medium">My Account</p>
          </div>
        </div>


        
      <div className="w-full">
        <div className="max-w-[1116px] mx-auto  flex  justify-start">
        <div className="w-[212px] mt-[120px]">
            {menu.map((item, key) => (
              <button className="block my-2 w-full hover:bg-gray-300 rounded-lg transition-all duration-300 text-start px-3">
                <img
                  src={`/images/${item.icon}`}
                  className="inline py-3"
                  alt="img"
                />
                <span className="ml-2">{item.title}</span>
              </button>
            ))}
          </div >

          <hr className="w-[1px] h-[504px] bg-[#E6E7E8] mt-[60px] ml-[36px]" />
          <div className="  flex flex-col  ">
          <img src="/images/empty.png" alt="" className='w-[64px] h-[64px] mt-[205px] ml-[384px]'/>
          <span className='mt-[24px] ml-[280px] font-normal text-sm'>Your order history is waiting to be filled.</span>
          <button className='w-[179px] h-[44px] bg-black text-white text-center font-medium text-sm rounded mt-[24px] ml-[327px]'>Start Shopping</button>

          </div>

</div>


        </div>
        <Footer/>
      </div>



      
    </div>
  )
}

export default Emptystate
