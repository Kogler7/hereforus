export default function straintIn(val, low, hig) {
  let dif = hig - low;
  while (val > hig) val -= dif;
  while (val < low) val += dif;
  return val;
}