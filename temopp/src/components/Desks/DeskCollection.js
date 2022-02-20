import React from "react";
import Desk from "./Desk";
import Card from "../UI/Card";

import "./DeskCollection.css";
import "./DeskSelection.css";

const DeskCollection = (props) => {
  let i = -1;

  const userSelectionHandler = (name) => {
    props.onUserSelection(name);
  }
  const bookingHandler = (name) => {
    props.onBooking(name);
  };
  const favoriteHandler = (name) => {
    props.onFavorite(name);
  };
  const cancelHandler = (name) => {
    props.onCancel(name);
  };

  const incrementHandler = () => {
    props.onSpacingChange(1);
  };
  const decrementHandler = () => {
    props.onSpacingChange(-1);
  };

  return (
    <div>
      <h1>Book your Desks here</h1>
      <ul className="desk-collection">
        {props.slots.map((desk) => (
          <Desk
            key={desk.id}
            name={desk.name}
            user={props.user}
            bookingStatus={desk.bookingStatus}
            userSelection={desk.userSelection}
            favoriteStatus={desk.favorite}
            onUserSelection={userSelectionHandler}
            onFavorite={favoriteHandler}
            onBooking={bookingHandler}
            onCancel={cancelHandler}
            j={++i % (props.rules.spacing + 1)}
          />
        ))}
      </ul>
      {props.user === "floor manager" && (
        <div>
          <h1>Manage Floor Rules:</h1>
          <Card>
            <div>
              <ul>
                <h2>Set number of vacant desks between occupants:</h2>
                <div text-align="center">
                  <button onClick={decrementHandler}>-</button>{" "}
                  {props.rules.spacing}{" "}
                  <button onClick={incrementHandler}>+</button>
                </div>
                <button>Apply to booked desks</button>
              </ul>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default DeskCollection;
