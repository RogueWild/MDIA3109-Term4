import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    margin:10px;
    padding:10px;
    ${props => props.highlight && "background-color:#FAD"};
`;

const Items = ({ id, username, message, created, highlight, onClick }) => {
    return <Container highlight={highlight} onClick={() => {
        onClick(id); // Send id to the page
    }}>
        {id} - {username} - {message} - {created}
    </Container>
}

Items.defaultProps = {
    id: null,
    username: null,
    message: null,
    created: null,
    highlight: null,
    onClick: () => { }
}

export default Items;