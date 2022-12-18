import { useState, useEffect } from "react";
import EmptyFields from "./EmptyFields";

function Form({ peliculas, setPeliculas, pelicula, setPelicula }) {
  const [nombre, setNombre] = useState("");
  const [opinion, setOpinion] = useState("");
  const [fecha, setFecha] = useState("");
  const [plataforma, setPlataforma] = useState("");
  const [clasificacion, setClasificacion] = useState("");
  const [calificacion, setCalificacion] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

  useEffect(() => {
    if (Object.keys(pelicula).length > 0) {
      setNombre(pelicula.nombre);
      setOpinion(pelicula.opinion);
      setFecha(pelicula.fecha);
      setPlataforma(pelicula.plataforma);
      setClasificacion(pelicula.clasificacion);
      setCalificacion(pelicula.calificacion);
    }
  }, [pelicula]);

  const handleSubmit = (e) => {
    e.preventDefault();

    /* Revisar que nada este vacío */
    if (
      [
        nombre,
        opinion,
        fecha,
        plataforma,
        clasificacion,
        calificacion,
      ].includes("")
    ) {
      setIsEmpty(true);

      setTimeout(() => {
        setIsEmpty(false);
      }, 3000);

      /* Creamos el objeto */
      const objetoPelicula = {
        nombre,
        opinion,
        fecha,
        plataforma,
        clasificacion,
        calificacion,
      };

      /* Revisamos si vamos editar o agregar */
      if (pelicula.id) {
        // Editando el registro
        console.log(pelicula.id);
        objetoPelicula.id = pelicula.id;
        console.log(objetoPelicula);
        console.log(pelicula);

        const peliculasActualizadas = peliculas.map((peliculaState) =>
          peliculaState.id === pelicula.id ? objetoPelicula : peliculaState
        );

        setPeliculas(peliculasActualizadas);
        setPelicula({});
      } else {
        //Nuevo registro
        objetoPelicula.id = generarId();
        setPeliculas([...peliculas, objetoPelicula]);
      }

      //Reiniciar formulario
      setNombre("");
      setOpinion("");
      setFecha("");
      setPlataforma("");
      setClasificacion("");
      setCalificacion("");
    }
  };

  return (
    <div className="flex justify-center items-center w-full lg:w-1/2">
      <div className="lg:w-[80%] w-[95%] lg:mt-0 mt-12 ">
        <h1 className="text-white text-2xl font-semibold font-poppins">
          Lista de peliculas
        </h1>
        <p className="text-white font-poppins text-sm">
          Aquí se muestra una lista de las películas que haz visto.
          <br /> Puedes añadir información acerca de la película.
        </p>

        <form onSubmit={handleSubmit} className="mt-11">
          {isEmpty && (
            <EmptyFields textError={"Hay campos vacíos, completalos."} />
          )}

          {/* ==== Nombre de la pelícla ===== */}
          <div className="floating-input mb-5 relative">
            <input
              type="text"
              id="name"
              className="pt-8 border-2 text-white border-main-blue focus:outline-none rounded-md focus:border-gray-500 focus:ring-gray-500 focus:shadow-sm w-full p-3 h-16 bg-transparent"
              value={nombre}
              onChange={(e) => {
                setNombre(e.target.value);
              }}
            />
            <label
              htmlFor="name"
              className="opacity-75 scale-75 -translate-y-3 translate-x-1 text-main-gray font-semibold absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out "
            >
              Nombre
            </label>
          </div>
          {/* ==== Opinión de la película */}
          <div className="floating-input mb-5 relative">
            <textarea
              type="text"
              id="name"
              className="pt-8 border-2 text-white border-main-blue focus:outline-none rounded-md focus:border-gray-500 focus:ring-gray-500 focus:shadow-sm w-full p-3 h-[116px] bg-transparent resize-none"
              value={opinion}
              onChange={(e) => {
                setOpinion(e.target.value);
              }}
            />
            <label
              htmlFor="name"
              className="opacity-75 scale-75 -translate-y-4 translate-x-1 text-main-gray font-semibold absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out "
            >
              Opinión
            </label>
          </div>
          <div className="lg:grid grid-cols-2 gap-x-4">
            {/* ==== Fecha ===== */}
            <div className="floating-input mb-5 relative">
              <input
                type="date"
                id="fecha"
                className="pt-8 border-2 text-sm text-white border-main-blue focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16 bg-transparent"
                value={fecha}
                onChange={(e) => {
                  setFecha(e.target.value);
                }}
              />
              <label
                htmlFor="name"
                className="opacity-75 scale-75 -translate-y-3 translate-x-1 text-main-gray font-semibold absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out "
              >
                Fecha de visualización
              </label>
            </div>
            {/* ==== Plataforma ===== */}
            <div className="floating-input mb-5 relative">
              <select
                type="text"
                id="name"
                className="pt-8 border-2 text-white border-main-blue focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-[72px] bg-transparent"
                value={plataforma}
                onChange={(e) => {
                  setPlataforma(e.target.value);
                }}
              >
                <option disabled value="">
                  {" "}
                  Selecciona la plataforma{" "}
                </option>
                <option className="bg-secondary-gray" value="netflix">
                  Netflix
                </option>
                <option className="bg-secondary-gray" value="hbo">
                  HBO
                </option>
                <option className="bg-secondary-gray" value="disneyplus">
                  Disney+
                </option>
                <option className="bg-secondary-gray" value="paramount">
                  Paramount+
                </option>
              </select>
              <label
                htmlFor="name"
                className="opacity-75 scale-75 -translate-y-3 translate-x-1 text-main-gray font-semibold absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out "
              >
                Plataforma
              </label>
            </div>
          </div>

          <div className="lg:grid grid-cols-2 gap-x-4">
            <div className="floating-input mb-5 relative">
              <select
                type="text"
                id="name"
                className="pt-8 border-2 text-white border-main-blue focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 bg-transparent h-[72px]"
                value={clasificacion}
                onChange={(e) => {
                  setClasificacion(e.target.value);
                }}
              >
                <option disabled value="">
                  {" "}
                  Selecciona la clasifiación{" "}
                </option>
                <option className="bg-secondary-gray indent-8" value="A">
                  A
                </option>
                <option className="bg-secondary-gray" value="B">
                  B
                </option>
                <option className="bg-secondary-gray" value="B15">
                  B15
                </option>
                <option className="bg-secondary-gray" value="R">
                  R
                </option>
              </select>
              <label
                htmlFor="name"
                className="opacity-75 scale-75 -translate-y-3 translate-x-1 text-main-gray font-semibold absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out "
              >
                Clasificación
              </label>
            </div>

            <div className="floating-input mb-5 relative">
              <select
                type="text"
                id="name"
                className="pt-8 border-2 text-white border-main-blue focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 bg-transparent h-[72px]"
                value={calificacion}
                onChange={(e) => {
                  setCalificacion(e.target.value);
                }}
              >
                <option disabled value="">
                  {" "}
                  Selecciona la calificación{" "}
                </option>
                <option className="bg-secondary-gray indent-8" value="1">
                  Mala
                </option>
                <option className="bg-secondary-gray" value="2">
                  Regular
                </option>
                <option className="bg-secondary-gray" value="3">
                  Buena
                </option>
                <option className="bg-secondary-gray" value="4">
                  Muy buena
                </option>
                <option className="bg-secondary-gray" value="5">
                  Perfecta
                </option>
              </select>
              <label
                htmlFor="name"
                className="opacity-75 scale-75 -translate-y-3 translate-x-1 text-main-gray font-semibold absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out "
              >
                Calificación
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-secondary-gray text-white p-3 rounded-md font-semibold font-poppins h-16 hover:bg-[#4F5155] transition-all"
          >
            {pelicula.id ? "Guardar cambios" : "Agregar película"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
