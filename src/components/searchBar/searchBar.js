import React, { useState } from "react";
// import { Form, Input, GoButton } from "../styledComponents";
import Styled from "styled-components";
import updateSubreddit from "../../store/actions/updateSubreddit";

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
&:focus{
  outline: none;
}
`;

const GoButton = Styled.button`
width:20%;
height:100%;
border-radius:0 50px 50px 0;
border:none;
color:#FF4500;
font-size:1rem;
font-weight:500;
background-color:#f7f7f7;
transition: background-color .2s ease-out;
&:hover{
  background-color:#f0f0f0;
  cursor: pointer;
}

`;

function SearchBar(props) {
  const [subredditSearch, setsubredditSearch] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();

    updateSubreddit.payload = subredditSearch.replace(/\s/g, "");
    props.fetchData();

    setsubredditSearch("");
  };

  return (
    <Form>
      <Input
        placeholder="/r/"
        type="text"
        name="subreddit"
        value={subredditSearch}
        onChange={(e) => setsubredditSearch(e.target.value)}
        required
      />

      <GoButton onClick={handleInputChange}>Go</GoButton>
    </Form>
  );
}
export default SearchBar;
