import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import MovieCard from "./components/MovieCard";

function App() {
  /* Conjunto de películas */
  const [peliculas, setPeliculas] = useState(JSON.parse(localStorage.getItem('peliculas')) ?? []);
  /* Película a editar */
  const [pelicula, setPelicula] = useState({});

  useEffect(() => {
    localStorage.setItem('peliculas',JSON.stringify(peliculas))
  }, [peliculas])

  const eliminarPelicula = (id) => {
    console.log(id);
    const peliculasActualizadas = peliculas.filter(pelicula => pelicula.id !== id)
    setPeliculas(peliculasActualizadas)
  }

  return (
    <div className="App w-full h-full bg-[#202123] flex lg:flex-row flex-col px-8 lg:px-0">
      <Form 
        peliculas={peliculas} 
        setPeliculas={setPeliculas}
        pelicula={pelicula}
        setPelicula={setPelicula}
      />

      <div className="justify-center w-full lg:w-1/2 lg:h-screen py-12 lg:overflow-y-scroll items-center">
        {peliculas.length == 0 ? (
          <div className="lg:w-[80%] w-[100%] flex h-full items-center justify-center text-center text-main-gray text-2xl font-semibold opacity-70">
            No hay peliculas agregadas
          </div>
        ) : (
          peliculas.map(pelicula => (
            <MovieCard 
              key={pelicula.id}
              pelicula={pelicula}
              setPelicula = {setPelicula}
              eliminarPelicula = {eliminarPelicula}
               />
          ))
        )}     
      </div>

      
    </div>
    
  );
}

export default App;
