import { useEffect } from "react"
import styled from "styled-components"

const Wrapper = styled.div`
width: 100%;
color: white
display: flex;
flex-direction: column;
background: grey;
top:0;
position: absolute;
bottom: 0

`
const WrapperPage = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
margin: 0 8%
`


const TitilebyRoot = styled.div`
`

const Title = styled.h2`
color: blue
`

const UnderPartWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: row;

`

const PartWrapper = styled.div<{background:string}>`
width: 50%;
background:  ${props => props.background};
heigth: 100%
`

interface PageCont {
    val: string
}

const PageContaier:React.FC<PageCont> = ({val}) => {
    
    return( 
    <Wrapper>

        <WrapperPage>
            <TitilebyRoot>
                <Title>titolo che arriva come props se il parametro è diverso da 00</Title>
            </TitilebyRoot>

            <UnderPartWrapper>
                <PartWrapper background="pink">
                container sx a cui arrivano props per vedere se è un'immagine o una scritta
                </PartWrapper>
                <PartWrapper background="purple">
                container destro a cui arrivano props per vedere se è un'immagine o una scritta
                </PartWrapper>
            </UnderPartWrapper>
            </WrapperPage>
    </Wrapper>
)
}
export default PageContaier;

