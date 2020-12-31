import styled from 'styled-components'

export const Alpha = styled.body ` 
    margin: -10px;
    padding: 0px;
    height: 130vh;
    background-color: black;
`


export const Container = styled.div ` 
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    margin: 0px;
    padding: 0px;
`

export const HeaderChess = styled.div ` 
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(39,72,115);
`
export const ContainerChildren = styled.div ` 
    width: 100%;
    height: auto;
    background-color: black;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    position: absolute;
    top: 550px;
    margin: 0px;
    padding: 0px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    @media(max-width: 800px) {
        flex-direction: column;
    }
`

export const ContainerRanking = styled.div ` 
    width: 300px;
    height: 200px;
    background-color: black;
    display: flex;
    flex-direction: row;
    margin: 10px;
`
export const ContainerLastMatches = styled.div ` 
    width: 300px;
    height: auto;
    background-color: black;
    margin: 10px;

`
export const BoxLastMatchs = styled.div ` 
    display: flex;
    flex-direction: row;
`

export const RenderData = styled.div ` 
    display: flex;
    flex-direction: row;
`

export const FontNameAndRanking = styled.h1 ` 
    color: white;
    font-family:  Verdana, Geneva, Tahoma, sans-serif;
    font-size: 20px;

`

export const NameRanking = styled.p ` 
    color: white;
    font-family:  Verdana, Geneva, Tahoma, sans-serif;
    font-size: 15px;
    border-bottom: 1px dashed white;
    margin: 5px;
`

export const NameLastMatchsWinner = styled.p ` 
    color: white;
    font-family:  Verdana, Geneva, Tahoma, sans-serif;
    font-size: 15px;
    border-bottom: 2px dashed;
    border-color: ${props => props.colorwinner};
    margin: 5px;
`
export const NameLastMatchLoser = styled.p ` 
    color: white;
    font-family:  Verdana, Geneva, Tahoma, sans-serif;
    font-size: 15px;
    border-bottom: 2px dashed;
    border-color: ${props => props.colorLoser };
    margin: 5px;
    margin-left: 10px;
`
export const NameLastMatchs = styled.p ` 
    color: white;
    font-family:  Verdana, Geneva, Tahoma, sans-serif;
    font-size: 15px;
    border-bottom: 1px dashed white;
    margin: 5px;
`

export const ContainerNameLastMatch = styled.div ` 
    display: flex;
    flex-direction: row;
`

export const ContainerGuide = styled.div `

`

export const GuideText = styled.p `
    font-family:  Verdana, Geneva, Tahoma, sans-serif;
    font-size: 11px;
    font-weight: bold;
    color: white;
    margin-left: 10px;

`

export const GuideWinner = styled.div `
    width: 20px;
    height: 5px;
    background-color: green;
`
export const GuideLoser = styled.div `
    width: 20px;
    height: 5px;
    background-color: red;
`

export const GuideEmpate = styled.div `
    width: 20px;
    height: 5px;
    background-color: blue;
`
////////////////////////// ADD MATCH ///////////////////////////////

export const ContainerAddMatch = styled.div ` 
    width: 300px;
    height: 300px;
    background-color: black;
    border: 2px solid red;
    margin: 10px;
    display: flex;
    flex-direction: column;

`
export const InputAddMatch =  styled.input `
    ::placeholder {
        color: white;
        font-size: 12px;
        text-align: center;
    }
    width: 130px;
    height: 20px;
    margin: 5px;
    background-color: #4F4F4F;
    border: none;
    border-radius: 20px;
    :focus {
        outline: none;
        width: 140px;
    }
`