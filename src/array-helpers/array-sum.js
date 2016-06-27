export default function arraySum(a, b) {

  let result = 0;
  for(let i=0; i<a.length; i++) {
    result = a[i] + result;

  }

  return result;

}
