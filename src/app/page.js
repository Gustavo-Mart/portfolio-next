'use client'
import CustomCursor from '@/components/CustomCursor/CustomCursor'
import { Gallery } from '@/components/Gallery/Gallery'
import { LandingPage } from '@/components/LandingPage/LandingPage'
import { useEffect } from 'react'

export default function Home() {
  useEffect( () => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
    <main className='bg-zinc-950 cursor-none'>
      <CustomCursor/>
      <LandingPage/>
      <Gallery/>
      <div className='h-screen'></div>
    </main>
  )
}