import React from "react";
import style from './Home.module.css'
import f1 from '../../assets/random_img/f1.png'

export default function Home() {
    return (
    <div className={style.container}>
      <div className={style.textos}>
        <img src={f1} className={style.titulo} alt="Imagen de F1" />
          <h2 className={style.subtitulos}>Historia del Mundial de F1</h2>
          <p className={style.texto2}>La Fórmula 1 es la principal competición de automovilismo internacional y el campeonato de motor más popular y prestigioso del mundo. Sin embargo, no siempre ha existido y no tuvo unos orígenes fáciles.

            La historia del automovilismo abarca desde el nacimiento de las primeras carreras a finales del S.XIX hasta la actualidad. En cambio no fue hasta mediados del siguiente siglo cuando se iniciara lo que hoy conocemos como F1.</p>

          <h2 className={style.subtitulos}>Fundacion</h2>
          <p className={style.texto2}>

            El inicio de la Fórmula 1 se remonta al año 1950, cuando la Federación Internacional del Automóvil (FIA) anunció la unión de varios Grandes Premios nacionales -con sede en París (Francia)- para crear un Campeonato Mundial de Pilotos.

            Ferrari, Alfa Romeo y Maserati eran las escuderías que entonces convivían y el primer Gran Premio se realizó el 13 de mayo de aquel año en el circuito de Silverstone. El italiano Giuseppe Farina fue el primer vencedor, que además consiguiera el primer Mundial de F1.</p>


          <h2 className={style.subtitulos}>Origenes</h2>
          <p className={style.texto2}>

            Los Grandes Premios tienen sus orígenes en las carreras automovilísticas surgidas en la misma Francia en 1894. Entonces se trataban de eventos individuales, sin conexión y en caminos de tierra, prácticamente sin ninguna norma.

            Ya de 1927 a 1934, el número de pruebas creció hasta alcanzar dieciocho en ese último año, el máximo antes de la Segunda Guerra Mundial, que frenó el crecimiento.

            Justo después del  conflicto bélico solo hubo cuatro carreras, pero ya se habían establecido una serie de reglas para las competiciones de Grand Prix, que debían obedecer tanto coches como pilotos. Se llamaron Fórmula, aunque no se concretaron hasta 1947 cuando la antigua AIACR se reorganizó pasándose a llamar la FIA.</p>
      </div>
    </div>
  );

}