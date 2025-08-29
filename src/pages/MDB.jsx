import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../component/Card";

export default function MDB() {
  const [datas, setData] = useState([]);
console.log(datas)
  const token = import.meta.env.VITE_access_token;
  const apiKey = import.meta.env.VITE_access_token;
  const handleResponse = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setData(response.data.results);
    } catch (error) {
      console.log("Error occurred while fetching data");
    }
  };

  useEffect(() => {
    handleResponse();
  }, []);
  return (
    <>
      <h1 className="text-5xl font-bold">Popular Movies</h1>
      <div className="grid grid-cols  sm:grid-cols-2 md:grid-cols-3 gap-3 sm:px-2">
        {datas.map((data) => {
          return (
            <div key={data.id}>
              <Card
                image={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
               
                {...data}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
