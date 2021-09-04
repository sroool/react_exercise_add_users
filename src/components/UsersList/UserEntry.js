import styles from "./UserEntry.module.css";

const UserEntry = (props) => {
  const username = props.user.username;
  const age = props.user.age;
  return (
    <li className={styles.user_entry}>
      {username} ({age} years old)
    </li>
  );
};

export default UserEntry;
