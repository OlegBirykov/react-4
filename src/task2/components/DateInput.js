import PropTypes from 'prop-types';
import './DateInput.css';

function DateInput(props) {
  const { value, onChange } = props;
  return <input className="DateInput" name="date" value={value} onChange={(event) => onChange(event.target.value)} />
}

//ColorInput.propTypes = {
//  input: PropTypes.string.isRequired,
//  onChange: PropTypes.func.isRequired
//};

export default DateInput;
