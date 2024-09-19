import React from 'react'
import { useSelector,} from 'react-redux'

const CounterComponents =()=>{
    const count = useSelector((state) => state.counter.value)


    return(
        <div>
            <h1>Counter Component{count}</h1>
        </div>
    )
}
export default CounterComponents