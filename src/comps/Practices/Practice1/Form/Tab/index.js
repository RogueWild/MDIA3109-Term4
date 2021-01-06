import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    min-width:112px;
    min-height:55px;
    border-radius:5px 5px 0px 0px;
    border-top: 1px solid #000000;
    border-left: 1px solid #000000;
    border-right: 1px solid #000000;
    display:flex;
    justify-content:center;
    align-items:center;
    font-weight: 500;
    font-size: 16px;
    margin-right:20px;
    user-select:none;
    cursor: pointer;
    ${props => props.bgcolor && "background-color:" + props.bgcolor + ";"};
`;

const Tab = ({name, tabText, bgcolor, onTabSelect }) => {
    return <Container onClick={() => {
        onTabSelect(name);
    }} bgcolor={bgcolor}>
        {tabText}
    </Container>
}

Tab.defaultProps = {
    tabText:"Tab Text",
    onTabSelect:() => {}
}

export default Tab;