import React from 'react';
import Styled from 'styled-components';
import Post from '../subredditPost/subredditPost.js';

function Content(props) {

    const ContentContainer = Styled.div`
    width: 80%;
    height: auto;
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
            <h3>/r/{props.subredditName}</h3>
            <Hr/>
            {(props.data != null) ? props.data.map((post, index)=>
                <Post post={post} key={index}/>
            ): alert("Null")}
        <Hr/>
        </ContentContainer>
    )
}

export default Content;
