import styled from 'styled-components'

export const Post = styled.div`
    width: 600px;
    height: auto;
    max-height: 600px;
    margin: 20px;
    padding: 20px;
    position: relative;
    color: #2D767F;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 15px;
    transition: transform 100ms ease-in;

    &:hover,
    &:focus {
        transform: scale(1.02);
    }

    @media screen and (max-width: 699px) {
        width: 80%;
    }
`

export const PostHeader = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    position: relative;
`

export const PostTitle = styled.div`
    @media screen and (max-width: 599px) {
        margin-top: .5rem;

        h1 {
            font-size: 1.5rem;
        }
    }
`

export const PostContent = styled.div`
    width: 100%;
    height: auto;
    margin-bottom: 3rem;
    max-height: 400px;
    word-wrap: break-word;
    overflow: hidden;
    overflow-y: auto;
    color: black;
`

export const PostAuthor = styled.div`
    position: absolute;
    bottom: 0rem;
    right: 1.5rem;
    display: flex;
    align-items: center;

    img {
        width: 30px;
        height: 30px;
        margin-left: .6rem;
        border: 1px solid #2D767F;
        border-radius: 50%;
    }


    @media screen and (max-width: 599px) {
        h3 {
            font-size: 1rem;
        }
    }
`

export const DeletePost = styled.div`
    position: absolute;
    top: -.5rem;
    right: 0;

    button {
        border: none;
        background: none;
        font-size: 30px;
        cursor: pointer;
        color: #FF3800;
    }
`
