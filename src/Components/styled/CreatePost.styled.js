import styled from 'styled-components'

export const StyledCreatePost = styled.div`
    width: 100%;
    height: calc(100vh - 90px);
    display: grid;
    place-items: center;


    @media screen and (max-width: 599px) {
        height: calc(100vh - 200px);
    }
`

export const CreatePostContainer = styled.div`
    width: 500px;
    height: auto;
    padding: 20px;
    background-color: none;
    border: 2px solid #2D767F;
    border-radius: 12px;
    color: #2D767F;
    display: flex;
    flex-direction: column;
  
    h1 {
        text-align: center;
    }

    button {
        margin-top: 20px;
        height: 40px;
        background-color: #fff;
        border: 2px solid #2D767F;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1.5rem;
        font-weight: 600;
        color: #2D767F;
        opacity: .8;
        transition: all .2s ease-in;

        &:hover {
            background-color: #eee;
            opacity: 1;
        }
    }


    @media screen and (max-width: 599px) {
        width: 80%;
    }

    @media screen and (max-width: 449px) {
        margin-top: -1rem;
        height: 80%;
    }
`

export const InputGroupContainer = styled.div`
    width: 100%;
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    

    input, textarea {
        font-size: 18px;
        border: 1px solid #2D767F;
        border-radius: 6px;
        padding: 5px;
        margin-top: 5px;
    }

    input {
        height: 40px;
    }

    textarea {
        height: 200px;
        resize: none;
    }

    label {
        font-size: 25px;
    }


    @media screen and (max-width: 449px) {
        margin: 5px 0;
        height: 150px;

        input, textarea {
            margin: 0;
        }
    }
`
