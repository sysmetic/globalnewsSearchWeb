export const CameltoCababString = (str: string) => {
  return str
    .split(" ")
    .map(item => item.charAt(0).toLowerCase() + item.slice(1))
    .join("-");
};
