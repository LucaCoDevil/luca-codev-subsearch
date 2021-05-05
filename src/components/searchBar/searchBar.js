import React, { useState } from "react";
import { Form, Input, GoButton } from "../styledComponents";

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
