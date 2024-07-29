function createInt8TypedArray(length, position, value) {
  // Check if the length and position are valid and the value is within the Int8 range
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  if (value < -128 || value > 127) {
    throw new Error('Value out of range for Int8');
  }

  // Create an ArrayBuffer with the given length
  const buffer = new ArrayBuffer(length);

  // Create a DataView to interact with the buffer
  const dataView = new DataView(buffer);

  // Set the Int8 value at the specified position
  dataView.setInt8(position, value);

  return dataView;
}

export default createInt8TypedArray;
