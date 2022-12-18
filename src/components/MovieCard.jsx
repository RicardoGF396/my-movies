import Hbo from "./../assets/hbo.svg";
import Netflix from "./../assets/netflix.svg";
import Paramount from "./../assets/paramount.svg";
import Disneyplus from "./../assets/disney.svg";
import Eliminar from "./../assets/eliminar.svg";
import Editar from "./../assets/editar.svg";
import Visto from "./../assets/visto.svg";
import Star from "./../assets/star.svg";

function MovieCard({ pelicula, setPelicula, eliminarPelicula }) {

    let arrStars = [];
    let imagePlatform;
    const { nombre, opinion, fecha, plataforma, clasificacion, calificacion, id } = pelicula;
    const stars = parseInt(calificacion);


    for (let i = 0; i < stars; i++) {
        arrStars.push(i);
    }

    const starImage = arrStars.map((star) => {
        return <img key={star} src={Star} />;
    });

    switch (plataforma) {
        case "hbo": 
            imagePlatform = Hbo
            break;
        case "netflix": 
            imagePlatform = Netflix
            break;
        case "paramount": 
            imagePlatform = Paramount
            break;
        case "disneyplus": 
            imagePlatform = Disneyplus
            break;
    }

    const handleEliminar = () => {
      const respuesta = confirm('¿Seguro que quieres eliminar esta película?')
      respuesta ? eliminarPelicula(id) : null;
    }

  return (
    <div className="flex w-full justify-center">
      <div className="lg:w-[85%] w-[95%] bg-main-blue py-6 px-8 radius rounded-xl lg:grid grid-cols-7 gap-4 mb-6 relative">
        <div className="lg:flex justify-center items-center mb-2 lg:mb-0">
          <img className="col-span-1" src={imagePlatform} alt="hbo"></img>
        </div>
        <div className="col-span-5">
          <h3 className="text-white text-base font-poppins font-semibold">
            {" "}
            {nombre}{" "}
          </h3>
          <p className="text-gray-300 font-light font-poppins text-sm text-justify mt-2">
            {opinion}
          </p>
          <div className="flex gap-x-1 mt-2 text-main-gray">
            <img src={Visto} />
            <p className="text-xs font-semibold font-poppins">
              Visto el {fecha}{" "}
            </p>
          </div>
          <div className="flex gap-x-2 mt-2 pb-6 lg:pb-0">{starImage}</div>
        </div>
        <div className="col-span-1 lg:flex justify-between items-end flex-col">
          <div className="border rounded-full w-9 h-9 flex justify-center items-center text-white font-poppins font-medium lg:static absolute top-4 right-4">
            {clasificacion}
          </div>
          <div className="flex gap-x-4 lg:mt-0 mt-4 absolute right-4 bottom-4 lg:static ">
            <img
              className="option-card cursor-pointer transition-all"
              alt="editar"
              src={Editar}
              onClick={() => setPelicula(pelicula)}
            />
            <img
              className="option-card cursor-pointer transition-all"
              alt="eliminar"
              onClick={ handleEliminar }
              src={Eliminar}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
