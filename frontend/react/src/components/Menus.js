import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const Menus=(props)=>{
    return(
        <div>
 <ListGroup>
    <ListGroupItem >
       <Link className ="list-group-item list-group-item-action" to="/Home" >Home </Link>
    </ListGroupItem>
    <ListGroupItem>
        
        <Link className ="list-group-item list-group-item-action" to="/Bookslot" >Bookslot </Link>
    </ListGroupItem>
    <ListGroupItem>
        
        <Link className ="list-group-item list-group-item-action" to="/Viewvaccine" >Viewvaccine </Link>
    </ListGroupItem>
    <ListGroupItem>
        
        <Link className ="list-group-item list-group-item-action" to="/About" >About </Link>
    </ListGroupItem>
    
    <ListGroupItem >
    <Link className ="list-group-item list-group-item-action" to="/Contact" >Contact Us</Link>
    </ListGroupItem>
    <ListGroupItem >
    <Link className ="list-group-item list-group-item-action" to="/Center" >Centers</Link>
    </ListGroupItem>
</ListGroup>
        </div>

    )
}
export default Menus