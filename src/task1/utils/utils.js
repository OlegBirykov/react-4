function intToRGB(color) {
  const result = {};
  let cl = color;

  result.r = Math.trunc(cl / 0x10000);
  cl %= 0x10000;

  result.g = Math.trunc(cl / 0x100);
  cl %= 0x100;

  result.b = cl;
  return result; 
}

export function colorToHex(color) {
  const rgb = intToRGB(color);
  return `#${rgb.r.toString(16)}${rgb.g.toString(16)}${rgb.b.toString(16)}`; 
}

export function colorToRGB(color) {
  const rgb = intToRGB(color); 
  return `rgb(${rgb.r.toString(16)}, ${rgb.g.toString(16)}, ${rgb.b.toString(16)})`; 
}
