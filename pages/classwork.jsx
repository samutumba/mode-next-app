import Head from 'next/head'
import { Accordion } from 'flowbite-react'
import Script from 'next/script'

export default function project() { 
 return (<div>
   <Head>
        <title>Classwork - MODE 4201</title>
        <meta name="description" content="Class Work from MODE 4201" />
   </Head>
   <h1 className="font-title font-semibold text-3xl">Classwork</h1>
   <Accordion flush={true}>
     <Accordion.Panel>
    <Accordion.Title>
      Classwork #2
    </Accordion.Title>
    <Accordion.Content>
         <div ><iframe src="https://player.vimeo.com/video/762852862?h=d5a7a3f433&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen className="m-7 rounded-lg " title="video1701054887.mp4"></iframe></div>
         <Script src="https://player.vimeo.com/api/player.js"></Script>
    </Accordion.Content>
  </Accordion.Panel>
  <Accordion.Panel>
    <Accordion.Title>
      Classwork #1
    </Accordion.Title>
    <Accordion.Content>
      
    </Accordion.Content>
  </Accordion.Panel>
</Accordion>
 </div>)
}