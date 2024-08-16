import React from "react";
import genres from "../musicDb";

const Card = ({ data }) => {
  const { input1, input2, selectedGenre } = data;

  const genre = genres.find((genre) => genre.name === selectedGenre);

  return (
    <div className='border-2 px-16 p-5 rounded-lg bg-gray-100 text-black'>
      <p>Hola! {input1}</p>
      <p>Usualmente escuchas tu musica en: {input2}</p>
      {selectedGenre ? (
        <div>
          <h3 className='text-xl mt-4'>
            Ya que te gusta el genero {selectedGenre}, te recomendamos...
          </h3>
          <ul className='list-disc pl-5'>
            {genre &&
              genre.songs.map((song, index) => <li key={index}>{song}</li>)}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Card;
