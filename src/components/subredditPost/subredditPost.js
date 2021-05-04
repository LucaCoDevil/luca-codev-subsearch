import React from 'react'
import Styled from 'styled-components';



 function SubredditPost(props) {

    const Heading3 = Styled.h3`
    text-align: center;
    `
    return (
        <div>
            <Heading3>{props.post.data.title}</Heading3>
            
        </div>
    )
}

export default SubredditPost;
