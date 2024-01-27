import React from "react";
import Typewriter from "typewriter-effect";

const Products = () => {
  const year = new Date().getFullYear();

  return (
    <div>
      <Typewriter
        options={{
          strings: [`<span>Trending Fashion ${year}</span>`],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default Products;
