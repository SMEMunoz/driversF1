import React from "react";
import style from "./Detail.module.css";
import { useNavigate } from "react-router-dom";

export default function Detail(props) {
    const { detalles} = props;
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/Corredores');
      };
    
    return (
        <div className={style.conteiner}>
            <div className={style.container1}>
            <button onClick={handleBackClick} className={style.bn}>← Volver</button>
            </div>
            <div className={style.container2}>
            <div className={style.textos}>
                <h2>ID: {detalles.id ?? "cargando.."}</h2>
                <h1>{detalles.name.surname ?? "cargando.."}</h1>
                <h2>Nombre: {detalles.name.forename ?? "cargando.."}</h2>
                <h2>Nacionalidad: {detalles.nationality ?? "cargando.."}</h2>
                <h2>Año de nacimiento: {detalles.dob ?? "cargando.."}</h2>
                <h2>Escuderias: {detalles.teams ?? "cargando.."}</h2>
                
            </div>
            <div className={style.personaje}>
                <img src={detalles.image.url ?? "cargando.."} alt={detalles.name} className={style.imagen}/>
                <h2>{detalles.descripcion ?? detalles.description ?? "cargando.."}</h2>
            </div>
            </div>
      </div>)

}