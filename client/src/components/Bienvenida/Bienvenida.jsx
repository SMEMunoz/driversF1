import React from "react";
import style from "./Bienvenida.module.css";
import { Link } from "react-router-dom";
import intro from "../../assets/videos/intro.mp4";
import auto1Image from "../../assets/random_img/auto1.png";
import auto2Image from "../../assets/random_img/auto1.png";
import { useNavigate } from "react-router-dom";
import {useState, useEffect} from "react"; 

export default function Bienvenida() {
    const navigate = useNavigate();
    const [mostrarVideo, setMostrarVideo] = useState(true); // Estado para controlar la visibilidad del video

    const saltarVideo = () => {
        setMostrarVideo(false); // Oculta el video al hacer clic en el botón
    };

    const handleVideoEnded = () => {
        setMostrarVideo(false); // Oculta el video al finalizar la reproducción
    };

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //     setMostrarVideo(false); // Oculta el video después de un tiempo (ajusta según tus necesidades)
    //     }, 5000); // Duración de la visualización de los autos (ajusta según tus necesidades)
    //     return () => clearTimeout(timer);
    // }, []);

      return (
        <div className={style.pageContainer}>
          {mostrarVideo && (
            <div>
              <video
                className={style.video}
                controls
                frameBorder="0"
                allowFullScreen
                autoPlay
                muted
                onEnded={handleVideoEnded}
              >
                <source src={intro} type="video/mp4" />
                Tu navegador no soporta la reproducción de video.
              </video>
              <div className={style.fondoBoton}>
                <Link className={style.saltar} onClick={saltarVideo}>
                Saltar video
              </Link>
              </div>
              
            </div>
          )}
          {!mostrarVideo && (
            <div>
                <img src={auto1Image} alt="Auto 1" className={`${style.auto} auto`} />
                <img src={auto1Image} alt="Auto 2" className={`${style.auto2} auto`} />
                <img src={auto1Image} alt="Auto 2" className={`${style.auto3} auto`} />
                <img src={auto1Image} alt="Auto 2" className={`${style.auto4} auto`} />
                <div className={`${style.lights} auto`} />
                <div className={`${style.lights1} auto`} />
                <div className={`${style.lights2} auto`} />
                <div className={`${style.lights3} auto`} />
                <h1 className={style.titulo}>FORMULA 1</h1>
                
                <div className={style.subOpciones}>
                    <Link className={`${style.ingreso} ${style.enlaceMenu}`} to="/home">
                    I N G R E S A R
                    </Link>
                    <Link className={`${style.login} ${style.enlaceMenu}`} to="/login">
                        L O G I N
                    </Link>
                    <Link className={`${style.registro} ${style.enlaceMenu}`} to="/register">
                        R E G I S T R O
                    </Link>
                </div>
                <footer className={style.footer}>
                    Landing Page maquetada con fines demostrativos, todos los derechos de F1 son una marca registrada y pertenecen a su respectivos poseedores de licencia. Creador web: Muñoz, Sergio Matias Emilio, mas informacion dirigirse a la seccion About.
                </footer>
            </div>
          )}
        </div>
      );

}