import React from "react";
import style from './About.module.css'
import {Link} from 'react-router-dom'

export default function About () {
    return (
        <div className={style.container}>
            <div className={style.conteinerImagen}>
            <img className={style.imagen} src="https://storage.cloud.google.com/foto_perfil/FOTO%20PERFIL.jpg"></img>
            </div>
            <div className={style.textos}>
            <h2 className={style.titulo}>Acerca de Mí</h2>
            <div className={style.texto}>
                <p>
                    Hola, soy Sergio Matias Emilio, Muñoz, un apasionado desarrollador FULL STACK con experiencia en diversas tecnologías de desarrollo, incluyendo React, Express y más. Mi objetivo es crear soluciones innovadoras y efectivas para los desafíos de desarrollo web.
                
                    Algunas de mis habilidades y conocimientos incluyen:
                </p>
                <ul className={style.lista}>
                    <li>Desarrollo de aplicaciones web utilizando React y otras bibliotecas de JavaScript.</li>
                    <li>Construcción de servidores y APIs con Express y Node.js.</li>
                    <li>Integración de bases de datos, incluyendo SQL y NoSQL, para almacenar y recuperar datos de manera eficiente.</li>
                    <li>Trabajo con tecnologías front-end como HTML, CSS y JavaScript para crear interfaces de usuario atractivas y receptivas.</li>
                    <li>Experiencia en el uso de herramientas de control de versiones, como Git, para gestionar y colaborar en proyectos de desarrollo.</li>
                </ul>
            </div>
            <div className={style.contacto}>
                <p>
                    Whatsapp: +54-2616603249
                    
                </p>
                <p>
                    Email: aeroxxdsg@gmail.com
                </p>
                <a href="https://www.linkedin.com/in/sergio-mu%C3%B1oz-84838b280" target="_blank" rel="noopener noreferrer">
                    LinkdIn: aeroxxdsg@gmail.com
                </a>
            </div>
            </div>
        </div>
    )
}