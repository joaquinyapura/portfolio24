import avatar from "./assets/avatarpng.png";

import ai from "./assets/ai.png";
import css from "./assets/css.png";
import git from "./assets/git.png";
import html from "./assets/html.png";
import js from "./assets/js.png";
import ps from "./assets/ps.png";
import react from "./assets/react.png";
import tw from "./assets/tw.png";
import avatarsnow from "./assets/avatarsnow.png"

function App() {
  return (
    <div className="w-screen h-screen ">
      <div className="w-full">
        <nav className=" w-full justify-between py-4 px-40 bg-white text-gray-500 text-xl">
          <ul className="flex gap-4">
            <li>
              <a href="">Inicio</a>
            </li>
            <li>
              <a href="">Acerca de mi</a>
            </li>
            <li>
              <a href="">Portfolio</a>
            </li>
            <li>
              <a href="">Contacto</a>
            </li>
            <div className="flex gap-4">
              <span>
                <a href="">
                  <i className="fi fi-brands-facebook"></i>
                </a>
              </span>
              <span>
                <a href="">
                  <i class="fi fi-brands-instagram"></i>
                </a>
              </span>
            </div>
          </ul>
        </nav>

        <div className="hero flex w-full px-40 relative">
          <div className="textos flex flex-col w-1/2 mt-52">
            <h1 className="text-6xl textos__h1">Soy Joaquin Batallanes</h1>
            <h3 className="textos__h3 text-gray-500">
              Diseñador - Desarrollador web
            </h3>
            <p className="pr-36  text-left">
              Estas son algunas de las tecnoligías en las cuales trabajo
              actualmente. Te invito a conocer más de mi trabajo en mi portfolio
            </p>

          <div className="slider overflow-hidden">
            <div className="slidetrack">
              <div classname="slide" >
                <img src={html} alt="" srcset=""  />
              </div>
              <div classname="slide" >
                <img src={css} alt="" srcset=""  />
              </div>
              <div classname="slide" >
                <img src={js} alt="" srcset=""  />
              </div>
              <div classname="slide" >
                <img src={react} alt="" srcset=""  />
              </div>
              <div classname="slide" >
                <img src={git} alt="" srcset=""  />
              </div>

              <div classname="slide" >
                <img src={tw} alt="" srcset=""  />
              </div>
              <div classname="slide" >
                <img src={ps} alt="" srcset=""  />
              </div>
              <div classname="slide" >
                <img src={ai} alt="" srcset=""  />
              </div>
              <div classname="slide" >
                <img src={html} alt="" srcset=""  />
              </div>
              <div classname="slide" >
                <img src={css} alt="" srcset=""  />
              </div>
              <div classname="slide" >
                <img src={js} alt="" srcset=""  />
              </div>
              <div classname="slide" >
                <img src={react} alt="" srcset=""  />
              </div>
              <div classname="slide" >
                <img src={git} alt="" srcset=""  />
              </div>

              <div classname="slide" >
                <img src={tw} alt="" srcset=""  />
              </div>
              <div classname="slide" >
                <img src={ps} alt="" srcset=""  />
              </div>
              <div classname="slide" >
                <img src={ai} alt="" srcset=""  />
              </div>
              <div classname="slide" >
                <img src={html} alt="" srcset=""  />
              </div>
              <div classname="slide" >
                <img src={css} alt="" srcset=""  />
              </div>
              <div classname="slide" >
                <img src={js} alt="" srcset=""  />
              </div>
              <div classname="slide" >
                <img src={react} alt="" srcset=""  />
              </div>
              <div classname="slide" >
                <img src={git} alt="" srcset=""  />
              </div>

              <div classname="slide" >
                <img src={tw} alt="" srcset=""  />
              </div>
              <div classname="slide" >
                <img src={ps} alt="" srcset=""  />
              </div>
              <div classname="slide" >
                <img src={ai} alt="" srcset=""  />
              </div>
            </div>

          </div>

            <div className="boton bg-black py-2 rounded-full text-white  mt-4">
              <a href="" className="justify-center gap-2 flex">
                <p>Mirá mi github</p>
                <span>
                  <i class="fi fi-brands-github"></i>
                </span>
              </a>
            </div>
          </div>

          <div className="w-1/2">
            <img className="h-screen absolute" src={avatar} alt="" srcset="" />
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0099ff"
            fill-opacity="1"
            d="M0,64L60,90.7C120,117,240,171,360,170.7C480,171,600,117,720,85.3C840,53,960,43,1080,42.7C1200,43,1320,53,1380,58.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
        <section className="acerca w-full flex grid-cols-2 px-20">
        <div className="w-1/2">
          <img src={avatarsnow} alt="" srcset="" />
        </div>
        <div className="w-1/2 text-right text-white">
        <h2>Un poco acerca de mi!</h2>

        </div>
        </section>
      </div>

      <h1>hoola</h1>
    </div>
  );
}

export default App;
