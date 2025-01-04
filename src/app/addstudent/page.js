"use client"
import {useState} from 'react'

const page = () => {
    const [email, setemail] = useState("");
    const [password, setpssword] = useState("");
    const apiurl = "https://next-js-demo-navy.vercel.app/api/";


    const addstudent = async () => {
        let result = await fetch(`${apiurl}/contractor`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });
    
        console.log("result", result);
    };
    
  return (
    <div>
        <input type='text' value={email} onChange={(e)=>setemail(e.target.value)} placeholder='Enter Email'/>
        <input type='password'value={password} onChange={(e)=>setpssword(e.target.value)}  placeholder='Enter Password'/>
        <button onClick={addstudent}>Add student</button>
    </div>
  )
}

export default page
