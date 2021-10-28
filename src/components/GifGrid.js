import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { useState } from "react";
// import { useEffect } from "react";
// import { getGifs } from "../helpers/getGifs";
 import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {


const {data:images,loading}=useFetchGifs(category);

  return (
      <>
    <h3 className="animate__animated animate__fadeIn">{category}</h3>

    {loading&& <p>Loading</p>}
     <div className="card-grid animate__animated animate__flash">
   
    {  
              images.map(img=>(

                    <GifGridItem 
                 
                    key={img.id}
                    {...img}
                    />
                  )
              )
        }
      
    </div>
    </>
  );
};
