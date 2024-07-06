//arrow function
//normal function
//jsx components can written with arrow function as well as normal function

import { useState } from "react"

//valid component what return type ? JSX.Element
//data rendering

 const ValidArrowFunction = ():JSX.Element => {
    //react hooks - important concepts
    //useState
    const [data,setData]=useState<number >(0)

    const onIncreament = () =>{
        console.log("increament clicked")
        const increasedData=data+1
        setData(increasedData)
    }

    const onDecreament = () => {
        console.log("decreament clicked")
        const decreasedData= data-1
        setData(decreasedData)
    }

    return <div>
        <div style={{marginLeft:'500px',marginTop:'300px',display:'flex'}}>
        <button onClick={()=>onIncreament()} style={{marginRight:'30px'}}>+</button>
        <div>{data}</div>
        <button onClick={()=>onDecreament()} style={{marginLeft:'30px'}}>-</button>
        </div>
    </div>
}

export default ValidArrowFunction


//1. check if the component is valid, return jsx.element
//2. check if the component is exported
