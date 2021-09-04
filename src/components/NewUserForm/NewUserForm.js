import React, { useState } from "react";
import styles from "./NewUserForm.module.css";
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from "../UI/ErrorModal";

const NewUserForm = (props) => {
  let initialUser = { username: "", age: "" }
  const [newUser, setNewUser] = useState(initialUser);
  const [error, setError] = useState();
  const newUsernameChangedHandler = (event) => {
    setNewUser((prevState) => ({ ...prevState, username: event.target.value }));
  };
  const newAgeChangedHandler = (event) => {
    setNewUser((prevState) => ({ ...prevState, age: event.target.value }));
  };
  const newUserHandler = (event) => {
    event.preventDefault();
    console.log(newUser);
    console.log(typeof (newUser.age));
    if (newUser.username.trim().length === 0 || parseFloat(newUser.age) < 1) {
      setError({ title: 'Invalid Input', message: 'Please enter a valid name and age (non-empty values).' });
      return;
    }
    console.log(event)
    console.log(typeof (event.target))
    setNewUser(initialUser)
    props.onAddNewUser(newUser);
  };
  const errorHandler = event => {
    setError(null);
  };
  return (
    <div>
      {error && 
      <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/> }
      <Card className={styles.input}>

        <form onSubmit={newUserHandler}>

          <label htmlFor="username">Username</label>
          <input id="username" onChange={newUsernameChangedHandler} value={newUser.username} />
          <label htmlFor="username">Age(Years)</label>
          <input id="age" type="number" onChange={newAgeChangedHandler} value={newUser.age} />
          <Button type="submit">Add User</Button>

        </form>
      </Card>
    </div>
  );
};

export default NewUserForm;
