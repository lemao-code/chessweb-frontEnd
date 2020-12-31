import {ContainerAddMatch, InputAddMatch, FontNameAndRanking} from '../style/style'

function AddMatch () {
    return (
        <ContainerAddMatch>
            <FontNameAndRanking>Add Partida</FontNameAndRanking>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                <input style={{width: 25, height: 25}} type="checkbox" /> <label> <p style={{fontSize: 20, fontWeight: "bold", color: "white", marginLeft: 10}}>Empate</p></label>
            </div>
            <InputAddMatch placeholder="Vencedor" />
            <InputAddMatch placeholder="Derrotado" />
        </ContainerAddMatch>
    )
}

export default AddMatch