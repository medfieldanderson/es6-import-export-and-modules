const pi = 3.1415962;

const doublePi = () => {
  return pi * 2;
};

const triplePi = () => {
  return pi * 3;
};

// This is the default export; we can change this name when imported if we want
export default pi;

// export multipe non-default items as well
export { doublePi, triplePi };
