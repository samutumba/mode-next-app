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
      <div className='flex flex-col gap-1 flex-wrap  w-full'>
         <Table>
          <Table.Row>
            <Table.Cell>
              Tool
            </Table.Cell>
            <Table.Cell className='flex flex-row gap-4 items-center'>
              <Circle><Icon icon="logos:xamarin" /></Circle>
              Xamarin
            </Table.Cell> 
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              Platform
            </Table.Cell>
            <Table.Cell className='flex flex-row gap-4 items-center flex-wrap'>
              <Circle><Icon icon="logos:apple" /></Circle>
                iOS
              <Circle><Icon icon="flat-color-icons:android-os" /></Circle>
               Android
              <Circle><Icon icon="logos:microsoft-windows" /></Circle>
               Windows
            </Table.Cell> 
          </Table.Row>
           <Table.Row>
            <Table.Cell>
              Application Development Type
            </Table.Cell>
            <Table.Cell className='flex flex-row gap-4 items-center'>
              Cross-Platform
            </Table.Cell> 
          </Table.Row>
           <Table.Row>
            <Table.Cell>
              Website
            </Table.Cell>
            <Table.Cell className='flex flex-row gap-4 items-center'>
              <Link href="https://dotnet.microsoft.com/en-us/apps/xamarin">
                <button className="underline"> Xamarin</button>
              </Link>
            </Table.Cell> 
          </Table.Row>
           <Table.Row>
            <Table.Cell>
              Developers
            </Table.Cell>
            <Table.Cell className='flex flex-row gap-4 items-center'>
               Miguel de Icaza, Nat Friedman and
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
              July 2011
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
            <Table.Cell className='flex flex-row format gap-4 items-center'>
              <ul>
                <li>Native Multiplatform Support</li>
                <li>Cross-platform development</li>
                <li>Easy Maintenance</li>
                <li>Easy Maintenance</li>
                <li>Open-source</li>
                <li>Highly Safe and Secure</li>

              </ul>
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
            <Table.Cell className='flex flex-row gap-4 format items-center'>
              <ul>
                <li> 1.8 GHz or faster 64-bit processor; Quad-core or better recommended. ARM processors are not supported.</li>
                <li>Minimum of 4 GB of RAM. Many factors impact resources used; we recommend 16 GB RAM for typical professional solutions</li>
                <li>Windows 365: Minimum 2 vCPU and 8 GB RAM. 4 vCPU and 16 GB of RAM recommended.</li>
               <li>Hard disk space: Minimum of 850 MB up to 210 GB of available space</li>
              </ul>
               
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
            <Table.Cell className='flex flex-row format gap-4 items-center'>
              <ul>
                <li>One Technology Stack to Code for All Platforms.</li>
                <li>Performance Close to Native.</li>
                <li>Native User Experiences.</li>
                <li>Full Hardware Support</li>
                <li>Open Source Technology with Strong Corporate Support</li>
                <li>Simplified Maintenance</li>
                <li>Complete Development Ecosystem with the .NET Framework</li>
                <li>Xamarin.Forms: a framework for creating native UI layouts</li>
                <li>Xamarin.Forms XAML Hot Reload</li>
              </ul>
            </Table.Cell> 
          </Table.Row>
           <Table.Row>
            <Table.Cell>
              Disadvantages
            </Table.Cell>
            <Table.Cell className='flex flex-row gap-4 format items-center'>
              <ul>
               <li>Slightly Delayed Support for the Latest Platform Updates</li>
                <li>Limited Access to Open Source Libraries</li>
                <li>High Cost for Professional and Enterprise Use</li>
                <li>Limited Xamarin Talent Pool and Community Constraints</li>
                <li>Larger App Size</li>
                <li>Xamarin.Forms Will Soon Cease to Exist </li>
                <li>Compatibility Issues with Third-Party Libraries and Tools</li>
              </ul>
               
            </Table.Cell> 
          </Table.Row>
           <Table.Row>
            <Table.Cell>
              Language Availability
            </Table.Cell>
            <Table.Cell className='flex flex-row gap-4 items-center'>
             English, Chinese (Simplified), Chinese (Traditional), Czech, French, German, Italian, Japanese, Korean, Polish, Portuguese (Brazil), Russian, Spanish, and Turkish.
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
              Market Share
            </Table.Cell>
            <Table.Cell className='flex flex-row gap-4 items-center'>
              1.89%
               
            </Table.Cell> 
          </Table.Row>
           <Table.Row>
            <Table.Cell>
            Number of Apps Available
            </Table.Cell>
            <Table.Cell className='flex flex-row gap-4 items-center'>
              13,000
               
            </Table.Cell> 
          </Table.Row>
           <Table.Row>
            <Table.Cell>
              Number of downloads/Users if applicable
            </Table.Cell>
            <Table.Cell className='flex flex-row gap-4 items-center'>
              14% of developers worldwide used Xamarin for cross-platform app development.
            </Table.Cell> 
          </Table.Row>
           <Table.Row>
            <Table.Cell>
             Example Apps
            </Table.Cell>
            <Table.Cell className='flex flex-row gap-4 format items-center'>
              <ul>
                <li>
                  The World Bank
                </li>
                <li>
                  UPS
                </li>
                <li>
                  Alaska Airlines
                </li>
                <li>
                  HCL
                </li>
              </ul>
            </Table.Cell> 
          </Table.Row>
           <Table.Row>
            <Table.Cell>
              Architeture pattern
            </Table.Cell>
            <Table.Cell className='flex flex-row gap-4 items-center'>
              Model-View-Presenter (MVP)
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
