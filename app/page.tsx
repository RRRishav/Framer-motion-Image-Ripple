
'use client'
import { CardCarousel } from '@/components/ui/card-carousel';
import { SkiperCard } from '@/components/ui/skiper-card';
//import ShareButton from '@/components/ui/share-button'
import FlipLink from '@/components/ui/text-effect-flipper';
import { TextScroll } from '@/components/ui/text-scroll';
// import WrapButton from '@/components/ui/wrap-button'
// import { Facebook } from "lucide-react";
import React from 'react'







const page = () => {

    const images = [


        {
            src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            alt: "Image 1"
        },
        {
            src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            alt: "Image 2"
        },
        {
            src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            alt: "Image 3"
        }


    ]




    return (
        <>

            <div className='flex flex-col items-center justify-center h-screen gap-10   '>
                {/* <h1 className='text-shadow-amber-400 text-6xl'>Hello everyone</h1>
            <WrapButton className='mt-20'>Skiper UI - </WrapButton>
 
            <ShareButton  className='flex items-center justify-center align-middle' links={[{icon:Facebook}]}>button</ShareButton> */}
                <FlipLink href="https://github.com/RRRishav">GITHUB</FlipLink>
                <FlipLink href="https://www.instagram.com/rishav_bhardwaj7/">INSTAGRAM</FlipLink>
            </div>


            <div className='flex flex-col items-center justify-center h-screen gap-10   '>

                <TextScroll className='text-7xl text-blue-500 hover:text-cyan-500 font-bold' text='Rishav Bhardwaj'></TextScroll>
            </div>



            <div className='flex flex-col items-center justify-center h-screen gap-10   '>

                {/* <CardCarousel images={images}></CardCarousel> */}

                {/* <SkiperCard
                    title='Skiper UI'
                    description='A collection of UI components built with Tailwind CSS and React.'
                    image={{
                        step1dark1: "https://images.unsplash.com/photo-1612832021579-d85f1c2c8e54?auto=format&fit=crop&w=800&q=80",
                        step1dark2: "https://images.unsplash.com/photo-1505238680356-667803448bb6?auto=format&fit=crop&w=800&q=80",
                        step1light1: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
                        step1light2: "https://images.unsplash.com/photo-1581091870630-b2e27fba1943?auto=format&fit=crop&w=800&q=80",
                        step2dark1: "https://images.unsplash.com/photo-1593642634367-d91a135587b5?auto=format&fit=crop&w=800&q=80",
                        step2dark2: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
                        step2light1: "https://images.unsplash.com/photo-1505682634904-d7cbe7eab5b6?auto=format&fit=crop&w=800&q=80",
                        step2light2: "https://images.unsplash.com/photo-1537432376769-00a4c9f96c5f?auto=format&fit=crop&w=800&q=80",
                        step3dark: "https://images.unsplash.com/photo-1581091226825-8d40a3b5633e?auto=format&fit=crop&w=800&q=80",
                        step3light: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=800&q=80",
                        step4light: "https://images.unsplash.com/photo-1573496799515-eebbb63814a1?auto=format&fit=crop&w=800&q=80",
                        alt: "Tutorial steps showing UI designs in light and dark modes",
                    }}

                ></SkiperCard> */}
            </div>

        </>
    )
}

export default page



























































































