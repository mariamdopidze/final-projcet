import React from 'react';

const Main = () => {
  return (
    <div className="mx-auto px-6 lg:px-8 bg-gray-200 w-full">
      <div className="flex flex-col lg:flex-row items-start justify-between mx-auto max-w-7xl pt-14">
        
        
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-bold tracking-tight text-black">Fresh Arrivals Online</h2>
          <p className="mt-6 text-lg leading-8 text-gray-800">Discover Our Newest Collection Today.</p>
          <button className="bg-black text-white rounded px-4 py-2 flex items-center">
            View Collection
            <img src='/images/arrow.png' className='ml-2 mt-1' alt="arrow"/>
          </button>
        </div>

        
        <div className="lg:w-1/2 relative flex justify-center lg:justify-end mt-8 lg:mt-0">
          
          <img 
            src="/images/Hero Image.png" alt="Product" className="absolute w-64 h-80 rounded-lg shadow-lg"/>
           <div className="w-80 h-80 bg-gray-400 rounded-full"></div>
           
        </div>

   
        
      </div>
      <div className="grid grid-rows-1 grid-flow-col gap-4 bg-white w-full">
  <div>
    <img src='/images/Icon 1.png'/>
    <h1>Free Shipping</h1>
    <p>Upgrade your style today and get FREE shipping on all orders! Don't miss out.</p>
  </div>
  
  <div>
  <img src='/images/Icon 2.png'/>
    <h6>Satisfaction Guarantee</h6>
    <p>Shop confidently with our Satisfaction Guarantee: Love it or get a refund.</p>

  </div>
  <div>
  <img src='/images/Icon 3.png'/>
    <h6>Secure Payment</h6>
  <p>Your security is our priority. Your payments are secure with us..</p></div>
</div>

      
    </div>
    
  );
}

export default Main;
