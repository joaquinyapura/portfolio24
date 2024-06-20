import avatar from "./assets/avatarpng.png";

function App() {
  return (
    <div className="w-screen h-screen bg-slate-900 absolute">
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

        <div className="hero flex w-full px-40 bg-gray-500">
          <div className="textos flex flex-col w-1/2 mt-20">
            <h1>Soy Joaquin Batallanes</h1>
            <h3>Diseñador-Desarrollador web</h3>
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
