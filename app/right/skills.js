'use client';
import {AiFillHtml5} from 'react-icons/ai'
import {BiLogoCss3,BiLogoReact,BiLogoDjango,BiLogoFlutter,BiLogoPython} from 'react-icons/bi'
import {IoLogoJavascript} from 'react-icons/io'
import {SiMysql} from 'react-icons/si'


export default function Skills(){
    return (
        <div className="pt-10 w-8/12" id="skills">
            <h1 className="sm:text-xl sm:text-fuchsia-50 font-extrabold">
                SKILLSETS
            </h1>
            <a className=" group flex items-center py-3 active">
            <span className="nav-text text-2xl flex mr-10 font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                <AiFillHtml5 style={{fontSize:'32px'}}/>
              </span>
            <span className="nav-indicator mr-4 h-1 w-11/12 bg-slate-400 transition-all  group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              
            </a>
            <a className=" group flex items-center py-3 active">
            <span className="nav-text text-2xl flex mr-10 font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-200 group-focus-visible:text-slate-200">
               <BiLogoCss3 style={{fontSize:'32px'}}/>
              </span>
            <span className="nav-indicator mr-4 h-1 w-11/12 bg-slate-400 transition-all  group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              
            </a>
            <a className=" group flex items-center py-3 active">
            <span className="nav-text text-2xl mr-10 font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                <IoLogoJavascript style={{fontSize:'32px'}}/> 
              </span>
            <span className="nav-indicator mr-4 h-1 w-10/12 bg-slate-400 transition-all  group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              
            </a>
            <a className=" group flex items-center py-3 active">
            <span className="nav-text text-2xl flex mr-10 font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-200 group-focus-visible:text-slate-200">
            <BiLogoReact style={{fontSize:'32px'}}/>
              </span>
            <span className="nav-indicator mr-4 h-1 w-9/12 bg-slate-400 transition-all  group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              
            </a>
            <a className=" group flex items-center py-3 active">
            <span className="nav-text text-xs mr-4 font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                NEXT JS
              </span>
            <span className="nav-indicator mr-4 h-1 w-6/12 bg-slate-400 transition-all  group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              
            </a>
            <a className=" group flex items-center py-3 active">
            <span className="nav-text text-xs mr-10 font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                <BiLogoDjango style={{fontSize:'32px'}} />
              </span>
            <span className="nav-indicator mr-4 h-1 w-8/12 bg-slate-400 transition-all  group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              
            </a>
            <a className=" group flex items-center py-3 active">
            <span className="nav-text text-xs mr-10 font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                <BiLogoFlutter style={{fontSize:'32px'}}/>
              </span>
            <span className="nav-indicator mr-4 h-1 w-6/12 bg-slate-400 transition-all group-hover:w-1\/4 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              
            </a>
            <a className=" group flex items-center py-3 active">
            <span className="nav-text text-xs mr-10 font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                <SiMysql style={{fontSize:'32px'}} />
              </span>
            <span className="nav-indicator mr-4 h-1 w-10/12 bg-slate-400 transition-all group-hover:w-1\/4 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              
            </a>
            <a className=" group flex items-center py-3 active">
            <span className="nav-text text-xs mr-10 font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                <BiLogoPython style={{fontSize:'32px'}}/>
              </span>
            <span className="nav-indicator mr-4 h-1 w-8/12 bg-slate-400 transition-all group-hover:w-1\/4 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              
            </a>
           


        </div>
    )
    }