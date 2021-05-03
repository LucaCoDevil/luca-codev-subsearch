import React from 'react'

 function SearchBar() {
    return (
        <form style={{}}>
            <label htmlFor="subreddit">/r/</label>
            <input type="text" name="subreddit"/>
        </form>
    )
}
export default SearchBar;
