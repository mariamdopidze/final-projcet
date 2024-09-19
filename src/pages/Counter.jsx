import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../store/app/counter'
import CounterComponents from '../components/CounterComponets'

const Counter= ()=> {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button onClick={() => dispatch(increment())} className='bg-blue-500 text-white px-4 py-2 rounded-md'>Increment </button>
        <span className='px-5 text-xl'>{count}</span>
        <button onClick={() => dispatch(decrement())} className='bg-red-500 text-white px-4 py-2 rounded-md'>Decrement</button>
      </div>



      <CounterComponents/>
    </div>




  )
}
export default Counter