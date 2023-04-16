import React, {useState} from 'react'
import '../styling/Home.css'

function Home() {

    const [query, setQuery] = useState('');

    const queryChangeHandler = (event) => {
        setQuery(event.target.value)
    }

    const search = c => {
        c.preventDefault();
        console.log("post request to mongo")
    }

    return (
        <div>
            <form className={"searchForm"}>
                <div className={"search"}>
                    <input className={"searchInput"} type="text" name="query" id="query" placeholder="Search here"
                           onChange={queryChangeHandler} value={query}/>
                    <button className={"searchButton"} type="submit" onClick={search} >
                        🔍
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Home
