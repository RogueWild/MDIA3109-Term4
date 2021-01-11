import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`

`;

const MsgCont = styled.div`

`;

const fakedb = [
    {
        id:1,
        username:"fake",
        message:"fake stuff",
        created:"Dec. 1st 2021"
    }
]

const Messages = ({msgs}) => {


    return <Container>
        Messages
        {msgs.map(o=><MsgCont>
            {o.id} - {o.username} - {o.message} - {o.created}
        </MsgCont>)}
    </Container>
}

Messages.defaultProps = {
    msgs:fakedb
}

export default Messages;