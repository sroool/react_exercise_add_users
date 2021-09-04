import { useState } from "react";
import NewUserForm from "./components/NewUserForm/NewUserForm";
import UsersList from "./components/UsersList/UsersList";


function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserToList = (data) => {
    console.log("New user form sent some data:", data);
    setUsersList((prevState) => [...prevState, data]);
  };
  return (
    <div>
      <NewUserForm onAddNewUser={addUserToList} />
      <UsersList list={usersList}/>
    </div>
  );
}

export default App;
