import React ,{useState,useEffect} from 'react';
import Bootstraptable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';

function DataList (){

const [userList, setUserList] = useState([]);


const columns = [
    {dataField:'id',text: 'Id'},
    {dataField:'name',text: 'Name', filter: textFilter()},
    {dataField:'brewery_type',text: 'Brewery_type' , filter: textFilter()},
    {dataField:'street',text: 'Street'},
    {dataField:'city',text: 'City' ,filter: textFilter()},
    {dataField:'state',text: 'State'},
    {dataField:'postal_code',text: 'Postal_code'},
    {dataField:'website_url',text: 'Website_url'},
    {dataField:'created_at',text: 'Created_at'},
    {dataField:'uphated_at',text: 'Uphated_at'},
    {dataField:'country',text: 'Country'},
    {dataField:'longitude',text: 'Longitude'},
    {dataField:'latitude',text: 'Latitude'},
    
]



    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/openbrewerydb/openbrewerydb/47c6e47b1216988fb2eef206a1ddd5a4fc4ae84f/archive/2018/breweries.json')
        .then(response => response.json())
        .then(result => setUserList(result))
        .catch(error => console.log(error));
   
    },[])



    return (
    <div>




    <Bootstraptable keyField='id' columns={columns} data={userList} filter={filterFactory()}/>
   
   
     
    {/*
    Make table normal below becaue checking data is fetch or not
     <table>
        <tr>
        <th>id</th>
                    <th>name</th>
                    <th>brewery_type</th>
                    <th>street</th>
                    <th>city</th>
                    <th>state</th>
                    <th>postal_code</th>
                    <th>website_url</th>
                    <th>created_at</th>
                    <th>uphated_at</th>
                    <th>country</th>
                    <th>longitude</th>
                    <th>latitude</th>
                    </tr>
                    {
                        userList && userList.length>0 ?
                        userList.map(usr =>

                            <tr key={usr.id}>
                    <td>{usr.id}</td>
                    <td>{usr.name}</td>
                    <td>{usr.brewery_type}</td>
                    <td>{usr.street}</td>
                    <td>{usr.city}</td>
                    <td>{usr.state}</td>
                    <td>{usr.postal_code}</td>
                    <td>{usr.website_url}</td>
                    <td>{usr.created_at}</td>
                    <td>{usr.updated_at}</td>
                    <td>{usr.country}</td>
                    <td>{usr.longitude}</td>
                    <td>{usr.latitude}</td>
                    </tr>
                        
                        )
                        :'Loading'
                    }
        
    </table> */}


    </div>
    )
}

export default DataList;