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
    <nav className="flex  w-full  p-2 flex-row  md:justify-evenly   sm:justify-around">
      <button onClick={handleHamBurger} className="flex justify-start">
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isOpen && (
        <ul className=" flex justify-around w-screen ">
          {elements.map((items) => (
            <li
              className="list-none border   text-sky-300 border-sky-400 hover:text-black   flex  items-center gap-2 hover:border-black hover:bg-sky-400 p-2 rounded-lg outline-none  "
              key={items.id}
              onClick={() => {
                alert("clicked");
              }}
            >
              <span className="md:inline sm:inline hidden"> {items.title}</span>
              <span className="md:inline inline">{items.iconTitle}</span>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
