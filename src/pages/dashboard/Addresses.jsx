import { TextField } from "@mui/material"
import React,{useState,useEffect} from "react"
import { useSelector } from "react-redux"



const Addresses=({grabData=false,onGrabData=()=>{}})=>{
    const [name,setName]=useState("")
    const [lastName,setLastName]=useState("")
    const [state,setState]=useState("")
    const [city,setCity]=useState("")
    const [address,setAddress]=useState("")
    const [number,setNumber] = useState("")
    const addressError = useSelector((state)=>state.app.addressError)

    useEffect(()=>{
          if(grabData){
            onGrabData(name,lastName,state,city,number,address)
          }
    },[grabData])
     
    const onNumberChange=(e)=>{
        setNumber(e.target.value)
    }

    const onNameChange=(e)=>{
        setName(e.target.value)
    }
    const onLastNameChange=(e)=>{
        setLastName(e.target.value)

    }
    const onStateChange=(e)=>{
        setState(e.target.value)
        
    }
    const onCityChange=(e)=>{
        setCity(e.target.value)


    }
    const onAddressChange=(e)=>{
        setAddress(e.target.value)
    }

    const onApplyChangesClick=(e)=>{
           e.preventDefault()
    }
    return (
        <>
        <div>
            {addressError && <div className="error"><h4>{addressError}</h4></div>}
            
          <form onSubmit={onApplyChangesClick} className="custom-form">
                         
                         <div className="input-container">
                             <label className="form-label">نام</label>
                             <input required onChange={onNameChange} value={name} type="email" className="form-input" />
                         </div> 
                         <div className="input-container">
                             <label className="form-label">نام خانوادگی</label>
                             <input required onChange={onLastNameChange} value={lastName} type="text" className="form-input" />
                         </div>
                            <div className="input-container">
                             <label className="form-label">استان</label>
                             <input required onChange={onStateChange} value={state} type="text" className="form-input" />
                         </div>
                         <div className="input-container">
                             <label className="form-label"> شهر</label>
                             <input required onChange={onCityChange } value={city} type="text" className="form-input" />
                         </div>
                         <div className="input-container">
                             <label className="form-label"> شماره تماس</label>
                             <input required onChange={onNumberChange } value={number} type="number" className="form-input" />
                         </div>
                         <div className="input-container">
                             <label className="form-label">آدرس</label>
                             <textarea required onChange={onAddressChange } value={address}  className="form-input address">  </textarea>
                       

                         </div>
                         
                           <button  className="form-btn">ذخیره </button>
           </form>
        </div>
         
        </>
    )
}


export default Addresses