// import React, { useContext, useEffect, useState } from 'react'
// import Login from './components/Auth/Login'

// import { AuthContext } from './context/AuthProvider'
// import EmployeeDashboard from './components/Dashbord/EmployeeDashboard'
// import AdminDashboard from './components/Dashbord/AdminDashboard'
// const App = () => {

//   const [user, setUser] = useState(null)
//   const [loggedInUserData, setLoggedInUserData] = useState(null)
//   const [userData,SetUserData] = useContext(AuthContext)

//   useEffect(()=>{
//     const loggedInUser = localStorage.getItem('loggedInUser')

//     if(loggedInUser){
//       const userData = JSON.parse(loggedInUser)
//       setUser(userData.role)
//       setLoggedInUserData(userData.data)
//     }

//   },[])


//   const handleLogin = (email, password) => {
//     if (email == 'admin@me.com' && password == '123') {
//       setUser('admin')
//       localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
//     } else if (userData) {
//       const employee = userData.find((e) => email == e.email && e.password == password)
//       if (employee) {
//         setUser('employee')
//         setLoggedInUserData(employee)
//         localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee',data:employee }))
//       }
//     }
//     else {
//       alert("Invalid Credentials")
//     }
//   }



//   return (
//     <>
//       {!user ? <Login handleLogin={handleLogin} /> : ''}
//       {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null) }
//     </>
//   )
// }

// export default App


import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from './context/AuthProvider'
import Login from './components/Auth/Login'
import AdminDashboard from './components/Dashbord/AdminDashboard'
import EmployeeDashboard from './components/Dashbord/EmployeeDashboard'
import { getLocalStorage } from './utils/LocalStorage'



const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setloggedInUserData] = useState(null)
  const [authData, setAuthData] = useContext(AuthContext)

  // this line needs to be rewritten everytime the page refreshes else it gives error of type (Cannot read properties of null (reading 'employees')) every error lies in this line
  console.log(authData)

 useEffect(() => {
  const loggedInUser = localStorage.getItem("loggedInUser")
       if (loggedInUser) {
        const [userData, setUserData] = JSON.parse(loggedInUser)
              setUser(userData.role)
              setloggedInUserData(userData.data)
      }
}, [])
 



  const LoginHandler = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
      console.log("admin logged")
    } else if (authData) {
      const employee = authData.employees.find((e) => email == e.email && e.password == password)
      if (employee) {
        setUser('employee')
        setloggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee',data:employee }))
      }
      console.log("employee logged")
    } else {
      alert("Invalid credentials")
    }

  }
  return (
    <>
      {!user ? <Login LoginHandler={LoginHandler} /> : ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard data={loggedInUserData}
      /> : null)}
    </>
  )
}

export default App