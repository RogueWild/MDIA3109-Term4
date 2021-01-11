import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position:relative;
    min-width:300px;
    min-height:auto;
    background:#F7F7F7;
    display:flex;
`;

const Header = styled.div`
    position:relative;
    background:#5F83FF;
    color:white;
    font-weight:500;
    min-width:300px;
    min-height:50px;
    display:flex;
    align-items:center;

    & > span {
        margin-left:10px;
    }
`;

const LeftCont = styled.div`
    position:relative;
    width:50%;
    height:250px;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    text-align:left;

    & > span {
        margin-left:10px;
    }
`;

const RightCont = styled.div`
    position:relative;
    width:50%;
    height:250px;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    text-align:right;
    color:#777777;

    & > span {
        margin-right:10px;
    }
`;

const Input = styled.input`
    margin:10px 0px;
    max-width:300px;
`;

const InputCont = styled.div`
    display:flex;
    flex-direction:column;
`;

const data = [
    {
        id: 1,
        name: "text",
        reps: "int",
        calories: "int",
        created: "timestamp"
    }
]

const Table = ({ list, onInsert }) => {
    const [name, setName] = useState(null);
    const [reps, setReps] = useState(null);
    const [cal, setCal] = useState(null);

    return <div>
        <Header>
            <span>exercise</span>
        </Header>
        <Container>
            <LeftCont>
                <span>
                    <b>id</b>
                </span>
                <span>
                    name
            </span>
                <span>
                    reps
            </span>
                <span>
                    calories
            </span>
                <span>
                    created
            </span>
            </LeftCont>
            {list.map(o => <RightCont>
                <span>
                    <b>{o.id}</b>
                </span>
                <span>
                    {o.name}
                </span>
                <span>
                    {o.reps}
                </span>
                <span>
                    {o.calories}
                </span>
                <span>
                    {o.created}
                </span>
            </RightCont>)}
        </Container>
        <InputCont>
            <Input type='text' placeholder="name" onChange={(e) => {
                setName(e.target.value);
            }}></Input>
            <Input type='text' placeholder="reps" onChange={(e) => {
                setReps(e.target.value);
            }}></Input>
            <Input type='text' placeholder="calories" onChange={(e) => {
                setCal(e.target.value);
            }}></Input>
        </InputCont>
        <button onClick={() => {
            onInsert(name, reps, cal);
        }}>Insert</button>
    </div>
}

Table.defaultProps = {
    list: data,
    onInsert: () => { }
}

export default Table;