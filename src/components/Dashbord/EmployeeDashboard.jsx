import React from 'react'
import Header from '../pageComponents/Header'
import TaskListNumber from '../pageComponents/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({data}) => {
  // console.log(data) 
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      {/* <h1>{data.id}</h1> */}
        <Header data={data} />
        <TaskListNumber data={data}/>
        <TaskList data={data} />
    </div>
  )
}

export default EmployeeDashboard