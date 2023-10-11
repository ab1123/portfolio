import Image from "next/image";
import "./college.css";

export default function College() {
  return (
    <div className="clgstuff mt-10" id="projects">
      <h1 className="sm:text-fuchsia-50 font-bold text-xl"> PROJECTS</h1>
      <div className="Card  flex  mt-5">
        <div className="image m-5">
          <Image
            src="/medpro.png"
            width={1000}
            height={1000}
            style={{ marginRight: "10px", borderRadius: "5px" }}
          />
        </div>
        <div className="content ml-10 mt-5 pb-5">
          <h1 className="sm:text-fuchsia-50 font-bold text-s">
            <a href="https://github.com/ab1123/MEDPRO">MED PRO</a>
          </h1>
          <div className="con block ">
            <p>
              This is a disease prediction app that predicts about 13 different
              types of Cancer, any kind of Liver Disease, Any kind of Heart
              Diseae. This comes with a built in feature to detect the
              Handwritten Prescription and Convert it into OCR. The main
              technology used in this project is Django, Deep Learning, Machine
              Leaning for the creation of the models and backend. The front end
              was built on HTML and Vanilla CSS. I would like to extend my
              heartfelt gratitude to my team mates
              <a
                className="sm:text-fuchsia-50 font-bold"
                href="https://github.com/kumar11jr"
              >
                Prabhat Kumar
              </a>
              and <a className="sm:text-fuchsia-50 font-bold">Raj Krishna</a>
              for having a collaboration with me in this project
            </p>
          </div>
        </div>
      </div>
      <div className="Card mt-5 flex pb-5">
        <div className="image m-5">
          <Image
            src="/dashboard.png"
            width={1000}
            height={1000}
            style={{ marginRight: "10px", borderRadius: "5px" }}
          />
        </div>
        <div className="content ml-10 mt-5">
        <h1 className="sm:text-fuchsia-50 font-bold text-s">
          <a href="https://github.com/ab1123/Dashboard">Dashboard</a>
        </h1>
        <div className="con block ">
          <p>
            Our stock dashboard, crafted using JavaScript and Chart.js, provides
            a powerful tool for tracking your investments. It offers real-time
            stock data in visually engaging charts, displaying price trends,
            volume, and performance with ease. Customizable options allow you to
            personalize the dashboard to match your trading style, ensuring you
            have the data you need at your fingertips. Stay well-informed and
            make confident investment decisions with our intuitive and dynamic
            stock dashboard.
          </p>
        </div>
        </div>
      </div>

      <div className="Card mt-5 flex pb-5">
        <div className="image m-5">
        <Image
            src="/portfolio.png"
            width={200}
            height={200}
            style={{ marginRight: "10px", borderRadius: "5px" }}
          />
        </div>

      <div className="content ml-10 mt-5">
      <h1 className="sm:text-fuchsia-50 font-bold text-s">
          <a href="https://github.com/ab1123/portfolio">Portfolio Website</a>
        </h1>
        <div className="con block ">
          <p>
            This is my official Portfolio Website displaying Information about me
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}
