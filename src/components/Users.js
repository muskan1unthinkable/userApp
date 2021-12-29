import React, { useState ,useRef} from "react";
import Card from "./Card";
import classes from "../UI/User.module.css";

const Users = (props) => {
  const inputRef = useRef(null);
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  
  const onClickRef =()=>
  { console.log("inputRef focused")
    inputRef.current.focus();
  }
  const usernameEntered = (event) => {
    setEnteredName(event.target.value);
  };
  const ageEntered = (event) => {
    setEnteredAge(event.target.value);
  };
  const onSubmitHandler = (event) => {
    if (
      enteredName.trim().length === 0 ||
      enteredAge.trim().length == 0 ||
      +enteredAge < 1
    ) {
      return;
    }
    event.preventDefault();
    props.onAddUser(enteredName, enteredAge);
    setEnteredName("");
    setEnteredAge("");
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="username"> Username</label>
        <input ref={inputRef}
          id="username"
          type="text"
          value={enteredName}
          onChange={usernameEntered}
        ></input>
        <label htmlFor="Age">Age (years)</label>
        <input
          id="Age"
          type="numbers"
          value={enteredAge}
          onChange={ageEntered}
        ></input>
        <button onClick={onClickRef} type="submit"> Submit</button>
      </form>
    </Card>
  );
};

export default Users;
