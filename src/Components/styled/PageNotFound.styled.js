import styled from 'styled-components'

export const StyledPageNotFound = styled.div`
    width: 100%;
    height: calc(100vh - 100px);
    display: flex;
    justify-content: center;
    align-items: left;


    @media screen and (max-width: 599px) {
        height: calc(100vh - 200px);
    }
`

export const ContentWrapper = styled.div`
    width: 80%;
    height: auto;
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 60%;
    }


    @media screen and (max-width: 599px) {
        margin-top: 1rem;

        img {
            width: 100%;
        }
    }
`

export const TextWrapper = styled.div`
    margin-top: 2rem;
    color: #2D767F;
`