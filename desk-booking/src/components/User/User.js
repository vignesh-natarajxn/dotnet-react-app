import React from "react";
import Card from "../UI/Card";

import "./User.css";

const User = (props) => {
  const employeeHandler = () => {
    props.userDetails("employee");
  };

  const teamManagerHandler = () => {
    props.userDetails("team manager");
  };

  const floorManagerHandler = () => {
    props.userDetails("floor manager");
  };

  return (
    <div>
      <h1>Proceed as:</h1>
      <Card className="user">
        <h2>Employee</h2>
        <button onClick={employeeHandler}>Select</button>
      </Card>
      <Card className="user">
        <h2>Team Manager</h2>
        <button onClick={teamManagerHandler}>Select</button>
      </Card>
      <Card className="user">
        <h2>Floor Manager</h2>
        <button onClick={floorManagerHandler}>Select</button>
      </Card>
    </div>
  );
};

export default User;
