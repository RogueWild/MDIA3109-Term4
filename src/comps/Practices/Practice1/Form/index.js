import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position:relative;
    max-width:400px;
    min-height:330px;
    display:flex;
    justify-content:top;
    align-items:center;
    flex-direction:column;
    padding:20px 0px;
`;

const Button = styled.button`
    min-width:98%;
    min-height:45px;
    border:none;
    background-color:#4285F4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:16px;
    font-weight:500;
    color:white;
    text-transform:uppercase;
    cursor: pointer;
    position:absolute;
    bottom:0;
    margin:1%;
`;

const InputCont = styled.div`
    min-width:98%;
    min-height:100%;
    margin:1%;
    margin-bottom:15px;
`;

const InputLabel = styled.div`
    text-transform:uppercase;
    color:#686868;
    font-weight:500;
    margin-bottom:5px;
`;

const InputField = styled.input`
    min-width:100%;
    min-height:45px;
    background: #F2F4FB;
    border-radius:5px;
    border:none;
`;

const InputDisplay = styled.div`
    width:100%;
    display:${props => props.display ? props.display : "block"};
`;

const Form = ({ buttonText, display, onFormComplete }) => {

    const [email, setEmail] = useState(null);
    const [pass, setPass] = useState(null);

    return <Container>
        <InputCont>
            <InputLabel>
                Email
        </InputLabel>
            <InputField type='text' onChange={(e) => {
                setEmail(e.target.value);
            }} />
        </InputCont>
        <InputCont>
            <InputLabel>
                Password
        </InputLabel>
            <InputField type="password" onChange={(e) => {
                setPass(e.target.value);
            }} />
        </InputCont>
        <InputDisplay display={display}>
            <InputCont>
                <InputLabel>
                    Confirm Password
        </InputLabel>
                <InputField type="password" />
            </InputCont>
        </InputDisplay>
        <Button onClick={() => {
            onFormComplete(email, pass);
        }}>
            {buttonText}
        </Button>
    </Container>
}

Form.defaultProps = {
    buttonText: "Button Text",
    onFormComplete: () => { }
}

export default Form;