import React from 'react'

export default function Feature() {
  return (
    <div>
      <section className='py-8 bg-neutral-100 mb-40'>
        <h2 className='text-center text-3xl font-bold md:text-5xl lg:text-left animate-fade-in-up transition-all suration-500 transform hover:translate-y-[-5px] hover:text-black text-red-600'>Nabeera : Navigation the secrets of Technology Tech Chronicles Blog!</h2>

        <p className='text-center m-4 mt-4 text-black sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up delay-100'>Nabeera is a skilled web developer with a strong command of modern technologies and frameworks. She excels in creating responsive, user-friendly, and visually appealing websites. Her dedication to coding and passion for innovative designs make her an exceptional developer. Nabeera’s proficiency in web development empowers her to transform ideas into fully functional web applications.</p>

        <div className='mx-auto max-w-7xl px-5'>
          <h1 className='text-3xl font-bold text-center my-8 text-red-600 animate-color-change'> Exploring Our Categories </h1>

          <div className='grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100'>

            {[
              "Technology",
              "Artificial Intelligence",
              "HTML",
              "Virtual Reality",
              "Next js",
              "Web Development",
            ].map((category, index) => (
              <div key={index}
                className='relative group p-6 bg-white rounded-lg shadow-lg hover:bg-sky-300 hover:text-black transition duartion-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center text-neutral-600'>
                <p className='text-center text-lg font-semibold'>{category}</p>

                <div className='absolute inset-0 border-2 border-transparent group-hover:border-white rounded-lg transition duration-300 ease-in-out'> </div>
              </div>
            ))}
          </div>
        </div>

         <p className='text-sm md:text-base text-black mb-6 px-4 animate-fade-in-down delay-100 mt-10'>  
         Technology is rapidly evolving, transforming the way we interact with the digital world. From advancements in Artificial Intelligence (AI), which powers smart solutions and automation, to immersive experiences enabled by Virtual Reality (VR), innovation is reshaping industries. The foundation of digital communication, HTML, continues to play a vital role in Web Development, enabling developers to craft visually appealing and functional web pages. Frameworks like Next.js enhance modern web applications, offering seamless server-side rendering and efficient workflows. Together, these technolo
         </p>

      </section>
    </div>
  )
}
