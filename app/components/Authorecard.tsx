
import React from 'react'

export default function Authorecard() {
  return (
    <div className='bg-white shadow-lg rounded-lg p-6 mt-12'>
      <div className='flex items-center animation-fade-In'>

          <img className='w-20 h-20 rounded-full mr-4 obkect-cover border-2 border-red-500'
           src='../images/author.jpeg'
           alt='Author Image'
           />

           <div>
            <h3 className='text-xl font-bold'> Nabeera </h3>
            <p className='text-gray-500'>Software Engineer | Web developer</p>
           </div>
      </div>
       
       <p className='mt-4 text-gray-700'> I am skilled in web development and currently pursuing a career as a software engineer.
</p>

<div className='mt-4 flex space-x-3'>
        <a
          href='#'
          className='px-4 py-2 text-white bg-blue-400 rounded-md hover:bg-blue-600 transition duration-300'
        >
          Twitter
        </a>
        <a
          href='#'
          className='px-4 py-2 text-white bg-blue-400 rounded-md hover:bg-blue-600 transition duration-300'
        >
          LinkedIn
        </a>
        <a
          href='#'
          className='px-4 py-2 text-white bg-blue-400 rounded-md hover:bg-blue-600 transition duration-300'
        >
          YouTube
        </a>
      </div>

    </div>
  )
}
