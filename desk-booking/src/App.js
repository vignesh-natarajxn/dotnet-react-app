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

const SLOT_DETAILS = [
  {
    id: "d1",
    name: "Desk 1",
    bookingStatus: false,
    favorite: false,
    userSelection: false,
  },
  {
    id: "d2",
    name: "Desk 2",
    bookingStatus: true,
    favorite: false,
    userSelection: false,
  },
  {
    id: "d3",
    name: "Desk 3",
    bookingStatus: false,
    favorite: false,
    userSelection: false,
  },
  {
    id: "d4",
    name: "Desk 4",
    bookingStatus: false,
    favorite: false,
    userSelection: false,
  },
  {
    id: "d5",
    name: "Desk 5",
    bookingStatus: true,
    favorite: false,
    userSelection: false,
  },
  {
    id: "d6",
    name: "Desk 6",
    bookingStatus: true,
    favorite: false,
    userSelection: false,
  },
  {
    id: "d7",
    name: "Desk 7",
    bookingStatus: false,
    favorite: false,
    userSelection: false,
  },
  {
    id: "d8",
    name: "Desk 8",
    bookingStatus: false,
    favorite: false,
    userSelection: false,
  },
  {
    id: "d9",
    name: "Desk 9",
    bookingStatus: false,
    favorite: false,
    userSelection: false,
  },
  {
    id: "d10",
    name: "Desk 10",
    bookingStatus: false,
    favorite: false,
    userSelection: false,
  },
  {
    id: "d11",
    name: "Desk 11",
    bookingStatus: false,
    favorite: false,
    userSelection: false,
  },
  {
    id: "d12",
    name: "Desk 12",
    bookingStatus: false,
    favorite: false,
    userSelection: false,
  },
  {
    id: "d13",
    name: "Desk 13",
    bookingStatus: true,
    favorite: false,
    userSelection: false,
  },
  {
    id: "d14",
    name: "Desk 14",
    bookingStatus: true,
    favorite: false,
    userSelection: false,
  },
  {
    id: "d15",
    name: "Desk 15",
    bookingStatus: true,
    favorite: false,
    userSelection: false,
  },
  {
    id: "d16",
    name: "Desk 16",
    bookingStatus: false,
    favorite: false,
    userSelection: false,
  },
  {
    id: "d17",
    name: "Desk 17",
    bookingStatus: false,
    favorite: false,
    userSelection: false,
  },
  {
    id: "d18",
    name: "Desk 18",
    bookingStatus: false,
    favorite: false,
    userSelection: false,
  },
  {
    id: "d19",
    name: "Desk 19",
    bookingStatus: false,
    favorite: false,
    userSelection: false,
  },
  {
    id: "d20",
    name: "Desk 20",
    bookingStatus: false,
    favorite: false,
    userSelection: false,
  },
];

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
  };

  const userSelectionHandler = (name) => {
    setSlots((prevSlots) => {
      return prevSlots.map((object) =>
        object.name === name ? { ...object, userSelection: true } : object
      );
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
  };

  const cancelHandler = (name) => {
    setSlots((prevSlots) => {
      return prevSlots.map((object) =>
        object.name === name
          ? { ...object, bookingStatus: false, userSelection: false }
          : object
      );
    });
  };

  const userHandler = (userDetails) => {
    setUser(userDetails);
    setDeskUI(true);
  };

  const submitHandler = () => {
    setConfirmationUI(true);
    setSelectionUI(false);
    setDeskUI(false);
  };

  const homeReqHandler = () => {
    setDeskUI(false);
    setConfirmationUI(false);
    setSelectionUI(false);
    setUser("");
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
