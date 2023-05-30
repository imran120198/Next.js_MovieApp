import Image from "next/image";
import React from "react";

const Homepage = () => {
  return (
    <div>
      <Image
        src="https://images.unsplash.com/photo-1615414047026-802692414b79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
        alt="movie image"
        width={1500}
        height={680}
      />
    </div>
  );
};

export default Homepage;
