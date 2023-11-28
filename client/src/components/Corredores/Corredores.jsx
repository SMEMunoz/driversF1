import React, { useState, useEffect }  from "react";
import style from "./Corredores.module.css"
import Corredor from "../Corredor/Corredor";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { orderCards, orderDob, baseDatos, selectTeams } from "../../redux/actions";

export default function Corredores(props){

    let {detail} = props
    const driversGlobal = useSelector((state) => state.driversGlobal);
    const teamsGlobal = useSelector((state) => state.allteams);

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
  

    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1);
    const [cursorPosition, setCursorPosition] = useState(1);

    let corredoresPorPagina

    if(maxWidth){corredoresPorPagina = 4;}
    else{corredoresPorPagina = 9;}
    
    const maxPagesToShow = 5;

    // Calcular el índice de inicio y final de los corredores en la página actual
    const indexOfLastCorredor = currentPage * corredoresPorPagina;
    const indexOfFirstCorredor = indexOfLastCorredor - corredoresPorPagina;
    const corredoresEnPagina = driversGlobal.slice(indexOfFirstCorredor, indexOfLastCorredor);
    const totalPages = Math.ceil(driversGlobal.length / corredoresPorPagina);

    const nextPage = () => {
        if (currentPage < totalPages) {
          setCurrentPage(currentPage + 1);
          // Mueve el cursor hacia la derecha
          if (cursorPosition < maxPagesToShow) {
            setCursorPosition(cursorPosition + 1);
          }
        }
      };

      const prevPage = () => {
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
          // Mueve el cursor hacia la izquierda
          if (cursorPosition > 1) {
            setCursorPosition(cursorPosition - 1);
          }
        }
      };

      const pageRange = () => {
        const pagesBefore = cursorPosition - 1;
        const pagesAfter = maxPagesToShow - cursorPosition;
        let startPage = currentPage - pagesBefore;
        if (startPage < 1) {
          startPage = 1;
        }
        let endPage = currentPage + pagesAfter;
        if (endPage > totalPages) {
          endPage = totalPages;
        }
        return Array.from({ length: endPage - startPage + 1 }, (_, index) =>
          startPage + index
        );
      };

    const handleOrder = (e) => {
      dispatch(orderCards(e.target.value))
  
  }

    const handleFechas = (e) => {
      dispatch(orderDob(e.target.value))

  }

    const baseApi = (e) => {
      dispatch(baseDatos(e.target.value))

  }

    const teams = (e) => {
      dispatch(selectTeams(e.target.value))

}

    return(
        <div className={style.container}>
        <div className={style.filtros}>
            <select onChange={handleOrder}>
                <option value="">Ordenar por nombre</option>
                <option value="Ascendente" >Z-A</option>
                <option value="desc">A-Z</option>
            </select>
            <select onChange={handleFechas}>
                <option value="">Ordenar por fecha nacimiento</option>
                <option value="asc">Ascendente</option>
                <option value="desc">Descendente</option>
            </select>
            <select onChange={baseApi}>
              <option value="All">Todos los pilotos</option>
                <option value="baseDatos">Corredor de base de datos</option>
                <option value="api">corredores de la API</option>
            </select>
            <select onChange={teams}>
                <option value="All">Todos los equipos</option>
                {teamsGlobal.map((team) => (
                        <option key={team.id} value={team.name}>{team.name}</option>))}
            </select>
        </div>
        <div className={style.corredores}>
            {corredoresEnPagina.length > 0 ? (
                corredoresEnPagina.map((driver) => (
                <Corredor key={driver.id} driver={driver} detail={detail}/>
                ))
            ) : (
                <p>No hay corredores para mostrar.</p>
            )}
        </div>
        {/* Paginación */}
        <div className={style.pagination}>
        <button onClick={prevPage} className={style.bn4}>Anterior</button>
        {currentPage > cursorPosition && (
          <>
            
            <button
              key={1}
              onClick={() => {
                setCurrentPage(1);
                setCursorPosition(1);
              }}
            >
              1
            </button>
            <span>...</span>
          </>
        )}
        {pageRange().map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => {
              setCurrentPage(pageNumber);
              setCursorPosition(cursorPosition - (currentPage - pageNumber));
            }}
            className={currentPage === pageNumber ? style.active : ""}
          >
            {pageNumber}
          </button>
        ))}
        {currentPage + cursorPosition <= totalPages && (
          <>
            <span>...</span>
            <button
              key={totalPages}
              onClick={() => {
                setCurrentPage(totalPages);
                setCursorPosition(maxPagesToShow);
              }}
            >
              {totalPages}
            </button>
          </>
        )}
        <button onClick={nextPage} className={style.bn4}>Siguiente</button>
      </div>
        
    </div>
    )

}