'use client';
import { Main } from 'next/document'
import Image from 'next/image'
import { useEffect } from 'react'

export default function Home() {
  useEffect(()=>{
    var arr="bg-slate-900 leading-realxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal--900".split(" ")
    for(let i=0;i<arr.length;i++){
      document.querySelector("body").classList.add(arr[i])
    }
  })
  return (
    <main>
      <div className='left-navbar'>

      </div>
      <div className='right-contentbar'>

      </div>
    </main>
  )
}
