import React, { useState } from "react";
import { House, Contact, Apple, Barrel, Menu, X } from "lucide-react";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const elements = [
    {
      id: 1,
      title: "Item1",
      iconTitle: <House />,
    },
    {
      id: 2,
      title: "Item2",
      iconTitle: <Contact />,
    },
    {
      id: 3,
      title: "Item3",
      iconTitle: <Apple />,
    },
    {
      id: 4,
      title: "Item4",
      iconTitle: <Barrel />,
    },
    {
      id: 5,
      title: "Item5",
      iconTitle: <House />,
    },
  ];
  const handleHamBurger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="  w-full  p-2  fixed">
      <div className=" sm:hidden  ">
        <button onClick={handleHamBurger} className=" ">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <ul
        className={`flex flex-col sm:flex-row justify-around w-full gap-2  ${
          isOpen ? "block" : "hidden"
        }   sm:flex`}
      >
        {elements.map((items) => (
          <li
            className="list-none border   text-sky-300 border-sky-400 max-w-max   hover:text-black   flex  items-center gap-2 hover:border-black hover:bg-sky-400 p-2 rounded-lg outline-none  "
            key={items.id}
            onClick={() => {
              alert("clicked");
            }}
          >
            <span className="  "> {items.title}</span>
            <span className="inline">{items.iconTitle}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
