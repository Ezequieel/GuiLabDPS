import styles from "./page.module.css"; 

const Equipos = ({ equipos }) => {
  return ( 
    <div className={styles.container}> 
      <h2 className={styles.title}>Equipos de Fútbol</h2> 
      {equipos.map((equipo) => ( 
        <div key={equipo.id} className={styles.equipo}> 
          <h3 className={styles.nameclub}>{equipo.nombre}</h3> 
          <ul className={styles.listaJugadores}> 
            {equipo.plantilla.map((jugador) => ( 
              <li key={`${equipo.id}-${jugador.id}`} className={styles.jugador}> 
                <img src={jugador.foto} alt={jugador.nombre} className={styles.foto} />
                <div>
                  <strong>{jugador.nombre}</strong> 
                  <p>Altura: {jugador.altura}m | Peso: {jugador.peso}Kg</p> 
                </div>
              </li> 
            ))} 
          </ul> 
        </div> 
      ))} 
    </div> 
  ); 
}; 

export default function Home() { 
  const equiposData = [ 
    {
      id: 1, 
      nombre: "Real Madrid", 
      plantilla: [ 
        { id: 1, nombre: "Vinícius Jr", altura: "1.76", peso: "73", foto: "https://e00-xlk-ue-marca.uecdn.es/uploads/2024/09/06/17157691242083.png" }, 
        { id: 2, nombre: "Jude Bellingham", altura: "1.86", peso: "75", foto: "https://es.coachesvoice.com/wp-content/uploads/2023/05/bellingham_main-scaled.jpg" }, 
        { id: 3, nombre: "Toni Kroos", altura: "1.83", peso: "76", foto: "https://www.record.com.mx/sites/default/files/articulos/2024/10/28/record953.jpg" } 
      ]
    }, 
    {
      id: 2, 
      nombre: "Barcelona", 
      plantilla: [ 
        { id: 1, nombre: "Robert Lewandowski", altura: "1.85", peso: "81", foto: "https://img.asmedia.epimg.net/resizer/v2/4MJOYIAETUHKASRYJLMGVA2R6I.jpg?auth=abb9a18747a8ae1316aa924b38ac1258d85771018ce87ef10cfb5bba9a2fcca6&width=1472&height=1104&focal=1143%2C817" }, 
        { id: 2, nombre: "Pedri", altura: "1.74", peso: "60", foto: "https://e-noticies.cat/filesedc/uploads/image/post/pedri-jugando_1600_1067.jpg" }, 
        { id: 3, nombre: "Ronald Araújo", altura: "1.88", peso: "79", foto: "https://icdn.football-italia.net/wp-content/uploads/2025/01/fc-barcelona-v-ssc-napoli-round-.jpg" } 
      ]
    },
    {
      id: 3, 
      nombre: "Manchester City", 
      plantilla: [ 
        { id: 1, nombre: "Erling Haaland", altura: "1.94", peso: "88", foto: "https://images.daznservices.com/di/library/DAZN_News/2d/71/erling-haaland-man-city19082023_wpa7benjqoki1d2sm3o9rtk4t.jpg?t=1057835258" }, 
        { id: 2, nombre: "Kevin De Bruyne", altura: "1.81", peso: "70", foto: "https://upload.wikimedia.org/wikipedia/commons/d/d8/2021-12-07_Fu%C3%9Fball%2C_M%C3%A4nner%2C_UEFA_Champions_League%2C_RB_Leipzig_-_Manchester_City_FC_1DX_2782_by_Stepro_%28cropped%29.jpg" }, 
        { id: 3, nombre: "Phil Foden", altura: "1.71", peso: "64", foto: "https://img.vavel.com/foden-1707173407109.jpeg" }
      ]
    }
  ]; 

  return (
    <main className={styles.main}> 
      <h1>Equipos de Fútbol</h1> 
      <Equipos equipos={equiposData} /> 
    </main> 
  ); 
}
