import React, {useState, useEffect} from 'react'
import Header from './components/header/header.js'
import Content from './components/content/content.js'
import SearchBar from './components/searchBar/searchBar.js'
import Styled from 'styled-components';


function App() {

  const [subreddit, setsubreddit] = useState("trending");
  const [posts, setPosts] = useState([]);

  const BodyContainer = Styled.div`
  background-color: rgb(236, 236, 236);
  `
  useEffect(() => {
    fetch("https://www.reddit.com/r/"+ subreddit +".json").then(res =>{
     
      switch (res.status) {
        case 404:
          alert("ERROR: cannot get");
          window.location.reload();
          break;
      
        default:
          break;
      }

      res.json().then(data=>{
        if(data != null){
          setPosts(data.data.children)
        }
      })
    })
    }
, [subreddit]);

const handleSubreddit = (value) =>{
  setsubreddit(value);
}
  
  return (
    <BodyContainer>
      <Header/>
      <SearchBar
      subreddit={subreddit}
      setsubreddit={handleSubreddit}/>
      <Content
      data={posts}
      subredditName={subreddit}
      />
      </BodyContainer>
  );
}

export default App;
