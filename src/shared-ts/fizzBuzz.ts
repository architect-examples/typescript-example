function fizzBuzz (n: number): string {
  if (n % 15 === 0) return 'FizzBuzz';
  if (n % 3 === 0) return 'Fizz';
  if (n % 5 === 0) return 'Buzz';
  return String(n);
}

function createFizzBuzz (n: number): string {
  const collected = Array(n + 1).fill(0).map((_, i) => fizzBuzz(i));
  return collected.join(' 🐝 ');
}

export { createFizzBuzz };
