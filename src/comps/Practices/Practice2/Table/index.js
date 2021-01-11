import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position:relative;
    max-width:300px;
    min-height:auto;
    background:#F7F7F7;
    display:flex;
`;

const Header = styled.div`
    position:relative;
    background:#5F83FF;
    color:white;
    font-weight:500;
    max-width:300px;
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

const Table = ({ }) => {
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
            <RightCont>
                <span>
                    <b>int</b>
                </span>
                <span>
                    text
            </span>
                <span>
                    int
            </span>
                <span>
                    int
            </span>
                <span>
                    timestamp
            </span>
            </RightCont>
        </Container>
    </div>
}

Table.defaultProps = {

}

export default Table;