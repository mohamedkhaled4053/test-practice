export function transformToNumber(value) {
  if(typeof(value) === 'object'){
    return NaN
  }
  return +value;
}

