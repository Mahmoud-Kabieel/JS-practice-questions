function hasDuplicate(numbers) {
  return new Set(numbers).size !== numbers.length;
}
