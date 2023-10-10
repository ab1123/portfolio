"use client";

import College from "./college";
import Skills from "./skills";

export default function Content() {
  return (
    <div>
      <div className="about-section" id="about">
        <p className="w-3/4 pt-28 sm:text-s">
          Hey! My name is Harsheet and I'm a web developer with a passion for
          front end development and design. I'm currently a third year student
          at DIT University pursuing a degree in Computer science with a minor
          in Full Stack and Dev-Ops. I aspire toward a career that will allow me
          to channel my creativity through crafting beautiful software and
          engaging experiences.
        </p>
        <p className="mt-10 w-3/4">
          Except for my computer you can find me hanging out with my best people
          or watching anime. The anime I like the most is{" "}
          <a className="sm:text-fuchsia-50 font-bold" href="#">
            Naruto
          </a>{" "}
          and{" "}
          <a className="sm:text-fuchsia-50 font-bold" href="#">
            Naruto Shippuden.
          </a>
        </p>
      </div>
      <Skills />
      <College/>
    </div>
  );
}
