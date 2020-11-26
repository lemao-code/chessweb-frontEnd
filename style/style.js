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
    height: 800px;
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
    height: 500px;
    background-color: black;

    margin: 10px;
`
export const ContainerLastMatches = styled.div ` 
    width: 300px;
    height: 500px;
    background-color: white;
    border: 2px solid yellow;
    margin: 10px;
`

export const ContainerAddMatch = styled.div ` 
    width: 300px;
    height: 500px;
    background-color: white;
    border: 2px solid red;
    margin: 10px;
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
`
