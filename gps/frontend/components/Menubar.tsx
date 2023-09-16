import { useState } from "react";
import { IconContext } from "react-icons";
import * as AiIcons from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";

// ROUTIN

// DATA FILE
import { SidebarData } from "./SlidebarData";

// STYLES

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#000" }}>
        {/* All the icons now are white */}
        <div className="navbar">
          <div className="menu-bars">
            <AiOutlineMenuUnfold className="w-9 h-9 text-black " onClick={showSidebar} />
          </div>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <div className="menu-bars">
                <AiIcons.AiOutlineClose />
              </div>
            </li>

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className='text-[16px] flex justify-start items-center space-x-2 pt-4 pl-3' >
                    <a href={item.href} >{item.title}</a> 
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
