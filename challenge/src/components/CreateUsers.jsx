import React, { useState } from 'react'
import UserCard from './UserCard';
import styled from 'styled-components'

const Contenedor = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const ContenedorForm = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: 'Raleway';
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 30px;
`;
const H1 = styled.h1`
    text-align: center;
    margin: 30px;
    font-size: 60px;
    font-weight: 500;
    font-family: 'Pacifico';
    color: #626262;
`;
const DivLabel = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 1em;
    transition: all .3s;
    text-align: start;
    &:focus-within{
        transform: scale(1.05, 1.05);
    }
`;
const Label = styled.label`
    font-size: 20px;
    color: #aaa;
    display: block;
    opacity: 1;
    transform: translateY(-1.9em);
    transform-origin: 0 0;
    transition: all .3s;
    margin: 1px;
`;
const InputRange = styled.input`
    font-size: 20px;
    width: 100%;
    border-style: none none solid none;
    border-color: #aaa; 
    padding: 2px 8px;
    box-shadow: none;
    transition: all .5s;
    cursor: pointer;
    &::placeholder{
        color: transparent;
    }
    &:focus{
        box-shadow: none;
        outline: none;
        border-color: #f07b3f;
    }
    &:focus + Label, 
    &:not(:placeholder-shown) + Label {
        transform: translateY(-2.5em) scale(.7)
    }
    &:invalid + Label{
        color: red;
    }
    &:not(:focus, :required):invalid + Label:after{
        content: 'Ingresar el campo';
    }
`;
const Button = styled.button`
    background-color: #f07b3f;
    height: 40px;
    width: 300px;
    border-radius: 5px;
    cursor: pointer;
    border: 1px solid #f07b3f;
    box-shadow: 5px 5px 20px lightgray;
    color: white;
    font-family: 'Raleway';
    font-weight: 700;
    &:hover{
        background-color: #BD6537
    }
`;

const DivButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const DivRow = styled.div`
    display: flex;
    flex-direction: row;
    height: 80%;
    justify-content: center;
`;

const Div1 = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;


export default function CreateUsers() {

  const [flag , setFlag ] = useState(false)
  const [input, setInput] = useState({
    name: "",
    age:"",
    hobbie:""
  })

  function handleInput(e){
    setInput({
      ...input,
      [e.target.name]: e.target.value 
    })
  }
  function handleSubmit(e){
    e.preventDefault();
    setFlag(true)
    
  }

  return (
    <Contenedor>
      <ContenedorForm>
      <H1>Crear Usuario</H1>
      <Form onSubmit={e=> handleSubmit(e)}>
      <DivRow>
         <Div1>
      <DivLabel>
        <InputRange type={"text"} placeholder={"Ejemplo:Pepe"} name={"name"} value={input.name} 
        onChange ={e => handleInput(e)}
        />
        <Label>Nombre</Label>
    </DivLabel>
    <DivLabel>
        <InputRange type={"number"} placeholder={"Ejemplo:40"} name={"age"} value={input.age}
        onChange ={e => handleInput(e)}
        />
        <Label>Edad</Label>
    </DivLabel>
    <DivLabel>
        <InputRange type={"text"} placeholder={"Ejemplo:Nadar"} name={"hobbie"} value={input.hobbie} 
        onChange ={e => handleInput(e)}
        />
        <Label>Hobbie</Label> 
    </DivLabel>
    </Div1>
    </DivRow>

      <br/>
      <DivButton>
        <Button type={"submit"}>Crear usuario!</Button >
        </DivButton>
        </Form>
        {
          flag && <UserCard name={input.name} age={input.age} hobbie={input.hobbie}/>
        }
        </ContenedorForm>
    </Contenedor>

  )
}
