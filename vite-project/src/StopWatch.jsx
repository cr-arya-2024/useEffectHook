import { useState,useEffect } from 'react'

function  StopWatch(){
let [stopWatch,setStopWatch]=useState(0)
useEffect(()=>{
let timer=setInterval(()=>setStopWatch(stopWatch+1),1000)

return function () {
    clearInterval(timer)
}
},[stopWatch])

return(
<>
<h1>Stop Watch</h1>
<p>counter:{stopWatch}</p>
</>
)
}
export default StopWatch