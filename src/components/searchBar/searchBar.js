import React, { useState } from "react";
// import { Form, Input, GoButton } from "../styledComponents";
import Styled from "styled-components";

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

function SearchBar(props) {
  const [subredditSearch, setsubredditSearch] = useState("");

  const handleInputChange = (e) => {
    console.log("submitted");
    props.setsubreddit(subredditSearch.replace(/\s/g, ""));
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

      <GoButton type="submit" onClick={handleInputChange}>
        go
      </GoButton>
    </Form>
  );
}
export default SearchBar;
