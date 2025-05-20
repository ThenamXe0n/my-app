import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const HomePage = () => {
  const [recipies, setRecipies] = useState([]);
  async function getImagesFromApi() {
    const getData = await fetch("https://dummyjson.com/recipes");
    const data = await getData.json();
    setRecipies(data.recipes); // promise ---pending
  }


  useEffect(()=>{

    getImagesFromApi();
  },[])

  return (
    <>
      <main className="my-10">
        <h1 className="font-bold text-4xl text-center">
          This website is a documentation for react js
        </h1>
        <img
          className="mx-auto rounded-xl h-[50vh]"
          src="https://bs-uploads.toptal.io/blackfish-uploads/components/open_graph_image/8963445/og_image/optimized/react_job-214c270ddf2c6b63258f59a93598be98.png"
          alt="react-poster"
        />
        <p className="text-xl font-semibold my-5 w-[70vw] mx-auto">
          <strong>React JS : </strong>React is a free and open-source front-end
          JavaScript library that aims to make building user interfaces based on
          components more "seamless". It is maintained by Meta and a community
          of individual developers and companies.
        </p>
      </main>
      <section>
        <h1 className="text-4xl text-center font-bold">Dishes photos</h1>
        {/* ---------image container------------------ */}
        <div className="grid grid-cols-4">
          {recipies.map((item) => (
            <Card img={item.image} title={item.name} />
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
