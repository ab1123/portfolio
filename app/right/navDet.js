"use client";
import "./navDet.css";
import { GrGithub } from "react-icons/gr";
import {BsInstagram} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"
export default function Navbar() {
  return (
    <div className="details">
      <p className="text-4xl font-bold tracking-tight text-slate-200  sm:text-5xl p-40 pb-0">
        <a href="#s">Harsheet Sharma</a>
      </p>
      <h2 className="mt-10 ml-40 text-lg font-medium tracking-tight text-slate-200 sm:text-3xl">
        Full Stack Developer
      </h2>
      <p className="mt-4 max-w-xl ml-40 leading-normal sm:text-2xl">
        I build accessible, inclusive products and digital experiences for the
        web.
      </p>
      <nav
        className="nav hidden lg:block ml-44 mt-10"
        aria-label="In-page jump links"
      >
        <ul>
          <li>
            <a
              className="group h-8 flex items-center py-3 active "
              href="#about"
            >
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                ABOUT
              </span>
            </a>
          </li>
          <li>
            <a className="group flex items-center py-3 active" href="#clgstuff">
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                COLLEGE ACHIEVEMENTS
              </span>
            </a>
          </li>
          <li>
            <a className="group flex items-center py-3 active" href="#projects">
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                PROJECTS
              </span>
            </a>
          </li>
        </ul>
      </nav>
      <ul className="flex mt-20 ml-44">
        <li><GrGithub className="sm:text-3xl m-4"/></li>
        <li><BsInstagram className="sm:text-3xl m-4"/></li>
        <li><BsLinkedin className="sm:text-3xl m-4"/></li>
      </ul>
    </div>
  );
}
