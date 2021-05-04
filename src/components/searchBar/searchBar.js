import React, {useCallback, useEffect, useState} from 'react'

 function SearchBar(props) {
     
    const [subredditSearch, setsubredditSearch] = useState("")

    const handleInputChange = (e) =>{
        props.setsubreddit(subredditSearch.replace(/\s/g, ''))
    }

    return (
        <form onSubmit={handleInputChange}>
            <label htmlFor="subreddit">/r/</label>
            <input type="text" name="subreddit"
            value={subredditSearch} 
            onChange={e=>setsubredditSearch(e.target.value) }
            required/>
            <button type="submit" >go</button>
        </form>
    )
}
export default SearchBar;
