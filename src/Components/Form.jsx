import React, { useState } from "react";
import Input from "./Input";
import Card from "./Card";
import genres from "../musicDb";

const Formulario = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (input1.length < 3 || input1.startsWith(" ")) {
      setError(
        "Tu nombre debe contener 3 letras o más y no debe empezar con un espacio"
      );
      return;
    }

    if (input2.length < 6) {
      setError(
        "El dispositivo donde escuchas música debe contener 6 o más letras"
      );
      return;
    }
    if (selectedGenre == "") {
      setError("Escoje un genero");
      return;
    }

    setError("");
    setData({ input1, input2, selectedGenre });
  };

  return (
    <div className='flex flex-col justify-center items-center h-[100vh] gap-5'>
      <h1 className='text-2xl '>Te recomendamos música :)</h1>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <Input
          label='Ingresa tu nombre'
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
          placeholder='Pepito'
        />
        <Input
          label='En qué dispositivo escuchas música habitualmente'
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
          placeholder='Dato 2'
        />
        <div>
          <label>Selecciona un género musical</label>
          <select
            id='genre'
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
            className='mt-1 text-black block w-full border border-gray-300 rounded-lg p-2'
          >
            <option value=''>Selecciona un género</option>
            {genres.map((genre) => (
              <option key={genre.name} value={genre.name}>
                {genre.name}
              </option>
            ))}
          </select>
        </div>
        <button
          type='submit'
          className='bg-blue-500 w-full text-white rounded-lg p-2'
        >
          Enviar
        </button>
      </form>
      {error && <p className='text-red-500'>{error}</p>}
      {data ? <Card data={data} /> : null}
    </div>
  );
};

export default Formulario;
