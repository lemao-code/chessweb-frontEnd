import {PerfilWords} from '../style/style'
export default function Contras ({contras}) {
    const idperfil = localStorage.getItem('id')
    function getNames(id) {
        if(id === "p1") {
            return "Thiago"
        }
        if(id === "p2") {
            return "Rick"
        }
        if(id === "p3") {
            return "Joao"
        }
        if(id === "p4") {
            return "Daniel"
        }
        if(id === "p5") {
            return "Vitor"
        }
    }
    const players = Object.entries(contras)
   return (
       <div >
           { players.map((element, i) => {
               let _key
        
               if(element[1][0].id_player == idperfil) {
                   _key =  0
               }else {
                   _key = 1
               }
            
        return  (
                <div key={i}>
                    <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}> 
                            <PerfilWords>
                                {getNames(element[0])}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {element[1][_key].vitorias}&nbsp; /&nbsp; {element[1][_key].derrotas} &nbsp;&nbsp;|&nbsp;&nbsp; {element[1][_key].empates}
                            </PerfilWords>
                    </div>
                    
                </div>
            )
        })}
       </div>
   )
     
}