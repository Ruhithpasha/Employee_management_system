import React, { useState } from 'react'

const Login = ({LoginHandler}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const SubmitHandler = (e) => {

    e.preventDefault()
    console.log("Email is", email)
    console.log("password is", password)
    setEmail("")
    setPassword("")
       LoginHandler(email,password)
  }



  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-emerald-300  rounded-xl border-2 p-16'>
        <form
          onSubmit={(e) => {
            SubmitHandler(e)

          }}
          className='flex flex-col items-center justify-center '>
          <input
            required
            type="email" placeholder='Enter your email'
            value={email}
            className='text-center rounded-full text-white p-2 bg-transparent outline-none text-ce placeholder:text-gray-400 border-emerald-300 border-2'
            onChange={(e) => {
              setEmail(e.target.value)
            }} />
          <input
            required
            type="password" placeholder='Enter your password'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            className='text-center rounded-full text-white outline-none p-2 bg-transparent placeholder:text-gray-400 border-emerald-300 border-2 mt-3' />
          <button

            className='bg-emerald-700 mt-3 rounded-full text-white px-4 py-2'>Log in</button>

        </form>

      </div>

    </div>
  )
}

export default Login