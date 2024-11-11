import { Component } from "react";
import Users from "./Users";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import Login from "./Login";

function App() {
  return (
    <>
      {/* header */}
      <div className="flex justify-center py-5 bg-sky-600">
        <ul className="flex gap-10">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/info"}>Informations</Link>
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/info" element={<InfoComp />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;

// another component
class InfoComp extends Component {
  render() {
    return (
      <div className="p-20">
        <h1 className="text-3xl">Read more about us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          quibusdam eaque tenetur nesciunt dolorum vitae omnis ut libero,
          distinctio adipisci cum ipsum mollitia excepturi vero accusantium
          molestiae amet nisi autem!
        </p>
        <button className="py-4 px-12 bg-indigo-800 text-white rounded-full uppercase mt-9 hover:bg-slate-900">
          More ...
        </button>
      </div>
    );
  }
}
