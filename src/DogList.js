import React from "react";
import dogs from "./dogs";
import images from "./dogImages";
import "./DogList.css";

const DogList = () => {
  return (
    <div>
      <h1 className="DogList-heading"> Meet Our Dogs </h1>
      {dogs.map((dog) => {
        return (
          <div key={dog.name}>
            <p>{dog.name}</p>
            <img src={images[dog.src]} className="DogList-img" />
          </div>
        );
      })}
    </div>
  );
};

export default DogList;
