'use client';
import { motion } from 'framer-motion';
import { Main } from 'next/document'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import './style.css';
import Navbar from './right/navDet';

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
const x=window.innerHeight
  return (
    <main style={{height:x}}>
      <motion.div className='cursor' variants={Variants} animate="default">

      </motion.div>
      <div className='left-navbar' style={{height:x,width:'50%'}}>
        <Navbar/>
      </div>
      <div className='right-contentbar'>

      </div>
    </main>
  )
}
