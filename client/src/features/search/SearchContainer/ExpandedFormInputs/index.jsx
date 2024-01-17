import ModalRegion from "./ModalRegion";
import ModalLocation from "./ModalLocation";
import ModalCalendar from "./ModalCalendar";
import ModalGuests from "./ModalGuests";

const ExpandedFormInputs = ({
  switchFocus,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => {
  let content;
  switch (switchFocus) {
    case "Regions":
      content = <ModalRegion />;
      break;
    case "Locations":
      content = <ModalLocation />;
      break;
    case "Calendar":
      // inbox: edit css of datepicker to remove excess selected blank slots
      content = (
        <ModalCalendar
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />
      );
      break;
    case "Guests":
      content = <ModalGuests />;
      break;
    default:
      content = <div></div>;
  }
  return <>{content}</>;
};

export default ExpandedFormInputs;
