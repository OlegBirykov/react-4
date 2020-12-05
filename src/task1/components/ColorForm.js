import PropTypes from 'prop-types';
import './ColorForm.css';
import ColorInput from './ColorInput';
import { colorToRGB } from '../utils/utils';

function ColorForm(props) {
  const { color, onSubmit } = props;

  return (
    <form className="ColorForm" onSubmit={(inputColor) => onSubmit(inputColor)}>
      <ColorInput color={color} />
      <label className="ColorForm-rgb">{colorToRGB(color)}</label>
    </form>
  );
}

ColorForm.propTypes = {
  color: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default ColorForm;

