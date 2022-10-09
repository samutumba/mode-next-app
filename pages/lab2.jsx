import Head from 'next/head'
import Link from 'next/link'
import { Icon } from '@iconify/react';
import { Table } from 'flowbite-react'
import {SiNetlify,SiNextdotjs} from "react-icons/si"

export default function lab2() {
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='font-t my-4 text-4xl'>
        Lab 2
      </h1>
      <h3 className='font-t text-2xl'>
        Web Hosting (Registration and Setup)
      </h3>
      <div >
        <Table>
          <Table.Row>
            <Table.Cell>
              Platform
            </Table.Cell>
            <Table.Cell className='flex flex-row gap-4 items-center'>
              <Circle>
                <Icon icon="logos:netlify" />
              </Circle>
              Netlify
            </Table.Cell> 
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              Framework
            </Table.Cell>
            <Table.Cell className='flex flex-row gap-4 items-center'>
              <Circle><Icon icon="logos:nextjs-icon" /></Circle>
               NextJS
            </Table.Cell> 
          </Table.Row>
        
        </Table>
        
      </div>
      <h3 className='font-t text-2xl'>
        Third Party Andriod Emulator Installation and Testing
      </h3>
      <h3 className='font-t text-2xl'>
        Mobile Application Development Tool  
      </h3>
      <div className='flex flex-col gap-1 flex-wrap'>
         <Table>
          <Table.Row>
            <Table.Cell>
              Tool
            </Table.Cell>
            <Table.Cell className='flex flex-row gap-4 items-center'>
              <Circle><Icon icon="logos:xamarin" /></Circle>
              XAMARIN
            </Table.Cell> 
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              Platform
            </Table.Cell>
            <Table.Cell className='flex flex-row gap-4 items-center'>
              Cross-Platform
            </Table.Cell> 
          </Table.Row>
           <Table.Row>
            <Table.Cell>
              Application Development Type
            </Table.Cell>
            <Table.Cell className='flex flex-row gap-4 items-center'>
                Native
               
            </Table.Cell> 
          </Table.Row>
           <Table.Row>
            <Table.Cell>
              Website
            </Table.Cell>
            <Table.Cell className='flex flex-row gap-4 items-center'>
              <Link className='hover:underline' href="https://dotnet.microsoft.com/en-us/apps/xamarin">
                Xamarin
              </Link>
            </Table.Cell> 
          </Table.Row>
           <Table.Row>
            <Table.Cell>
              Developers
            </Table.Cell>
            <Table.Cell className='flex flex-row gap-4 items-center'>
              Miguel de Icaza and
              <Circle>
                <Icon icon="logos:microsoft-icon" />
              </Circle>
               Microsoft
            </Table.Cell> 
          </Table.Row>
           <Table.Row>
            <Table.Cell>
              Release Date
            </Table.Cell>
            <Table.Cell className='flex flex-row gap-4 items-center'>
              December 2012
               
            </Table.Cell> 
          </Table.Row>
           <Table.Row>
            <Table.Cell>
              License
            </Table.Cell>
            <Table.Cell className='flex flex-row gap-4 items-center'>
              MIT
               
            </Table.Cell> 
          </Table.Row>
           <Table.Row>
            <Table.Cell>
              Pricing
            </Table.Cell>
            <Table.Cell className='flex flex-row gap-4 items-center'>
              Free     
            </Table.Cell> 
          </Table.Row>
           <Table.Row>
            <Table.Cell>
              Programming Languages
            </Table.Cell>
            <Table.Cell className='flex flex-row gap-4 items-center'>
              <Circle>
                <Icon icon="simple-icons:xaml" />
              </Circle>
              XAML
              <Circle>
                <Icon icon="logos:c-sharp" />
              </Circle>
              C#
            </Table.Cell> 
          </Table.Row>
           <Table.Row>
            <Table.Cell>
              Features
            </Table.Cell>
            <Table.Cell className='flex flex-row gap-4 items-center'>
              
               
            </Table.Cell> 
          </Table.Row>
           <Table.Row>
            <Table.Cell>
              Debugger
            </Table.Cell>
            <Table.Cell className='flex flex-row gap-4 items-center'>
                <Circle><Icon icon="logos:visual-studio" /></Circle> Visual Studio Debugger
            </Table.Cell> 
          </Table.Row>
           <Table.Row>
            <Table.Cell>
              Built-in Emulator
            </Table.Cell>
            <Table.Cell className='flex flex-row gap-4 items-center'>
              <Circle>
                <Icon icon="flat-color-icons:android-os" />
              </Circle>
               Android Emulator
            </Table.Cell> 
          </Table.Row>
           <Table.Row>
            <Table.Cell>
              Host Machine Requirements
            </Table.Cell>
            <Table.Cell className='flex flex-row gap-4 items-center'>
              
               
            </Table.Cell> 
          </Table.Row>
           <Table.Row>
            <Table.Cell>
              Integrated Development Environment
            </Table.Cell>
            <Table.Cell className='flex flex-row gap-4 items-center'>
              <Circle><Icon icon="logos:visual-studio" /></Circle> Visual Studio 
               
            </Table.Cell> 
          </Table.Row>
           <Table.Row>
            <Table.Cell>
            Software
            </Table.Cell>
            <Table.Cell className='flex flex-row gap-4 items-center'>
              <Circle><Icon icon="logos:visual-studio" /></Circle> Visual Studio 
              
            </Table.Cell> 
          </Table.Row>
         <Table.Row>
            <Table.Cell>
              Advantages
            </Table.Cell>
            <Table.Cell className='flex flex-row gap-4 items-center'>
              
               
            </Table.Cell> 
          </Table.Row>
           <Table.Row>
            <Table.Cell>
              Disadvantages
            </Table.Cell>
            <Table.Cell className='flex flex-row gap-4 items-center'>
              
               
            </Table.Cell> 
          </Table.Row>
           <Table.Row>
            <Table.Cell>
              Language Availability
            </Table.Cell>
            <Table.Cell className='flex flex-row gap-4 items-center'>
              
               
            </Table.Cell> 
          </Table.Row>
           <Table.Row>
            <Table.Cell>
              Pricing
            </Table.Cell>
            <Table.Cell className='flex flex-row gap-4 items-center'>
              Free
               
            </Table.Cell> 
          </Table.Row>
           <Table.Row>
            <Table.Cell>
              Third - Party Emulator
            </Table.Cell>
            <Table.Cell className='flex flex-row gap-4 items-center'>
              
              
               
            </Table.Cell> 
          </Table.Row>
           <Table.Row>
            <Table.Cell>
              Market Share
            </Table.Cell>
            <Table.Cell className='flex flex-row gap-4 items-center'>
              
               
            </Table.Cell> 
          </Table.Row>
           <Table.Row>
            <Table.Cell>
            Number of Apps Available
            </Table.Cell>
            <Table.Cell className='flex flex-row gap-4 items-center'>
              
               
            </Table.Cell> 
          </Table.Row>
           <Table.Row>
            <Table.Cell>
              Number of downloads/Users if applicable
            </Table.Cell>
            <Table.Cell className='flex flex-row gap-4 items-center'>
              
               
            </Table.Cell> 
          </Table.Row>
           <Table.Row>
            <Table.Cell>
              Optional
            </Table.Cell>
            <Table.Cell className='flex flex-row gap-4 items-center'>
              
               
            </Table.Cell> 
          </Table.Row>
           <Table.Row>
            <Table.Cell>
              Optional
            </Table.Cell>
            <Table.Cell className='flex flex-row gap-4 items-center'>
              
               
            </Table.Cell> 
          </Table.Row>

        </Table>
     
      </div>
   </div>
  )
}


const Circle = ({ children }) => {
  return (<span className='bg-iron p-2 w-fit inline rounded-full text-2xl'>
    {children}
  </span>)
}
