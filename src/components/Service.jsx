import React from 'react'
const service = [
    {
        id:1,
        title: "web design",
        descrption:"creating visually appealing and user friendly web design."

    },
    {
        id:2,
        title: "Frontend Devlopment",
        descrption:"building responsive and interactive user inerface."

    },
    {
        id:3,
        title: "Backend devlopment",
        descrption:"devloping robust serverside logic and database."

    },
    {
        id:4,
        title: "Graphics Designes  ",
        descrption:"ui and ux desigen ,banner and stiker deignes."

    }

]
const Service = () => {
  return (
   <>
   <div className='bg-black text-white py-20' id='service'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
          <h2 className='text-4xl font-bold text-center mb-12'>Servic<span className='text-yellow-400'>es</span></h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
                  {service.map(service=>(
                    <div key={Service.id}
                    className='bg-white px-6 pb-6 rounded-lg hover:shadow-lg transform
                    transition-transform duration-300 hover:scale-105'>
                        <div className ='text-right text-2x1 font-bold text-transparent bg-clip-text 
                        bg-black '>
                          {service.id}
                        </div>
                       <h3 className='mt-2 text-2xl font-bold text-black'>                
                        {service.title}
                        </h3>
                        <p className='mt-2 text-2xl font-semibold text-black'>{service.descrption}</p>
                        <a href="#" className='mt-4 inline-block text-blue-600 hover:text-blue-800'>Read More </a>                        
                        </div>
                  ))}
 
          </div>
</div>
</div>
   </>
  )
}

export default Service