import React from 'react'
import styled from 'styled-components';

const Cardiv = styled.div`
        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: 58% 15% 27%;
        width: 260px;
        height: 160px;
        border: 1px lightgray solid;
        margin: 20px;
        padding: 0px;
        border-radius: 5px;
        box-shadow: 5px 5px 20px lightgray;
        cursor: pointer;
        text-decoration: none;
        color: black;
        &:hover{
            transition: all 0.5s ease;
            transform: scale(0.95);
        }
    `;

const DivH3 = styled.div`
width: 100%;
display: flex;
justify-content: left;
align-items: center;
`;
const H3 = styled.h3`
        margin: 10px;
        padding: 0;
        text-transform: capitalize;
        color: black;
        font-size: 15px;
        font-weight: 500;
        font-family: 'Raleway';
      
    `;

export default function UserCard({name, age, hobbie}) {
  return (
    <Cardiv >
        <div>
            <DivH3>
                <H3>Nombre:<i>{name}</i></H3>
             </DivH3>
            <br/>
            <DivH3>
                 <H3>Edad:<i>{age}</i></H3>
            </DivH3>
            <br />
            <DivH3>
                <H3>Hobbie:<i>{hobbie}</i></H3>
            </DivH3>
            
        </div>
    </Cardiv >
  )
}
