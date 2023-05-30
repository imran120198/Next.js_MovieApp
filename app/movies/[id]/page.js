"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const Page = ({ params }) => {
  const imdbID = params.id;

  const [data, setData] = useState([]);

  const getDatabyId = () => {
    fetch(`https://www.omdbapi.com/?apikey=13b46831&i=${imdbID}`)
      .then((res) => res.json())
      .then((res) => setData(res));
  };

  useEffect(() => {
    getDatabyId();
  }, []);

  console.log(data);
  return (
    <>
    <div style={{textAlign:"center"}}>
      <h1>Movies/{data.Type}</h1>
    </div>
      <div
        style={{
          margin: "auto",
          width: "65%",
          textAlign: "center",
          fontSize: "18px",
        }}
      >
        <Image src={data.Poster} alt={data.Title} width={300} height={300} />
        <h1>{data.Title}</h1>
        <p>
          <strong>Cast:</strong> {data.Actors}
        </p>
        <p>
          <strong>Genre : </strong>
          {data.Genre}
        </p>
        <p>
          <strong>Plot:</strong> {data.Plot}
        </p>
        <p>
          <strong>Released :</strong> {data.Released}
        </p>
      </div>
    </>
  );
};

export default Page;
