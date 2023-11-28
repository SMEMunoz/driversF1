import React from "react";
import style from "./Error.module.css"

export default function Error() {
    return (
    <div className={style.container}>
      <h1>Oh ! Que crees coleguilla ? !</h1>
      <p className={style.pi}>Direccion errada, mejor busca un corredor o dirigete a otra seccion</p> 
    </div>
  );

}