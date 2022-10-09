import '../styles/globals.css'
import { Navbar, Footer, Dropdown } from "flowbite-react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Link from 'next/link'
import { Suspense } from 'react'
import { _api } from '@iconify/react';
import fetch from 'cross-fetch';

_api.setFetch(fetch);

function MyApp({ Component, pageProps }) {
  return (
    <Suspense fallback={`Loading...`}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
 </Suspense>
)
}

const Layout = ({ children }) => {
 return (    
    <div className="bg-midnight-blue dark h-full w-full min-h-screen text-white font-p px-12" suppressHydrationWarning>
      
<nav class=" px-2 sm:px-4 py-2.5 md:py-7 ">
  <div class="container flex flex-wrap justify-between items-center mx-auto">
        <Navbar.Brand href="/">
          <img
            src="/logo.svg"
            className="mr-3 h-6 md:h-6"
            alt="My Logo"
          />
          </Navbar.Brand>
          
    <button datacollapsetoggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-lg rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="flex flex-col p-4 mt-4 rounded-lg border md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-lg md:border-0 ">
              <li>
                <a><Link href="/" className="block py-2 pr-4 pl-3 text-white rounded md:p-0 " aria-current="page"><a>Welcome</a></Link></a>
         
              </li>
              <li>
                  <a><Link href="/classwork" className="block py-2 pr-4 pl-3 text-white rounded md:p-0 " aria-current="page">Classwork</Link></a>
                
              </li>
              <li>
                  <a><Dropdown
                  label="Labs"
                  inline={true}
                >
                  <Dropdown.Item>
                    <Link href="/lab1" className="block py-2 pr-4 pl-3 text-white rounded md:p-0 " aria-current="page">Lab 1</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link href="/lab2" className="block py-2 pr-4 pl-3 text-white rounded md:p-0 " aria-current="page">Lab 2</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    Lab 3
                  </Dropdown.Item>
                </Dropdown></a>
                
              </li>
              <li>
                  <a><Link href="/project" className="block py-2 pr-4 pl-3 text-white rounded md:p-0 " aria-current="page">Project</Link></a>
        
        </li>
        
      </ul>
    </div>
  </div>
</nav>
     {children}   
<footer className="p-4 rounded-lg shadow md:px-6 md:py-8 ">
    <div className="flex sm:items-center sm:justify-between">
         <Navbar.Brand href="/">
    <img
      src="/logo.svg"
      className="mr-3 h-6 md:h-6"
      alt="My Logo"
    />
  </Navbar.Brand>
          <ul className="flex flex-wrap items-center mb-1 gap-2 text-sm ">
               <Footer.Link href="https://github.com/samutumba">
          <BsGithub className='text-xl' />
        </Footer.Link>
        <Footer.Link href="https://www.linkedin.com/in/samutumba/">
          <BsLinkedin className='text-xl'/>
        </Footer.Link>
        </ul>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span class="block text-sm sm:text-center ">© {new Date().getFullYear()} <a href="https://samutumba.com/" class="hover:underline">Samutumba™</a>. All Rights Reserved.
    </span>
</footer>
  
 </div>)
}

export default MyApp
