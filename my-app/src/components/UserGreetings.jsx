function UserGreetings(props) {
  if (props.isLoggedIn) {
    return <p>Welcome {props.username} </p>;
  }

  return <p>Log in to continue</p>;
}

export default UserGreetings;
