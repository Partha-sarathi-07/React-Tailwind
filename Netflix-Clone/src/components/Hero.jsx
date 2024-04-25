import axios from "axios";
import { TbPlayerPlayFilled } from "react-icons/tb";
import React,{ useEffect, useState } from "react"
import endpoints, { createImageUrl } from "../services/MovieServices";
import { BsPlusLg } from "react-icons/bs";

const Hero = () => {
  const [movie, setMovie] = useState({});

  useEffect(() =>{
    axios.get(endpoints.popular).then((response) => {
      const movies = response.data.results;
      const randomMovie = movies[Math.floor(Math.random() * movies.length)]
      setMovie(randomMovie);
    });
  },[])

  if(!movie)
    return(
      <p>Fetching Movie</p>
    );

  const {title, backdrop_path, release_date, overview} = movie;  

  const truncate = (str, length) => {
    if(!str)
      return "";

    return str.length > length? str.slice(0, length) + "..." : str;
  } 


  return (
    <div className="w-full h-[550px] lg:h-[850px] xl:gap-6">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] lg:h-[850px] bg-gradient-to-r from-black"/>
          <img className="w-full h-full object-cover object-top"
          src={createImageUrl(backdrop_path, "original")} alt={title} />

          <div className="flex  flex-col gap-6 absolute w-full h-full top-[26%] lg:top-[40%] lg:gap-10 px-4">
            <h1 className="font-nsans-bold text-5xl w-[600px] xl:w-[1000px] xl:text-7xl md:text-6xl">{title}</h1>
            <div className="font-nsans-medium flex">
              <button className="flex items-center bg-white text-black px-3 py-1 rounded-sm text-lg md:text-xl lg:text-2xl">
                <TbPlayerPlayFilled className="mr-2"/>
                Play
                </button>
              <button className="flex items-center bg-gray-600 px-4 py-1 rounded-sm text-lg ml-2 md:text-xl lg:text-2xl md:ml-3 xl:ml-4">
                <BsPlusLg className="mr-2"/>
                My List
              </button>
            </div>
            <div>
              <p className="text-gray-400 text-md">{release_date}</p>
              <p className="md:w-[600px] w-[400px] lg:text-lg">{truncate(overview, 165)}</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Hero