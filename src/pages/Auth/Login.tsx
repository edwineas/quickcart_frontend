import { TextField, Button } from '@mui/material'
import React from 'react'

function Login() {
    return (
        <>
            <div className='w-screen h-screen flex justify-center items-center'>
                <div className='flex flex-col w-[350px]'>
                    <h1 className='text-[33px] font-bold'>Login</h1>
                    <h4 className='font-medium text-[#959292] text-xs'>Welcome back. Please login your account</h4>
                    <TextField label="Username" variant="outlined" />
                    <TextField label="Password" variant="outlined" />
                    <h4 className='font-medium text- [#959292] text-[10px]'>Forget Password</h4>
                    <Button variant="contained" className='w-full' sx={{ background: "#435BDA" }}>Login</Button>
                    <h4 className='font-medium text-[10.5px] text- [#565656]'>By clicking on Login, I accept the Terms & Conditions & Privacy Policy</h4>
                    <h4>New User? <a href="/register">Register</a></h4>
                </div>
            </div>
        </>
    )
}

export default Login