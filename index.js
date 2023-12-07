import clipboardy from 'clipboardy';

export function mihoy() {
  const processArgs = process.argv.slice(2);

  if (processArgs.length >= 1) {
    const mihoy = processArgs.join(" ");

    const lines = [];

    for (let i = 0; i < 10; i++) {
      console.log(" ".repeat(i * 2) + `- ${mihoy}`);
      lines.push(" ".repeat(i * 2) + `- ${mihoy}`);
    }

    for (let i = 9; i >= 0; i--) {
      console.log(" ".repeat(i * 2) + `- ${mihoy}`);
      lines.push(" ".repeat(i * 2) + `- ${mihoy}`);
    }

    // Join lines and copy the output to the clipboard
    const output = lines.join('\n');

    // Copy the output to the clipboard
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
