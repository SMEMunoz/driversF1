import React from "react";
import style from "./Circuitos.module.css";

// export default function Circuitos() {
//     return (
//         <div className={style.container}>
//             <h1 className={style.titulo}>Circuitos temporada 2023</h1>
//             <div className={style.circuitos}>
//                 <div>
//                     <p className={style.p}>1 - GP de Bahrein Bahrain</p>
//                     <p className={style.p}>2 - GP de Arabia Saudí</p> 
//                     <p className={style.p}>3 - GP de Australia </p>
//                     <p className={style.p}>4 - GP de Azerbaiyán</p> 
//                     <p className={style.p}>5 - GP de Miami United States</p>	
//                     <p className={style.p}>6 - GP de Emilia Romagna</p> 
//                     <p className={style.p}>7 - GP de Mónaco Monaco</p>	
//                     <p className={style.p}>8 - GP de España Spain</p>	
//                     <p className={style.p}>9 - GP de Canadá Canada</p>	
//                     <p className={style.p}>10 - GP de Austria Austria</p>	
//                     <p className={style.p}>11 - GP de Gran Bretaña</p> 
//                     <p className={style.p}>12 - GP de Hungría</p>
//                     <p className={style.p}>13 - GP de Bélgica</p> 
//                     <p className={style.p}>14 - GP de los Países Bajos</p> 
//                     <p className={style.p}>15 - GP de Italia</p> 
//                     <p className={style.p}>16 - GP de Singapur</p> 
//                     <p className={style.p}>17 - GP de Japón</p> 
//                     <p className={style.p}>18 - GP de Qatar</p> 
//                     <p className={style.p}>19 - GP de Estados Unidos</p> 
//                     <p className={style.p}>20 - GP de México</p> 
//                     <p className={style.p}>21 - GP de Brasil</p> 
//                     <p className={style.p}>22 - GP de Las Vegas</p> 
//                     <p className={style.p}>23 - GP de Abu Dhabi</p>
//                 </div>
//                 <div>
//                     <p className={style.p2}>1 - Circuito Internacional de Sakhir</p>
//                     <p className={style.p2}>2 - Circuito Urbano de Yeda</p>
//                     <p className={style.p2}>3 - Circuito de Albert Park</p>
//                     <p className={style.p2}>4- Circuito Callejero de Bakú</p>
//                     <p className={style.p2}>5- Autódromo Internacional de Miami</p>
//                     <p className={style.p2}>6- Enzo e Dino Ferrari (Imola)</p>
//                     <p className={style.p2}>7- Circuito de Mónaco</p>
//                     <p className={style.p2}>8 - Circuit de Barcelona-Catalunya</p>
//                     <p className={style.p2}>9 - Circuit Gilles-Villeneuve</p>
//                     <p className={style.p2}>10 - Red Bull Ring</p>
//                     <p className={style.p2}>11 - Silverstone</p>
//                     <p className={style.p2}>12 - Hungaroring</p>
//                     <p className={style.p2}>13 - Spa-Francorchamps</p>
//                     <p className={style.p2}>14 - Zandvoort</p>
//                     <p className={style.p2}>15 - Monza</p>
//                     <p className={style.p2}>16 - Marina Bay</p>
//                     <p className={style.p2}>17 - Suzuka</p>
//                     <p className={style.p2}>18 - Circuito Internacional de Losail</p>
//                     <p className={style.p2}>19 - Circuito de las Américas</p>
//                     <p className={style.p2}>20 - Autódromo Hermanos Rodríguez</p>
//                     <p className={style.p2}>21 - Autódromo José Carlos Pace (Interlagos)</p>
//                     <p className={style.p2}>22 - Circuito de Las Vegas</p>
//                     <p className={style.p2}>23 - Yas Marina</p>
//                 </div>
//                 <div>
//                     <p className={style.p3}>1 - 5 de marzo de 2023</p>
//                     <p className={style.p3}>2 - 19 de marzo de 2023</p>
//                     <p className={style.p3}>3 - 2 de abril de 2023</p>
//                     <p className={style.p3}>4 - 30 de abril de 2023</p>
//                     <p className={style.p3}>5 - 7 de mayo de 2023</p>
//                     <p className={style.p3}>6 - CANCELADO</p>
//                     <p className={style.p3}>7 - 28 de mayo de 2023</p>
//                     <p className={style.p3}>8 - 4 de junio de 2023</p>
//                     <p className={style.p3}>9 - 18 de junio de 2023</p>
//                     <p className={style.p3}>10 - 2 de julio de 2023</p>
//                     <p className={style.p3}>11 - 9 de julio de 2023</p>
//                     <p className={style.p3}>12 - 23 de julio de 2023</p>
//                     <p className={style.p3}>13 - 30 de julio de 2023</p>
//                     <p className={style.p3}>14 - 27 de agosto de 2023</p>
//                     <p className={style.p3}>15 - 3 de septiembre de 2023</p>
//                     <p className={style.p3}>16 - 17 de septiembre de 2023</p>
//                     <p className={style.p3}>17 - 24 de septiembre de 2023</p>
//                     <p className={style.p3}>18 - 8 de octubre de 2023</p>
//                     <p className={style.p3}>19 - 22 de octubre de 2023</p>
//                     <p className={style.p3}>20 - 29 de octubre de 2023</p>
//                     <p className={style.p3}>21 - 5 de noviembre de 2023</p>
//                     <p className={style.p3}>22 - 18 de noviembre de 2023</p>
//                     <p className={style.p3}>23 - 26 de noviembre de 2023</p>
//                 </div>
//             </div>
//         </div>
        
