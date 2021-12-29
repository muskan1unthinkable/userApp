import React from "react";
import Card from "./Card";
import classes from "../UI/Card.module.css";
const UserList = (props) => {
    const deleteHandler=(id)=>
    {
        props.deleteUser(id);
    //   const newList = props.users.filter((user) => user.id !== id);
    //   console.log(newList);
    //   return newList;
    }
  return (
    <Card  className={classes.card}>
      <div>
        
        <ul  style={{ listStyle: "none",padding:"2%"}}>
          {props.users.map((user) => (
           
            <li style={{ border:" 1px solid black" , padding:"1%",margin:"1%"}} key={user.id}>
              {user.name} is {user.age} years old
              <button style={{marginLeft:"10px"}} onClick={()=>deleteHandler(user.id)}> Delete</button>
            </li>
           
            
          ))}
         
        </ul>
      </div>
    </Card>
  );
};

export default UserList;
