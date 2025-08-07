
'use client'
//import ShareButton from '@/components/ui/share-button'
import FlipLink from '@/components/ui/text-effect-flipper';
import { TextScroll } from '@/components/ui/text-scroll';
// import WrapButton from '@/components/ui/wrap-button'
// import { Facebook } from "lucide-react";
import React from 'react'

const page = () => {
    return (
    <>

        <div className='flex flex-col items-center justify-center h-screen gap-10   '>
            {/* <h1 className='text-shadow-amber-400 text-6xl'>Hello everyone</h1>
            <WrapButton className='mt-20'>Skiper UI - </WrapButton>
 
            <ShareButton  className='flex items-center justify-center align-middle' links={[{icon:Facebook}]}>button</ShareButton> */}
            <FlipLink href = "https://github.com/RRRishav">GITHUB</FlipLink>
             <FlipLink href = "https://www.instagram.com/rishav_bhardwaj7/">INSTAGRAM</FlipLink>
        </div>


            <div className='flex flex-col items-center justify-center h-screen gap-10   '>
 
                 <TextScroll className='text-7xl text-blue-500 hover:text-cyan-500 font-bold' text ='Rishav Bhardwaj'></TextScroll>
        </div>
        
    </>
    )
}

export default page



























































































