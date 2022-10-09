import Head from 'next/head'
import Image from 'next/image'
import { Icon } from '@iconify/react';

export default function Home() {
  return (
    <div className='flex flex-col gap-2 justify-center w-full h-full'>
      <div className='my-3 text-center text-2xl font-t'>
        Welcome to my MODE4202 - Mobile Development 4202 Website
      </div>
      <div className='w-full flex flex-row justify-evenly flex-wrap'>
        <div className='w-48'>
          <Image src="https://media-exp1.licdn.com/dms/image/C4D03AQEJSRy1Dlr8zw/profile-displayphoto-shrink_800_800/0/1628211852205?e=1669248000&v=beta&t=UevwTFjva5nl8WylszA4HqYY0F661RZ8niaSQLGG1Cs" alt="Profile" height={350} width={350} className="rounded-full"></Image>
        </div>
        <div className='flex text-[#fffb] flex-col gap-2'>
          <h2 className='font-t text-white text-xl font-bold'>Hello,</h2>
          <p>I&apos;m Samuel Jeremiah Kayongo-Mutumba Jr. </p>
          <p className='flex flex-row items-center gap-2'><Image src={'https://i.postimg.cc/TwhWkmFz/DCShield.png'} height={27} width={25} /> Computer Programming and Anaylsis Student at Durham College.</p>
          <p className='flex flex-row items-center gap-2'><Icon icon="emojione:flag-for-uganda" className='text-2xl' /> Ugandan</p>
         <p className='text-white'>My Passions are; </p> 
          <span className='my-2 flex-row gap-3 flex flex-wrap'>
            <Circle>
              <Icon icon="la:laptop-code" />
            </Circle>
            <Circle>
              <Icon icon="game-icons:soccer-kick" />
            </Circle>
            <Circle>
              <Icon icon="ri:netflix-fill" />
            </Circle>
            <Circle>
             <Icon icon="bi:spotify" /> 
            </Circle>
            <Circle>
              <Icon icon="game-icons:night-sleep" />
            </Circle>
            <Circle>
             <Icon icon="arcticons:premier-league" />
            </Circle>
            
          </span>
          
        </div>
      </div>
      <div className='md:mx-11 text-[#fffb] my-5'>
        <h2 className='font-t text-xl text-white mb-2'>Course Description</h2>
        There is a big demand for mobile development due to large and medium sized companies increasingly adapting to the mobile world in this rapidly changing technological society. This course investigates the different Mobile Architectures (Native, Web App and Cross-Platform) on various Platforms with examples. The course introduces the students to the concepts, tools and techniques used to develop quality Mobile Apps for diverse Platforms and Devices, including Apple iOS, Android, and Windows with examples covering all the different Architectures. The students will create Mobile Apps covering Native and Hybrid Architectures using easily available Tools.
      </div>
 
   </div>
  )
}

const Circle = ({ children }) => {
  return (<span className='bg-evening-blue text-white p-2 rounded-full text-3xl'>
    {children}
  </span>)
}