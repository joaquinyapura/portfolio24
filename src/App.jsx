import avatar from "./assets/avatarpng.png";

import ai from "./assets/ai.png";
import css from "./assets/css.png";
import git from "./assets/git.png";
import html from "./assets/html.png";
import js from "./assets/js.png";
import ps from "./assets/ps.png";
import react from "./assets/react.png";
import tw from "./assets/tw.png";

function App() {
  return (
    <div className="w-screen h-screen  absolute">
      <div className="w-full">
        <nav className=" w-full justify-between py-4 px-40 bg-white text-gray-500">
          <ul className="flex gap-4">
            <li>
              <a href="">LINK</a>
            </li>
            <li>
              <a href="">LINK</a>
            </li>
            <li>
              <a href="">LINK</a>
            </li>
            <li>
              <a href="">LINK</a>
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

        <div className="hero flex w-full px-40">
          <div className="textos flex flex-col w-1/2 mt-20">
            <h1 className="text-6xl textos__h1">Soy Joaquin Batallanes</h1>
            <h3 className="textos__h3 text-gray-500">
              Diseñador - Desarrollador web
            </h3>
            <p className="pr-36 text-lg">
              Estas son algunas de las tecnoligías en las cuales trabajo
              actualmente. Te invito a conocer más de mi trabajo en mi portfolio
            </p>

            <div className="w-full flex gap-10">
              <div>
                <img src={html} alt="" srcset="" />
              </div>
              <div>
                <img src={css} alt="" srcset="" />
              </div>
              <div>
                <img src={js} alt="" srcset="" />
              </div>
              <div>
                <img src={react} alt="" srcset="" />
              </div>
              <div>
                <img src={git} alt="" srcset="" />
              </div>

              <div>
                <img src={tw} alt="" srcset="" />
              </div>
              <div>
                <img src={ps} alt="" srcset="" />
              </div>
              <div>
                <img src={ai} alt="" srcset="" />
              </div>
            </div>
          </div>

          <div className="w-1/2">
            <img className="h-screen" src={avatar} alt="" srcset="" />
          </div>
        </div>
      </div>

      <h1>hoola</h1>
    </div>
  );
}

export default App;
