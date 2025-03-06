"use client";
import { useState } from "react" 
import Form from "./components/Form"
import Table from "./components/Table"


function HomePage(){

    const [newfavLinks, setnewFavLinks] = useState({})

    function handleNewFavLink(favlink){
        //favlink contains name and url
        console.log(favlink, 'in Homepage')
        setnewFavLinks(favlink)
    }
    return (
        <div>
           <h1> FavLinks </h1>

           <Form submitFavLink={handleNewFavLink}/>

           <Table data={newfavLinks}/>

        </div>   
    )
}
export default HomePage 