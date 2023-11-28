import React from "react";
import {Link} from 'react-router-dom';
import style from './NavBar.module.css';
import SearchBar  from "../SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";

export default function NavBar(props) {
    const {getDrivers, searchByName} = props;
    const navigate = useNavigate();
    const toHome = () => {
        navigate('/home');
    }

  return (
    <div className={style.NavBar}>
        <div className={style.menu}>
            <Link to={'/'} className={style.link}>
              <button className={style.bn3}>
                Inicio
              </button>
              </Link>
            <div to="/home" className={style.link}>
                <div className={style.dropdown}>
                    <button className={style.bn3} onClick={toHome}>
                    Home
                    </button>
                    <ul className={style.dropdownContent}>
                        <li>
                            <Link to="/corredores">
                                <button className={style.bn3} onClick={getDrivers}>
                                    Corredores
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/circuitos">
                                <button className={style.bn3}>
                                    Circuitos
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <Link to="/create" className={style.link}>
                <button className={style.bn3}>
                    Crear Corredor
                </button>
            </Link>
            <Link to="/games" className={style.link}>
                <button className={style.bn3}>
                    Games
                </button>
            </Link>
            <Link to="/about" className={style.link}>
                <button className={style.bn3}>
                    About
                </button>
            </Link>
        </div>
        <div className={style.SearchBar}>
            <SearchBar searchByName = {searchByName}/>
        </div>
    </div>
  );
} 