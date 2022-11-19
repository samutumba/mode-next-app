import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'
//import lab1file from "../src/data/files/LAB 1.pdf"
import dynamic from 'next/dynamic'

export default function lab1({ file }) {
 return (
  <div className='flex flex-col w-full gap-2'>
   <Head>
    <title>Lab 1 - MODE 4201</title>
    <meta name="description" content="Description of Lab 1" />
   </Head>
   <h1 className='font-t my-7 mx-3 text-3xl'>
    Classwork 3
   </h1>
   <img src="/HelloW.png" alt="" className='w-96 h-auto ' />
   <a href='/app.apk' download>Click to download APK File</a>
  </div>
 )
}

// export const getServerSideProps = async ({ params }) => {

//   const Data = await axios.get(`https://drive.google.com/file/d/1kmzGwHbn_IA-L9xEvV6U_OIIlyDH23E7/preview`).then(response => response.data);

//   return {
//     props: {
//       file: Data,
//     },
//   };
// };