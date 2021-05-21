import React, { useState, useEffect} from "react";
import DataList from './Datatable/DataList'


const URL= 'https://raw.githubusercontent.com/openbrewerydb/openbrewerydb/47c6e47b1216988fb2eef206a1ddd5a4fc4ae84f/archive/2018/breweries.json'



const App=() =>{
    const [q, setQ] = useState("");

    function search(rows) {
        return rows.filter(row => row.brewery_type.toLowerCase().indexOf(q) > -1)
    }

    return(
        <>
        <h1 id='title'>Table</h1>
        <div>
            <input type="text" value={q} placeholder="Search" className="search" onChange={(e)=> setQ(e.target.value)} />
        </div>
        <div className="App">
            <DataList data={search.DataList}/>
        </div>
        </>
    )


    } 
    
    export default App;