import React from 'react'
import Header from '../pageComponents/Header'
import CreateTask from '../pageComponents/CreateTask'
import AllTask from '../pageComponents/AllTask'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-14'>
        <Header />

        <CreateTask />
        <AllTask />
    </div>
  )
}

export default AdminDashboard