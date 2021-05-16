import './Date.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

const calendar = <FontAwesomeIcon className="icon" icon={faCalendar} />

type DatePros = {
  text: string;
  date: string;
}

function Date(props: DatePros) {
  const { text, date } = props;

  return (
    <div className="date">
      <div className="date-info">
        <div className="date-label">{text}</div>
        <div className="date-text">{date}</div>
      </div>
      {calendar}
    </div>
  );
}

export default Date;