import Styled from "styled-components";

//Header

const HeaderContainer = Styled.div`
    display:flex;
    align-items:center;
    width:100%;
    height:60px;
    background-color: #FF4500;
    margin:0;
    `;

const HeaderHeading = Styled.h2`
    font-weight: 500;
    color:white;
    margin: 0 10px;
    `;

//SearchBar

const Form = Styled.form`
display:flex;
margin: 100px auto 60px auto;
width:400px;
height:40px;
background-color:white;
border-radius:50px;
@media (max-width: 700px) {
    width:70%;
  }
`;

const Input = Styled.input`
width:80%;
padding:0 20px;
border:0;
height:100%;
border-radius: inherit;
`;

const GoButton = Styled.button`
width:20%;
height:100%;
border-radius:0 50px 50px 0;
border:none;

`;

//Content

const ContentContainer = Styled.div`
    width: 70%;
    margin:0 auto;
    padding:0 20px;
    height: auto;
    border-radius:30px;
    background-color:#f3f3f3;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 700px) {
            width:85%;
    }
`;

const SubredditHeader = Styled.h3`
    color:rgb(60,60,60);
`;

//SubredditPost
const SubredditContainer = Styled.div`
    width:100%;
    text-align: center;
`;

const Heading3 = Styled.h4`
    display:inline-block;
    text-align: center;
    font-size:1rem;
    color: rgb(80,80,80);
    font-weight: 400;
    &:hover{
        cursor: pointer;
        color: #FF4500;
    }
    `;

const Hr = Styled.hr`
width:90%;
color:#ececec;
opacity: 0.2;
`;

//Content
export { ContentContainer, SubredditHeader };
//Header
export { HeaderContainer, HeaderHeading };
//SearchBar
export { Form, Input, GoButton };
//SubredditPost
export { SubredditContainer, Heading3, Hr };
