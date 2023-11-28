import React from "react";
import style from "./Success.module.css";

export default function Success() {
    return (
    <div className={style.container}>
      <h1>Corredor creado correctamente !</h1>
      <div className={style.Success}>
      <button className={style.bn}>Todos los corredores</button>
      </div>
    </div>
  );

}