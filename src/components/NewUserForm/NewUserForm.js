import React, { useState, useRef } from "react";
import styles from "./NewUserForm.module.css";
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from "../UI/ErrorModal";

const NewUserForm = (props) => {
  //let initialUser = { username: "", age: "" }
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  //const [newUser, setNewUser] = useState(initialUser);
  const [error, setError] = useState();

  const newUserHandler = (event) => {
    event.preventDefault();
    console.log(nameInputRef.current.value);
    const enteredUsername = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0|| parseFloat(enteredAge) < 1) {
      setError({ title: 'Invalid Input', message: 'Please enter a valid name and age (non-empty values).' });
      return;
    }
    props.onAddNewUser({username: enteredUsername, age: enteredAge});
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };
  const errorHandler = event => {
    setError(null);
  };
  return (
    <React.Fragment>
      {error && 
      <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/> }
      <Card className={styles.input}>

        <form onSubmit={newUserHandler}>

          <label htmlFor="username">Username</label>
          <input id="username" ref={nameInputRef}/>
          <label htmlFor="username">Age(Years)</label>
          <input id="age" type="number"  ref={ageInputRef}/>
          <Button type="submit">Add User</Button>

        </form>
      </Card>
    </React.Fragment>
  );
};

export default NewUserForm;
