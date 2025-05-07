import React from 'react'


const About = () => {
  return (
    <>
      <div className='bg-black text-white py-20' id='about'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
          <h2 className='text-4xl font-bold text-center mb-12'>About <span className='text-yellow-400'>Me</span> </h2>

          <div className="bg-black text-white flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-6 md:px-16 py-12">
            

            <div className='flex-1'>
              <p className='text-xl mb-8'>
              I am a Software Engineering graduate specializing in Fullstack Development. I love solving complex problems 
              and creating scalable,efficient solutions using cutting-edge technologies and enjoy building powerful web
              applications and designing beautiful user experiences.
              </p>

              <div className='space-y-4'>
                {/* Skill Bars */}
                <div className='flex items-center'>
                  <label htmlFor="htmlandcss" className='w-2/12'>HTML & CSS</label>
                  <div className='grow bg-gray-600 rounded-full h-'>
                    <div className="bg-yellow-500 h-4 rounded-full w-11/12 transition-transform duration-300 hover:scale-105"
                    ></div>
                  </div>
                </div>

                <div className='flex items-center'>
                  <label htmlFor="reactjs" className='w-2/12'>React JS</label>
                  <div className='grow bg-gray-600 rounded-full h-'>
                    <div className="bg-yellow-500 h-4 rounded-full w-11/12 transition-transform duration-300 hover:scale-105"
                    ></div>
                  </div>
                </div>
 
                <div className='flex items-center'>
                  <label htmlFor="reactjs" className='w-2/12'>Node JS</label>
                  <div className='grow bg-gray-600 rounded-full h-'>
                    <div className="bg-yellow-500 h-4 rounded-full w-11/12 transition-transform duration-300 hover:scale-105"
                    ></div>
                  </div>
                </div>

                {/* Stats Cards */}
                <div className='mt-12 flex justify-between text-center'>
                  <div>
                    <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-yellow-500'>
                      1+
                    </h3>
                    <p>Year Experience</p>
                  </div>

                  <div>
                    <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-yellow-500'>
                      10+
                    </h3>
                    <p>Projects Completed</p>
                  </div>

                  <div>
                    <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-yellow-500'>
                      10+
                    </h3>
                    <p>Happy Clients</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default About
