import styled from "styled-components";

export const Navbar = styled.nav`
  margin: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: none;
  border-bottom: 2px solid #B4F1F1;
  
  span{
    width: 2px;
    height: 50px;
    background-color: #B4F1F1;
    border-radius: 2px;
  }

  a {
    color: #2D767F;
    text-decoration: none;
    margin: 10px 15px;
    font-size: 2rem;
    font-weight: bold;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: -5px;
      height: 3px;
      border-radius: 6px;
      background-color: #B4F1F1;
      transition: transform .4s ease-in-out;
      transform: scaleX(0);
    }

    &:hover::before,
    &:focus::before {
      transform: scaleX(1);
    }
  }

  @media screen and (max-width: 599px) {
    height: 12rem;
    flex-direction: column;

    span {
      width: 100px;
      height: 2px;
    }

    a {
      font-size: 1.5rem;

      &:hover::before,
      &:focus::before {
        transform: scaleX(0);
      }
    }
  }

`

export const Logo = styled.div`
  position: absolute;
  left: 0;
  top: .6rem;
  display: flex;
  align-items: center;

  img {
    width: 5rem;
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  p {
    margin: -.6rem 0 0 -.5rem;
    padding: 0;
    color: #2D767F;
    font-size: 1.4rem;
    font-weight: bold;
  }


  @media screen and (max-width: 1199px) {
    p {
      display: none;
    }
  }

  @media screen and (max-width: 599px) {
    left: -.5rem;
    top: 3.5rem;

    img {
      width: 7rem;
    }
  }


`

export const LogoutButton = styled.button`
  margin-left: 1rem;
  padding: .3rem .5rem;
  font-size: 1.6rem;
  font-weight: bold;
  color: #2D767F;
  background-color: #fff;
  border: 2px solid #2D767F;
  border-radius: 12px;
  transition: all .2s ease-in-out;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #eee;
    box-shadow: 1px 1px;
  }

  @media screen and (max-width: 599px) {
    margin: 1rem 0 0 -2px;
    font-size: 1.5rem;
  }
`