export default word => {
  return word.replace(/\b\w/g, l => l.toUpperCase());
};
