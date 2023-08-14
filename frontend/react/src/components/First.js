import { Route } from "@mui/icons-material";
import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import MainUI from "./MainUI";
import UMainUI from "./UMainUI";

function First(){

    return(
        <>
        <center>
        <h2>
        <BrowserRouter>
        
        <Route path="/UMainUI" component={UMainUI} exact/>

        
        
        </BrowserRouter>
        </h2>
        </center>
        </>
    )

}
export default First;