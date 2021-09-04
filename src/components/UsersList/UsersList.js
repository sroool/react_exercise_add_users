import styles from "./UsersList.module.css";
import UserEntry from "./UserEntry";
import Card from '../UI/Card';

const UsersList = (props) => {
  const usersDOMList = props.list.map((user, i) => (
    <UserEntry key={i} user={user} />
  ));
  return <Card className={styles.users}>

    <ul>{usersDOMList}</ul>;
  </Card>
};

export default UsersList;
