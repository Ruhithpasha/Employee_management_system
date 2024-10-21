import React, { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashbord/EmployeeDashboard'
import AdminDashboard from './components/Dashbord/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'

const App = () => {

  const [user, setUser] = useState(null)

  const LoginHandler=(email,password)=>{
     
    if(email =='admin@me.com' && password =='123'){
      setUser('admin')
    }else if (email=='user@me.com' && password=='123') {
      setUser('user')
    }else{
       alert("Invalid Credentials")
    }
  }

   
  
  return (
<>

{!user ? <Login LoginHandler={LoginHandler} />:''}

{user == 'admin' ? <AdminDashboard/> : <EmployeeDashboard/>}


</>
  )
}

export default App