import clipboardy from 'clipboardy';

export function mihoy() {
  const processArgs = process.argv.slice(2);
  const flagIndex = processArgs.indexOf('-o');
  const useCompactFormat = flagIndex !== -1;
  
  // Remove '-o' from arguments if present
  const words = useCompactFormat 
    ? processArgs.filter(arg => arg !== '-o')
    : processArgs;
  
  if (words.length >= 1) {
    const mihoy = words.join(" ");
    const lines = [];
    
    if (useCompactFormat) {
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          lines.push(" ".repeat(j * 2) + `- ${mihoy}`);
        }
      }
    } else {
      for (let i = 0; i < 5; i++) {
        lines.push(" ".repeat(i * 2) + `- ${mihoy}`);
      }
      for (let i = 4; i >= 0; i--) {
        lines.push(" ".repeat(i * 2) + `- ${mihoy}`);
      }
    }
    
    const output = lines.join('\n');
    console.log(output);
    
    try {
      clipboardy.writeSync(output);
      console.log(`Copied to clipboard!`);
    } catch (err) {
      console.error(`\nError copying to clipboard: ${"message" in err ? err.message : err}`);
    }
  } else {
    console.error('Please provide at least one command line argument.');
  }
}
