import React from 'react';
import Styled from 'styled-components';
import Post from '../subredditPost/subredditPost.js';

function Content() {

    const ContentContainer = Styled.div`
    width: 80%;
    height: 500px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    `

    const Hr = Styled.hr`
    width:70%;
    color:rgb(200,200,200,0.5);
    `

    return (
        <ContentContainer>
            <h3>/r/Subredditpost</h3>
            <Hr/>
            <Post/>
            <Hr/>
        </ContentContainer>
    )
}

export default Content;
