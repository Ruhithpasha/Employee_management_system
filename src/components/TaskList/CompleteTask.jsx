import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className=' flex-shrink-0 w-[333.5px] h-full bg-green-500 rounded-lg p-8 '>
                <div className='flex items-center justify-between'>
                    <h1 className='bg-red-500 rounded-md px-1 font-semibold '>High</h1>
                    <h3 className='font-semibold text-sm' >20 OCT 2024</h3>
                </div>
                <h1 className='mt-5 text-2xl font-bold'>{data.taskTitle}</h1>
                <p className='mt-2'>{data.taskDescription}</p>

                <button className="px-4 py-1 text-sm mt-2 mr-2 text-white bg-blue-500 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">
           Complete
        </button>
        </div>
  )
}

export default CompleteTask