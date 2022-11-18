import React,{useState} from "react";

import "./style.css"

const SignUpSignIn=()=>{
    const [username,setUsername]=useState("")
    const [registerEmail,setRegisterEmail]=useState("")
    const [registerPassword,setRegisterPassword]=useState("")
    const [confirmPassword,setConfirmPassword]=useState("")

    const [loginEmail,setLoginEmail]=useState("")
    const [loginPassword,setLoginPassword]=useState("")

    const onUsernameChange =(e)=>{
        setUsername(e.target.value)
    }
    const onRegisterEmailChange=(e)=>{
          setRegisterEmail(e.target.value)
    }

    const onRegisterPasswordChange=(e)=>{
         setRegisterPassword(e.target.value)
    }

    const onConfirmPasswordChange=(e)=>{
         setConfirmPassword(e.target.value)
    }

    const onLoginEmailChange=(e)=>{
       setLoginEmail(e.target.value)
    }

    const onLoginPasswordChange=(e)=>{
         setLoginPassword(e.target.value)
    }

    const onLoginSubmit=(e)=>{
        e.preventDefault()
    }

    const onRegisterSubmit=(e)=>{
        e.preventDefault()
    }
   
    return (
        <>
          <div className="forms-container">
            <div className="form-container">

                <div className="form-header">
                    <h3>ثبت نام</h3>
                  
                </div>
                <form onSubmit={onRegisterSubmit}  className="custom-form">
                        <div className="input-container">
                            <label className="form-label">نام کاربری</label>
                            <input  required onChange={onUsernameChange} value={username} type="text" className="form-input" />
                        </div>
                        <div className="input-container">
                            <label className="form-label">ایمیل</label>
                            <input required onChange={onRegisterEmailChange} value={registerEmail} type="email" className="form-input" />
                        </div>
                        <div className="input-container">
                            <label className="form-label">پسورد</label>
                            <input required onChange={onRegisterPasswordChange} value={registerPassword} type="password" className="form-input" />
                        </div>
                        <div className="input-container">
                            <label className="form-label">تایید پسورد</label>
                            <input required  onChange={onConfirmPasswordChange} value={confirmPassword} type="password" className="form-input" />
                        </div>
                        <button  className="form-btn">ثبت نام</button>
                    </form>
            </div>
            <div className="form-container">
            <div >
                    <h3 className="form-header">ورود</h3>
                </div>
                <form onSubmit={onLoginSubmit} className="custom-form">
                         
                        <div className="input-container">
                            <label className="form-label">ایمیل</label>
                            <input required onChange={onLoginEmailChange} value={loginEmail} type="email" className="form-input" />
                        </div>
                        <div className="input-container">
                            <label className="form-label">پسورد</label>
                            <input required onChange={onLoginPasswordChange} value={loginPassword} type="password" className="form-input" />
                        </div>
                          <button  className="form-btn">ورود</button>
                    </form>
            </div>
          </div>
        </>
    )
}



export default SignUpSignIn