export function makeSampleArray(count: number) {
  const result = [];
  for (let i = 1; i <= count; i++) {
    result.push({id: i});
  }
  return result;
}
