import React,{useState} from "react"



const UserInfo=()=>{
    const [email,setEmail]=useState("")
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [newPassword,setNewPassword]=useState("")
    const [newPasswordConfirm,setNewPasswordConfirm]=useState("")


    const onEmailChange=(e)=>{
         setEmail(e.target.value)
    }
    const onUsernameChange=(e)=>{
        setUsername(e.target.value)

    }
    const onPasswordChange=(e)=>{
        setPassword(e.target.value)
        
    }
    const onNewPasswordChange=(e)=>{
        setNewPassword(e.target.value)


    }
    const onNewPasswordConfirmChange=(e)=>{
        setNewPasswordConfirm(e.target.newPassword)
    }

    const onApplyChangesClick=(e)=>{
           e.preventDefault()
    }
    return (
        <>
        <div>
          <form onSubmit={onApplyChangesClick} className="custom-form">
                         
                         <div className="input-container">
                             <label className="form-label">ایمیل</label>
                             <input required onChange={onEmailChange} value={email} type="email" className="form-input" />
                         </div> 
                         <div className="input-container">
                             <label className="form-label">نام کاربری</label>
                             <input required onChange={onUsernameChange} value={username} type="text" className="form-input" />
                         </div>
                            <div className="input-container">
                             <label className="form-label">پسورد</label>
                             <input required onChange={onPasswordChange} value={password} type="text" className="form-input" />
                         </div>
                         <div className="input-container">
                             <label className="form-label">پسورد جدید</label>
                             <input required onChange={onNewPasswordChange} value={newPassword} type="password" className="form-input" />
                         </div>
                         <div className="input-container">
                             <label className="form-label">تکرار پسورد جدید</label>
                             <input required onChange={onNewPasswordConfirmChange} value={newPasswordConfirm} type="password" className="form-input" />
                         </div>
                           <button  className="form-btn">ذخیره تغییرات</button>
           </form>
        </div>
         
        </>
    )
}


export default UserInfo