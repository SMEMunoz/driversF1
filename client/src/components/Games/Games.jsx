import React from 'react';
import style from './Games.module.css';

export default function Game() {
  return (
    <div className={style.container}>
        <div className={style.gameContainer}>
            <iframe
            title="Super Star Car"
            src="https://www.minijuegos.com/embed/super-star-car"
            style={{ width: '100%', height: '100%' }}
            frameBorder="0"
            allowFullScreen
            ></iframe>
        </div>
        <div className={style.gameContainer}>
            <iframe 
            title='Grand Prix Racing Online' 
            src='https://www.minijuegos.com/embed/grand-prix-racing-online' 
            className={style.imgGame}
            frameborder='0' 
            allowfullscreen></iframe>
        </div>
        <div className={style.gameContainer}>
            <iframe
            title="3d-formula-racing"
            src="https://www.minijuegos.com/embed/3d-formula-racing"
            style={{ width: '100%', height: '100%' }}
            frameBorder="0"
            allowFullScreen
            ></iframe>
        </div>
        <div className={style.gameContainer}>
            <iframe
            title="grand-race"
            src="https://www.minijuegos.com/embed/grand-race"
            style={{ width: '100%', height: '100%' }}
            frameBorder="0"
            allowFullScreen
            ></iframe>
        </div>
    </div>
  );
}