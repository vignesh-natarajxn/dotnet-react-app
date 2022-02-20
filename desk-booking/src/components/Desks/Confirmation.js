import Card from "../UI/Card";

import "../../App.css";

const Confirmation = (props) => {
  const BOOKED_SLOTS = props.slots.filter(
    (slot) => slot.userSelection === true
  );
  
  const homeHandler = () => {
    props.onHomeReq()
  }
  console.log(BOOKED_SLOTS);

  return (
    <Card className="App">
      {props.user === "floor manager" ? (
        <h1>The Desks have been booked sucessfully!</h1>
      ) : (
        <h1>The Desk bookings have been sent for approval!</h1>
      )}
      <Card className='booking-ui'>
        <h2>Click to proceed to the home page</h2>
        <div>
          <button onClick={homeHandler}>Home</button>
        </div>
        </Card>
    </Card>
  );
};

export default Confirmation;
