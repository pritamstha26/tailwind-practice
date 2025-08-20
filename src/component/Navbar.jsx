import React from "react";
import { House, Contact, Apple, Barrel } from "lucide-react";
export default function Navbar() {
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

  return (
    <nav className="flex  w-full fixed top-0 p-2 flex-row sm:item md:justify-evenly">
      {elements.map((items) => (
        <li
          className="list-none border text-sky-300 border-sky-400 hover:text-black hover:border-black hover:bg-sky-400 p-2 rounded-lg outline-none  "
          key={items.id}
        >
          <span className="md:inline sm:inline hidden"> {items.title}</span>
          <span className="md:inline inline">{items.iconTitle}</span>
        </li>
      ))}
    </nav>
  );
}
