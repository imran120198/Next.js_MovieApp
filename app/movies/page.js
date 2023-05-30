"use client";

import React, { useEffect, useState } from "react";
import styles from "../Styles/Movies.module.css";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = () => {
    fetch(`https://www.omdbapi.com/?apikey=13b46831&s=${text}`)
      .then((res) => res.json())
      .then((res) => setData(res.Search));
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  console.log(data);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className={styles.movies_container}>
      <h1>Movies and Series</h1>
      <div className={styles.search}>
        <input placeholder="Search by movie name" onChange={handleChange} />
        <button onClick={handleSubmit}>Search</button>
      </div>
      <div className={styles.movieData_container}>
        {data?.map((elem) => {
          return (
            <div key={elem.imdbID} className={styles.mapData}>
              <Image
                src={elem.Poster}
                alt={elem.Title}
                height={300}
                width={350}
              />
              <h2>{elem.Title}</h2>
              <Link href={`/movies/${elem.imdbID}`}>
                <button className={styles.mapData_button}>Read More</button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
