import React, { useState } from "react";
import "./App.css";
import UserList from "./components/UserList";
import Users from "./components/Users";


function App() {
  const [userList, setUsersList] = useState([]);
  const deleteUser = (id)=>
  {
    setUsersList(userList.filter(item => item.id!==id ));
  }
  
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: uName, age: uAge, id: Date.now() }];
    });
  };
  return (
    
    <div className="App">
      <Users onAddUser={addUserHandler} />
      <UserList deleteUser={deleteUser} users={userList} />
    </div>
    
  );
}

export default App;
