import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.svg";
import img8 from "../assets/img8.jpg";

export default function Gallery() {
  return (
    <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-2 lg:grid-cols-4">
      <div className="aspect-square">
        <img src={img1} alt="img1" className="images" />
      </div>

      <div className="aspect-square">
        <img src={img2} alt="img2" className="images" />
      </div>
      <div className="aspect-square">
        <img src={img3} alt="img3" className="images" />
      </div>
      <div className="aspect-square">
        <img src={img4} alt="img-4" className="images" />
      </div>
      <div className="aspect-square">
        <img src={img5} alt="img-5" className="images" />
      </div>
      <div className="aspect-square">
        <img src={img6} alt="img-6" className="images" />
      </div>
      <div className="aspect-square">
        <img src={img7} alt="img-7" className="images" />
      </div>
      <div className="aspect-square">
        <img src={img8} alt="img-8" className="images" />
      </div>
    </div>
  );
}
