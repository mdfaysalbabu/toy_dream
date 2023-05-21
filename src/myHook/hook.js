import { useEffect } from "react"

const usePath=path=>{
    useEffect(()=>{
        document.title=`dreamCar | ${path}`
    },[path])
}

export default usePath;