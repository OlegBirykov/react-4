import PropTypes from 'prop-types';
import './DistanceInput.css';

function DistanceInput(props) {
  const { value, onChange } = props;
  return <input className="DistanceInput" name="distance" value={value} onChange={(event) => onChange(event.target.value)} />
}

//ColorInput.propTypes = {
//  input: PropTypes.string.isRequired,
//  onChange: PropTypes.func.isRequired
//};

export default DistanceInput;
