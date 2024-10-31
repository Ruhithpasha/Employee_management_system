// // import React, { createContext } from 'react'

// // export  const AuthContext = createContext()
// // const AuthProvider = ({children}) => {

// //   return (
// //     <div>
// //          <AuthContext.Provider value={"Ruhith"}>
// //               {children}
// //          </AuthContext.Provider>
// //     </div>
// //   )
// // }

// // export default AuthProvider

// import React, { createContext, useEffect, useState } from 'react'
// import { getLocalStorage } from '../utils/LocalStorage'


// export const AuthContext = createContext()
// const AuthProvider = ({ children }) => {



// const [userData, setuserData] = useState(null)

// useEffect(() => {
//  const {employee,admin} = getLocalStorage()
//  setuserData(employee,admin)
 
//  return () => {
//    userData
//    console.log(userData)
//   }
// }, [])



//   return (
//     <div>
//       <AuthContext.Provider value={userData}>
//         {children}
//       </AuthContext.Provider>
//     </div>
//   )
// }

// export default AuthProvider








import React, { createContext, useState, useEffect } from 'react';
import { getLocalStorage } from '../utils/LocalStorage';

// Create the AuthContext
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const { employees, admin } = getLocalStorage();
    // const {employees}  = getLocalStorage();
    // const {admin} = getLocalStorage();
   
    setUserData({ employees, admin }); // Assuming you want to set both employee and admin
    return () => {
      
      console.log(userData);
    };
  }, []);



  







  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;