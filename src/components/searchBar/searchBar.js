import React, { useCallback, useEffect, useState } from "react";
import Styled from "styled-components";

//styled components

const Form = Styled.form`
display:flex;
margin: 100px auto 60px auto;
width:400px;
height:40px;
background-color:white;
border-radius:50px;
`;

const Label = Styled.label`
width:10%;
height:100%;
`;

const Input = Styled.input`
width:80%;
padding:0 20px;
border:0;
height:100%;
border-radius: inherit;
`;

const GOButton = Styled.button`
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
      {/* <Label htmlFor="subreddit">/r/</Label> */}
      <Input
        placeholder="/r/"
        type="text"
        name="subreddit"
        value={subredditSearch}
        onChange={(e) => setsubredditSearch(e.target.value)}
        required
      />

      <GOButton type="submit" onClick={handleInputChange}>
        go
      </GOButton>
    </Form>
  );
}
export default SearchBar;
