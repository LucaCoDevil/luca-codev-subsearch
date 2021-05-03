import Header from './components/header/header.js'
import Content from './components/content/content.js'
import SearchBar from './components/searchBar/searchBar.js'
import Styled from 'styled-components';


function App() {

  const BodyContainer = Styled.div`
  background-color: rgb(236, 236, 236);
  `
  
  return (
    <BodyContainer>
      <Header/>
      <SearchBar/>
      <Content/>
      </BodyContainer>
  );
}

export default App;
