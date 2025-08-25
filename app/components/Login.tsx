"use client"
import React from 'react'
import { login } from '@/lib/actions/auth'

function Login(){
  return (
    <div>
        <h1>Login With GitHub</h1>
        <button onClick={()=>{login()}}>
            Click Here
        </button>
     </div>
  )
}

export default Login