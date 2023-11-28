import React,{useEffect, useState}  from "react";
import DriversFounds from "../DriversFounds/DriversFounds";
import { Link } from "react-router-dom";
import style from "./DriverFound.module.css";

export default function  DriverFound(props) {
    const {driver, detail} = props

    const [maxWidth, setMaxWidth] = useState(false)

    const handleResize = () => {
      if (window.innerWidth <= 520) {
          setMaxWidth(true);
      } else {
          setMaxWidth(false);
      }
  };

    useEffect(() => {
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => {
          window.removeEventListener("resize", handleResize);
      };
  }, []);

    return (
        <div className={style.card}>
              <img src={driver.image.url} alt="" />
              <div className={style.cardContent}>
                <h2 className={style.cardTitle}>{driver.name.surname}</h2>
                {!maxWidth ? (
                    <>
                        <h2 className={style.cardDescription}>{driver.name.forename}</h2>
                        <h2 className={style.cardDescription}>Fecha Nacimiento: {driver.dob}</h2>
                        <h2 className={style.cardDescription}>Team: {driver.teams}</h2>
                    </>
                ) : null}
                <button onClick={()=>detail(driver.id)} className={style.button}>Ver Detalles</button>
              </div>
        </div>
      );
}

