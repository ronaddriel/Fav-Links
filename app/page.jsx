"use client";
import { useState } from "react" 
import Form from "./components/Form"
import Table from "./components/Table"


function HomePage(){
    return (
        <div>
           <h1> FavLinks </h1>

           <Form />

           {/*Table to display the data*/}

           <Table />

        </div>   
    )
}
export default HomePage 