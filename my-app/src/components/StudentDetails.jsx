function StudentDetails(props) {
    return (
      <>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
            <p>Student: {props.isStudent? "yes": "No"}</p> 
      </>
    );
}

export default StudentDetails;