import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import images from "./dogImages";
import "./Dog.css";
import dogs from "./dogs";

const Dog = () => {
  const { dogName } = useParams();
  const [dogNameState, setDogNameState] = useState(dogName);

  //   const [dog, setDog] = useState(() => dogs.find((dog) => dog.src === dogName));

  let dogData = dogs.find((d) => d.src === dogNameState);

  useEffect(() => {
    dogData = dogs.find((d) => d.src === dogNameState);
  }, [dogNameState]);

  const { name, age, src, facts } = dogData;

  return (
    <>
      <h1>{name}</h1>
      <img src={images[src]} className="Dog-img" />
      <ul className="Dog-list">
        <li>Age: {age}</li>
        {facts.map((fact, i) => (
          <li key={i}>{fact}</li>
        ))}
      </ul>
    </>
  );
};

export default Dog;
