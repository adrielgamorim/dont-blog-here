import styled from 'styled-components'

export const StyledLogin = styled.div`
    width: 100%;
    height: calc(100vh - 100px);
    display: flex;
    justify-content: center;
    align-items: center;

    
    @media screen and (max-width: 599px) {
        height: calc(100vh - 200px);
    }
`

export const LoginContainer = styled.div`
    width: 500px;
    height: auto;
    padding: 20px;
    background: none;
    border: 2px solid #2D767F;
    border-radius: 12px;
    color: #2D767F;
    display: flex;
    flex-direction: column;

    p {
        font-size: 30px;
    }


    @media screen and (max-width: 599px) {
        width: 80%;
    }
`

export const GoogleButton = styled.button`
    cursor: pointer;
    transition: background-color 0.3s, box-shadow 0.3s;
    padding: 5px 16px 12px 42px;
    margin-bottom: 1.5rem;
    border: none;
    border-radius: .2rem;
    box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 1px 1px rgba(0, 0, 0, 0.25);
    color: #757575;
    font-size: 25px;
    font-weight: 500;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=);
    background-color: white;
    background-repeat: no-repeat;
    background-position: 2rem 50%;
    background-size: 2rem;

    &:hover {
        box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.25);
    }

    &:active {
        background-color: #eeeeee;
    }

    &:focus {
        outline: none;
        box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.25), 0 0 0 3px #c8dafc;
    }

    &:disabled {
        filter: grayscale(100%);
        background-color: #ebebeb;
        box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 1px 1px rgba(0, 0, 0, 0.25);
        cursor: not-allowed;
    }


    @media screen and (max-width: 599px) {
        background-position: 1rem 50%;

    }
`
