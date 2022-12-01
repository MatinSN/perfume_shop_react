import React,{useRef,useEffect} from "react"


const OutsideClick=({children,onOutsideClick})=>{

    const ref = useRef(null)

    const handleClickOutside = (event)=>{
        if(ref.current && !ref.current.contains(event.target)){
            onOutsideClick && onOutsideClick()
        }
    }

    useEffect(()=>{
        document.addEventListener("click",handleClickOutside,true)

        return ()=>{
            document.removeEventListener("click",handleClickOutside,true)
        }
    },[])
     
    if(!children){
        return null
    }
    return (
        <>
        <div ref={ref}>
            {children}
        </div>
        </>
    )
}



export default OutsideClick