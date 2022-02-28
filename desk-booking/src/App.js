import React, { useEffect, useState } from "react";
import DeskCollection from "./components/Desks/DeskCollection";
import Card from "./components/UI/Card";
import User from "./components/User/User";
import DeskSelection from "./components/Desks/DeskSelection";
import Confirmation from "./components/Desks/Confirmation";
import agent from "./app/api/agent.ts";

import "./App.css";

const FLOOR_RULES = {
  spacing: 0,
};

const App = () => {
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    agent.Activities.list().then((response) => {
      setSlots(response);
    });
  }, []);

  const [rules, setRules] = useState(FLOOR_RULES);
  const [user, setUser] = useState("");

  const [deskUI, setDeskUI] = useState(false);
  const [selectionUI, setSelectionUI] = useState(false);
  const [confirmationUI, setConfirmationUI] = useState(false);

  const bookingHandler = (name) => {
    setSlots((prevSlots) => {
      return prevSlots.map((object) =>
        object.name === name
          ? { ...object, bookingStatus: true, userSelection: true }
          : object
      );
    });
    setConfirmationUI(true);
    slots.map((activity) => {
      agent.Activities.update(activity).then();
    });
  };

  const userSelectionHandler = (name) => {
    setSlots((prevSlots) => {
      return prevSlots.map((object) =>
        object.name === name ? { ...object, userSelection: true } : object
      );
    });
    slots.map((activity) => {
      agent.Activities.update(activity).then();
    });
    if (user === "employee") {
      setDeskUI(false);
    }
    setSelectionUI(true);
  };

  const spacingChangeHandler = (newSpacing) => {
    setRules((prevRules) => {
      return {
        ...prevRules,
        spacing:
          prevRules.spacing + newSpacing >= 0
            ? prevRules.spacing + newSpacing
            : 0,
      };
    });
  };

  const favoritesHandler = (name) => {
    setSlots((prevSlots) => {
      return prevSlots.map((object) =>
        object.name === name
          ? { ...object, favorite: object.favorite ? false : true }
          : object
      );
    });
    slots.map((activity) => {
      agent.Activities.update(activity).then();
    });
  };

  const cancelHandler = (name) => {
    setSlots((prevSlots) => {
      return prevSlots.map((object) =>
        object.name === name
          ? { ...object, bookingStatus: false, userSelection: false }
          : object
      );
    });
    setConfirmationUI(true);
    slots.map((activity) => {
      agent.Activities.update(activity).then();
    });
  };

  const userHandler = (userDetails) => {
    setUser(userDetails);
    setDeskUI(true);
    slots.map((activity) => {
      agent.Activities.update(activity).then();
    });
  };

  const submitHandler = () => {
    setConfirmationUI(true);
    setSelectionUI(false);
    setDeskUI(false);
    slots.map((activity) => {
      agent.Activities.update(activity).then();
    });
  };

  const homeReqHandler = () => {
    setDeskUI(false);
    setConfirmationUI(false);
    setSelectionUI(false);
    setUser("");
    slots.map((activity) => {
      agent.Activities.update(activity).then();
    });
    // setSlots((prevSlots) => {
    //   return prevSlots.map((object) =>
    //     object.userSelection === true
    //       ? { ...object, userSelection: false }
    //       : object
    //   );
    // });
  };

  return (
    <div>
      <h1 className="App-header">Desk Booking facility</h1>

      {user === "" && (
        <Card className="booking-ui">
          <User userDetails={userHandler} />
        </Card>
      )}

      <Card>
        {deskUI === true && (
          <DeskCollection
            slots={slots}
            rules={rules}
            onBooking={bookingHandler}
            onUserSelection={userSelectionHandler}
            onFavorite={favoritesHandler}
            onCancel={cancelHandler}
            onSpacingChange={spacingChangeHandler}
            user={user}
          />
        )}
        {selectionUI === true && (
          <Card className="booking-ui">
            <DeskSelection
              slots={slots}
              setUserInfo={setUser}
              onBooking={bookingHandler}
              onSubmitHandler={submitHandler}
            />
          </Card>
        )}
        {confirmationUI === true && (
          <Confirmation slots={slots} user={user} onHomeReq={homeReqHandler} />
        )}
      </Card>
    </div>
  );
};

export default App;
