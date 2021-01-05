import {ContainerAddMatch, InputAddMatch, FontNameAndRanking, ButtonSubmit} from '../style/style'

function AddMatch () {
    
    return (
        <ContainerAddMatch>
            <FontNameAndRanking>Add Partida</FontNameAndRanking>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                <input style={{width: 20, height: 20}} type="checkbox" /> <label> <p style={{fontSize: 20, fontWeight: "bold", color: "white", marginLeft: 10}}>Empate</p></label>
            </div>
            <InputAddMatch placeholder="Vencedor" />
            <InputAddMatch placeholder="Derrotado" />
            <ButtonSubmit><p style={{fontSize: 12, color: "white", fontWeight: "bold", textAlign: "center"}}>Enviar</p></ButtonSubmit>
        </ContainerAddMatch>
    )
}

export default AddMatch