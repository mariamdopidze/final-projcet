import React from 'react'
import Discount from '../components/Discount'
import Header from '../components/Header'

const ProductList = () => {
  return (
    <div >
      <Discount/>
      <Header/>
<div className='bg-white'>
  <div  className="flex items-center mx-auto max-w-[1116px]" >
      <p className='font-medium text-sm'>Ecommerce  </p>
     

  </div>

  <div className=" bg-white rounded mx-auto max-w-[1116px]">
    <div className='flex justify-between justify-items-center'>
    <div className='w-[534px] h-[574px] bg-neutral-100'>
        <img src='/images/t-shirt-4.png' className='mx-auto pt-20 w-[288px] h-[404px]'/>
   </div>
   <div className='flex justify-items-center mr-24 w-[438] h-[562px]'>
    <h3 className='font-bold text-2xl'>Raw Black T-Shirt Lineup</h3>
    <img src='/images/Vector.png' className='w-[16px] h-[18px] mt-3 ml-24'/>
   </div>
   </div>
      </div>
</div>




    </div>
  )
}

export default ProductList
