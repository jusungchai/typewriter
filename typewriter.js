const sentence = "hello there from lighthouse labs";
let delay = 0;
let index = 0;
for (const char of sentence) {
  setTimeout(() => {
    index++;
    process.stdout.write(char);
    if (index === sentence.length){
      process.stdout.write("\n");
    }
  }, delay)
  delay += 50;  
}
