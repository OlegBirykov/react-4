import './ColorInput.css';
import { colorToHex } from '../utils/utils';

function ColorInput(props) {
  const { color } = props;
  return <input className="ColorInput" value={colorToHex(color)} />
}

export default ColorInput;
