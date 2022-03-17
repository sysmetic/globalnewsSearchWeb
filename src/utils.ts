export const cameltoCababString = (str: string) => {
  if (!hasWhiteSpace(str)) {
    return str.toLowerCase();
  } else {
    return str
      .split(" ")
      .map(item => item.charAt(0).toLowerCase() + item.slice(1))
      .join("-");
  }
};

function hasWhiteSpace(s: string) {
  return /\s/g.test(s);
}