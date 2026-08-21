import React from 'react'

function Page() {
  return (
    <div className="h-screen bg-[url('/herobg-light.png')] dark:bg-[url('/herobg.png')]  bg-cover bg-center bg-no-repeat">
     <div className='flex h-[50%] justify-around items-center'>
        <p className='font-black text-5xl'>Hey there Name</p>
        <p>Messages</p>
      </div> 
    </div>
  )
}

export default Page