import React, { useState } from 'react';



const SignUp = () => {

    const [f_name,setF_name]=useState('');
    const [l_name,setL_name]=useState('');
    const [email,setEmail]=useState('');
    const [mobile_no,setMobile_no]=useState('');
    const [role,setRole]=useState('');

    return (
    <div>
        <h1 className='text-success'>Sign-Up Form</h1>
        <form>
            <div>
                <div className="m-2 p-2 ">
                    <input className="" onChange={(e)=>{setF_name(e.target.value)}} type="text" value={f_name} placeholder='Enter First Name'></input>
                </div>
                <div className="m-2 p-2 ">
                    <input className="" onChange={(e)=>{setL_name(e.target.value)}} type="text" value={l_name} placeholder='Enter Last Name'></input>
                </div>
                <div className="m-2 p-2 ">
                    <input className="" onChange={(e)=>{setEmail(e.target.value)}} type="mailTo" value={email} placeholder='Enter email '></input>
                </div>
                <div className="m-2 p-2 ">
                    <input className="" onChange={(e)=>{setMobile_no(e.target.value)}} type="phone" value={mobile_no} placeholder='Enter mobile number'></input>
                </div>
                <div className="m-2 p-2 ">
                    <input className="" onChange={(e)=>{setRole(e.target.value)}} type="text" value={role} placeholder='Enter Role'></input>
                </div>

            </div>
            
        </form>
    </div>
  )
}

export default SignUp;

