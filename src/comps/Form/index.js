import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    min-width:${props => props.width ? props.width : "300px"};
    min-height:${props => props.width ? props.width : "100px"};
    max-width:${props => props.width ? props.width : "50%"};
    max-height:${props => props.width ? props.width : "300px"};
    padding:10px;
    display:flex;
    flex-direction:column;
    border-radius:5px;

    ${props => props.bgcolor && "background-color:" + props.bgcolor + ";"};
    & > span {
        margin:5px;
    }
`;

const FormInput = styled.input`
    min-height:25px;
    padding:5px;
`;

const FormButton = styled.button`
    border-radius:5px;
    min-height:25px;
`;

const FormCheckbox = styled.input.attrs({ type: 'checkbox' })`

`;

var timer = null;
const Form = ({ name, width, height, bgcolor, onFormComplete, onContainerSelect }) => {

    const [username, setUserame] = useState(null);
    const [pass, setPass] = useState(null);
    const [msg, setMsg] = useState(null);
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);

    useEffect(()=>{
        setCheck1(check3);
        setCheck2(check3);
    }, [check3]);

    useEffect(()=>{
        //alert("changed background");
    }, [bgcolor]);

    useEffect(()=>{
        timer = setInterval(()=>{
            console.log("time is running out");
        }, 1000)
        return () => {
            //this is death.
            clearInterval(timer);
        }
    }, );

    return <Container onClick={() => {
        onContainerSelect(name);
    }} width={width} height={height} bgcolor={bgcolor}>
        <FormInput type='text' placeholder='name' onChange={(e) => {
            setUserame(e.target.value);
        }} />
        <FormInput type='password' placeholder='pass' onChange={(e) => {
            setPass(e.target.value);
        }} />
                <FormInput type='text' placeholder='chat message' onChange={(e) => {
            setMsg(e.target.value);
        }} />
        <span>
            <FormCheckbox onChange={(e) => {
                setCheck1(e.target.checked);
            }} checked={check1} /> I agree to sell my life
        </span>
        <span>
            <FormCheckbox onChange={(e) => {
                setCheck2(e.target.checked);
            }} checked={check2} /> I agree to sell my soul
        </span>
        <span>
            <FormCheckbox onChange={(e) => {
                setCheck3(e.target.checked);
            }} /> I agree with all of the above
        </span>
        <FormButton onClick={() => {
            onFormComplete(username, pass, msg, check1, check2, check3);
        }}>Send Message</FormButton>
    </Container>
}

Form.defaultProps = {
    width: null,
    height: null,
    bgcolor: null,
    onFormComplete: () => { },
    onContainerSelect: () => { }

}

export default Form;