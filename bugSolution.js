function foo(x) {
  if (x === null || x === undefined) {
    return 0;
  }
  return x.length;
}
// or even better
function foo(x){
    return x == null ? 0 : x.length;
}