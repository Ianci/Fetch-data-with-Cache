import React, { useState } from 'react';

const GifForm = () => {
    const [ search, setSearch ] = useState('')

    

    const handleChange = e => {
        setSearch(e.target.value)
    }
    return ( 
        <form>
            <input type="text" placeholder="Search" 
            onChange={handleChange}
            value={search}/>
            <button type="submit">Search !</button>
        </form>
     );
}
 
export default GifForm;