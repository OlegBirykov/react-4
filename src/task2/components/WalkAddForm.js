import { useState } from 'react';
import PropTypes from 'prop-types';
import './WalkAddForm.css';
import DateInput from './DateInput';
import DistanceInput from './DistanceInput';

function WalkAddForm(props) {
  const { form, onSubmit } = props;
  const { init, date, distance } = form;

  const [dateText, setDateText] = useState('');
  const [distanceText, setDistanceText] = useState('');
  const [active, setActive] = useState(false);

  if (init && !active) {
    setDateText(date ? date : '');
    setDistanceText(distance ? distance : '');
    setActive(true);
  }

  const onDateChange = (value) => {
    setDateText(value);
  }

  const onDistanceChange = (value) => {
    setDistanceText(value);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    setDateText('');
    setDistanceText('');
    setActive(false);
    onSubmit({ init: false, date: 378, distance: 34 });
  }

  return (
    <form className="WalkAddForm" onSubmit={onFormSubmit}>
      <DateInput value={dateText} onChange={onDateChange} />
      <DistanceInput value={distanceText} onChange={onDistanceChange} />
      <button type="submit">Ok</button>
    </form>
  );
}

//ColorInput.propTypes = {
//  input: PropTypes.string.isRequired,
//  onChange: PropTypes.func.isRequired
//};

export default WalkAddForm;
