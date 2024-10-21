import React from 'react'

const TaskList = () => {
  return ( 
    <div id='tasklist' className='overflow-x-auto h-[55%] w-full mt-10 rounded-md py-5 flex items-center justify-start gap-6'>
        <div className=' flex-shrink-0 w-[333.5px] h-full bg-yellow-500 rounded-lg p-8 '>
                <div className='flex items-center justify-between'>
                    <h1 className='bg-red-500 rounded-md px-1 font-semibold '>High</h1>
                    <h3 className='font-semibold text-sm' >20 OCT 2024</h3>
                </div>
                <h1 className='mt-5 text-2xl font-bold'>Complete this Website within 2 days</h1>
                <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eum doloribus aperiam? Delectus quam cumque veniam asperiores placeat minima unde.</p>
        </div>
        <div className=' flex-shrink-0 w-[333.5px] h-full bg-red-500 rounded-lg p-8 '>
                <div className='flex items-center justify-between'>
                    <h1 className='bg-red-500 rounded-md px-1 font-semibold '>High</h1>
                    <h3 className='font-semibold text-sm' >20 OCT 2024</h3>
                </div>
                <h1 className='mt-5 text-2xl font-bold'>Complete this Website within 2 days</h1>
                <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eum doloribus aperiam? Delectus quam cumque veniam asperiores placeat minima unde.</p>
        </div>
        <div className=' flex-shrink-0 w-[333.5px] h-full bg-green-500 rounded-lg p-8 '>
                <div className='flex items-center justify-between'>
                    <h1 className='bg-red-500 rounded-md px-1 font-semibold '>High</h1>
                    <h3 className='font-semibold text-sm' >20 OCT 2024</h3>
                </div>
                <h1 className='mt-5 text-2xl font-bold'>Complete this Website within 2 days</h1>
                <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eum doloribus aperiam? Delectus quam cumque veniam asperiores placeat minima unde.</p>
        </div>
        <div className=' flex-shrink-0 w-[333.5px] h-full bg-cyan-500 rounded-lg p-8 '>
                <div className='flex items-center justify-between'>
                    <h1 className='bg-red-500 rounded-md px-1 font-semibold '>High</h1>
                    <h3 className='font-semibold text-sm' >20 OCT 2024</h3>
                </div>
                <h1 className='mt-5 text-2xl font-bold'>Complete this Website within 2 days</h1>
                <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eum doloribus aperiam? Delectus quam cumque veniam asperiores placeat minima unde.</p>
        </div>
       
       
       

    </div>
  )
}

export default TaskList