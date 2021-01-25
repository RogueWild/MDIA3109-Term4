import React, { useState } from 'react';
import styled from "styled-components";

const PageButton = styled.button`
    background-color:${props => props.bgcolor ? props.bgcolor : "#FAD"};
`;

const Pagin = ({ onClickPage, numpages }) => {
    var pages = [];
    const [pageon, setPageon] = useState(1);

    const HandleClick = (num) =>{
        onClickPage(num);
        setPageon(num);
    }

    for (var i = 0; i < numpages; i++) {
        pages.push(
            <PageButton bgcolor={pageon == i+1 ? "#ADD" : "#FAD"} onClick={HandleClick.bind(this, i+1)}>{i + 1}</PageButton>
        );
    }
    return <div>
        {pages}
    </div>
}

Pagin.defaultProps = {
    onClickPage: () => { },
    numpages: 1
}

export default Pagin;

/*
[1] [2] [3]
*/