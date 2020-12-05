import { useState } from 'react';
import './ColorView.css';
import './components/ColorForm';
import ColorForm from './components/ColorForm';
import { colorToHex } from './utils/utils';

function ColorView() {
  const [color, setColor] = useState(0x884411);

  const onSubmitColorForm = (inputColor) => {
    setColor(() => inputColor);
  }

  return (
    <div className="ColorView" style={{ backgroundColor: colorToHex(color) }}>
      <ColorForm color={color} onSubmit={onSubmitColorForm} />
    </div>
  );
}

export default ColorView;
