console.log ('Welcome to my Javascript Challenge 1');
console.log (' FizzBuzz is a task where the programmer is asked to print numbers from 1 to 100, but here’s the catch, multiple of three should print “Fizz” and similarly print “Buzz” for multiples of 5 and lastly print “FizzBuzz” for multiples of three and five.');
document.writeln(' FizzBuzz is a task where the programmer is asked to print numbers from 1 to 100, but here’s the catch, multiple of three should print “Fizz” and similarly print “Buzz” for multiples of 5 and lastly print “FizzBuzz” for multiples of three and five.');

const n = 100;

for (let i = 1; i <= n; i++) {
    let a = (i % 3) === 0;
    let b = (i % 5) === 0;
    if (a && b) {
        console.log(`${i}: FizzBuzz`);
        document.writeln(`<p> ${i}: FizzBuzz </p>`);
    } 
    else if (a) {
        console.log(`${i}: Fizz`);
        document.writeln(`<p> ${i}: Fizz </p>`);
    }
    else if (b) {
        console.log(`${i}: Buzz`);
        document.writeln(`<p> ${i}: Buzz </p>`);
    } 
    else {
        console.log(i); 
    }
}