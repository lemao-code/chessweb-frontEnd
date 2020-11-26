import {Container, HeaderChess, Alpha, ContainerChildren} from '../style/style'
import Image from 'next/image'
import Ranking from '../components/Ranking'
import LastMatches from '../components/LastMatches'
import AddMatch from '../components/AddMatch'


function Home () {
    return (
        <Alpha>
            <Container >
                <HeaderChess>
                    <Image src="/chess.webp" quality="100" responsive="true" width="1200" height="600"/>
                </HeaderChess>
                <ContainerChildren>
                    <Ranking />
                    <LastMatches />
                    <AddMatch />
                </ContainerChildren>
            </Container>
        </Alpha>
        
    )
}

export default Home