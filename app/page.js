'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react'
import Navbar from './left/navDet';
import Content from './right/content'

export default function Home() {
  useEffect(()=>{
    var arr="bg-slate-900 leading-realxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal--900".split(" ")
    for(let i=0;i<arr.length;i++){
      document.querySelector("body").classList.add(arr[i])
    }
  },[])
  const [mousePos,setMousePos]=useState({
    x:0,
    y:0
  })

  useEffect(()=>{
    const mouseMove=e=>{
      setMousePos({
        x: e.clientX,
        y: e.clientY
      })

    }
    window.addEventListener('mousemove',mouseMove)
  },[mousePos])

  const Variants={
    default:{
      x: mousePos.x-250,
      y: mousePos.y-250
    }
  }
  let h=0
 useEffect(()=>{
  h=window.innerHeight
  console.log(h)
 })

  return (
    <main className='flex relative h-1/5 bg-slate-900 leading-realxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal--900' >
      <motion.div className='cursor' variants={Variants} animate="default">

      </motion.div>
      <div className='left-navbar fixed xl2:flex top-0 bottom-0 left-0'  style={{height:'auto',width:'50%'}}>
        <Navbar/>
      </div>
      <div className='right-contentbar w-2/4 flex-1 pl-96 ml-96  overflow-y-scroll'>
        <Content/>
      </div>
    </main>
  )
}