//     );
    
// }

const circuitosData = {
    circuitos: [
        "1 - GP de Bahrein Bahrain",
        "2 - GP de Arabia Saudí",
        "3 - GP de Australia",
        "4 - GP de Azerbaiyán",
        "5 - GP de Miami United States",
        "6 - GP de Emilia Romagna",
        "7 - GP de Mónaco Monaco",
        "8 - GP de España Spain",
        "9 - GP de Canadá Canada",
        "10 - GP de Austria Austria",
        "11 - GP de Gran Bretaña",
        "12 - GP de Hungría",
        "13 - GP de Bélgica",
        "14 - GP de los Países Bajos",
        "15 - GP de Italia",
        "16 - GP de Singapur",
        "17 - GP de Japón",
        "18 - GP de Qatar",
        "19 - GP de Estados Unidos",
        "20 - GP de México",
        "21 - GP de Brasil",
        "22 - GP de Las Vegas",
        "23 - GP de Abu Dhabi",
    ],
    circuitosDescripcion: [
        "1 - Circuito Internacional de Sakhir",
        "2 - Circuito Urbano de Yeda",
        "3 - Circuito de Albert Park",
        "4 - Circuito Callejero de Bakú",
        "5 - Autódromo Internacional de Miami",
        "6 - Enzo e Dino Ferrari (Imola)",
        "7 - Circuito de Mónaco",
        "8 - Circuit de Barcelona-Catalunya",
        "9 - Circuit Gilles-Villeneuve",
        "10 - Red Bull Ring",
        "11 - Silverstone",
        "12 - Hungaroring",
        "13 - Spa-Francorchamps",
        "14 - Zandvoort",
        "15 - Monza",
        "16 - Marina Bay",
        "17 - Suzuka",
        "18 - Circuito Internacional de Losail",
        "19 - Circuito de las Américas",
        "20 - Autódromo Hermanos Rodríguez",
        "21 - Autódromo José Carlos Pace (Interlagos)",
        "22 - Circuito de Las Vegas",
        "23 - Yas Marina",
    ],
    fechas: [
        "1 - 5 de marzo de 2023",
        "2 - 19 de marzo de 2023",
        "3 - 2 de abril de 2023",
        "4 - 30 de abril de 2023",
        "5 - 7 de mayo de 2023",
        "6 - CANCELADO",
        "7 - 28 de mayo de 2023",
        "8 - 4 de junio de 2023",
        "9 - 18 de junio de 2023",
        "10 - 2 de julio de 2023",
        "11 - 9 de julio de 2023",
        "12 - 23 de julio de 2023",
        "13 - 30 de julio de 2023",
        "14 - 27 de agosto de 2023",
        "15 - 3 de septiembre de 2023",
        "16 - 17 de septiembre de 2023",
        "17 - 24 de septiembre de 2023",
        "18 - 8 de octubre de 2023",
        "19 - 22 de octubre de 2023",
        "20 - 29 de octubre de 2023",
        "21 - 5 de noviembre de 2023",
        "22 - 18 de noviembre de 2023",
        "23 - 26 de noviembre de 2023",
    ],
};
export default function Circuitos() {
    return (
        <div className={style.container}>
            <h1 className={style.titulo}>Circuitos temporada 2023</h1>
            <table >
                <thead>
                    <tr >
                        <th>GP</th>
                        <th>Circuito</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: 23 }, (_, index) => (
                        <tr key={index + 1}>
                            <td>{circuitosData.circuitos[index]}</td>
                            <td>{circuitosData.circuitosDescripcion[index]}</td>
                            <td>{circuitosData.fechas[index]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}