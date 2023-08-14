import React from 'react'

const Contact = () => {
  return (
    <div name='Contact' className='w-full h-full bg-gradient-to-b from-black to-gray-800 p-4 text-white'>

        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='p-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>Contact</p>
                <p className='py-6'>Submit the from below to get in touch with me</p>  
            </div>
            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/3396471b-3f72-4b75-b41a-cf2cecf1bf98" 
                method='POST'
                className='flex flex-col w-full md:w-1/2'>

                    <input type="text" name='name' placeholder='Enter your Name' className='p-2
                    bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                      <input type="text" name='email' placeholder='Enter your Email' className='p-2
                   my-4 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <textarea name="message" rows="10" placeholder='Enter Message' className='p-2
                    bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                    <button className='text-white bg-gradient-to-b from-cyan-300 to-blue-600 
                    px-6 py-3 my-8 mx-auto flex item-center rounded-md hover:scale-110 duration-300'>Let's talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact