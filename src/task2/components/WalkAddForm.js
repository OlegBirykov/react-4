import { useState } from 'react';
import PropTypes from 'prop-types';
import './WalkAddForm.css';
import DateInput from './DateInput';
import DistanceInput from './DistanceInput';
import WalkModel from '../models/WalkModel';

function WalkAddForm(props) {
  const { form, onSubmit } = props;
  const { id, date, distance } = form;

  const [dateText, setDateText] = useState('');
  const [distanceText, setDistanceText] = useState('');
  const [active, setActive] = useState(false);

  if (!active && id !== null) {
    setActive(true);
    setDateText(date ? date : '');
    setDistanceText(distance ? distance : '');
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
    onSubmit({ id: null, date: 378, distance: 34 });
  }

  return (
    <form className="WalkAddForm" onSubmit={onFormSubmit}>
      <DateInput value={dateText} onChange={onDateChange} />
      <DistanceInput value={distanceText} onChange={onDistanceChange} />
      <button className="WalkAddForm-button" type="submit">OK</button>
    </form>
  );
}

WalkAddForm.propTypes = {
  form: PropTypes.instanceOf(WalkModel).isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default WalkAddForm;
