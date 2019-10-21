const sentence = "hello there from lighthouse labs";
let delay = 0;
let index = 0;
function animate(char, interval) {
  setTimeout(() => {
    index++;
    process.stdout.write(char);
    if (index === sentence.length){
      process.stdout.write("\n");
    }
  }, interval)
}

for (const char of sentence) {
  animate(char, delay);
  delay += 50;  
}
