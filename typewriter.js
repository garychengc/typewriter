const sentence = "hello there from lighthouse labs";
let i = 0;

for (const char of sentence) {
  i++;
  setTimeout(() => {
    process.stdout.write(char);
  }, 50 * i);
}

setTimeout(() => {
  console.log();
}, 50 * i);
