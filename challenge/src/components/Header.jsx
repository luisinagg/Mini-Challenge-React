import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';

export default function Header() {
  return (
    <Container>
      <Content>  
            <NavLink to ={'/home'}>Home</NavLink> 
            <NavLink to ={'/users'}>Users</NavLink>            
            <NavLink to ={'/createUsers'}>Create Users</NavLink>
      </Content>
    </Container>
  )
}
const Container = styled.div`
position: fixed;
    top: 0;
    left: 0;
    min-height: 55px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    z-index: 1;
    .close{
        color: black;
        padding: 5px;
        padding-bottom: 2px;
        border-radius: 50%;
        position: fixed;
        top: 15px;
        right: 20px;
        z-index: 5;
        transition: all 300ms ease-in;
        cursor: pointer;
        :hover{
            background-color: rgba(90, 90, 90, 0.1);
        }
    }
    .top{
        position: fixed;
        top: 0;
        right: 10px;
        z-index: 10;
        height: 75px;
        width: 270px;
        background-color: white;
        -webkit-animation: cssAnimation 400ms forwards; 
        animation: cssAnimation 400ms forwards;
    }
    @keyframes cssAnimation {
        0%   {opacity: 0;}
        99%  {opacity: 0;}
        100% {opacity: 1;}
    }
    @media screen and (max-width: 1150px){
        .close{
            background-color: lightgrey;
        }
    }
;`
const Content = styled.div`
    display: flex;
    flex-wrap: nowrap;
    a{
        padding: 7px 16px;
        font-size: 0.92rem;
        letter-spacing: 0.6px;
        text-decoration: none;
        font-weight: 500;
        border-radius: 10px;
        transition: background-color 200ms ease-in;
        cursor: pointer;
        :hover{
            background-color: rgba(90, 90, 90, 0.1);
        }
    }
    `;