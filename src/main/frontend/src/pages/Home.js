import React, {useState} from 'react'
import '../styling/Home.css'
import Tree from '../components/Tree';
import axios from 'axios';
import exampleJson from '../example.json';

function Home() {

    const [query, setQuery] = useState('');
    const [response, setResponse] = useState(null);

    const queryChangeHandler = (event) => {
        setQuery(event.target.value)
    }

    const search = async c => {
        c.preventDefault();
        try {
            const infection = await axios.get('http://localhost:8080/infection', {params: {id: query}});
            if (infection.status === 200 && infection.data != null) {
                setResponse(infection.data);
            } else {
                setResponse(null);
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className={"border"}>
            <form className={"searchForm"}>
                <div className={"search"}>
                    <input className={"searchInput"} type="text" name="query" id="query" placeholder="Search here"
                           onChange={queryChangeHandler} value={query}/>
                    <button className={"searchButton"} type="submit" onClick={search}>
                        🔍
                    </button>
                </div>
            </form>
            <div>
                {response != null && <Tree treeData={exampleJson}/>}
            </div>
        </div>
    )
}

export default Home
