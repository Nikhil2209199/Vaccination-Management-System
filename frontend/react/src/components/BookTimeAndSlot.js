import React from 'react';
import { useLocation } from "react-router-dom";

function BookTimeAndSlot() {
    const location = useLocation();
    const ID = location.state.params;

    console.log(ID);

    return(
        <div>


            
        </div>
    )
}
export default BookTimeAndSlot