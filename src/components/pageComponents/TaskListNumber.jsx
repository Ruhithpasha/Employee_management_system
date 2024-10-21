import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen  '>
        <div className='bg-red-500 rounded-xl py-6 px-9 w-[45%]'>
             <h1 className='text-3xl font-semibold'>0</h1>
             <h2 className='text-xl font-medium'>New task</h2>
        </div>
        <div className='bg-emerald-500 rounded-xl py-6 px-9 w-[45%]'>
             <h1 className='text-3xl font-semibold'>0</h1>
             <h2 className='text-xl font-medium'>New task</h2>
        </div>
        <div className='bg-blue-500 rounded-xl py-6 px-9 w-[45%]'>
             <h1 className='text-3xl font-semibold'>0</h1>
             <h2 className='text-xl font-medium'>New task</h2>
        </div>
        <div className='bg-yellow-500 rounded-xl py-6 px-9 w-[45%]'>
             <h1 className='text-3xl font-semibold'>0</h1>
             <h2 className='text-xl font-medium'>New task</h2>
        </div>

    </div>
  )
}

export default TaskListNumber