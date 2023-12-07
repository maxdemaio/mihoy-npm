import clipboardy from 'clipboardy';

export function mihoy() {
  const processArgs = process.argv.slice(2);

  if (processArgs.length === 1) {
    const mihoy = processArgs[0];

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
    clipboardy.writeSync(output);
    console.log(`Copied to clipboard!`);
  } else {
    console.error('Please provide exactly one command line argument.');
  }
}