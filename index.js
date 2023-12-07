import clipboardy from 'clipboardy';

export function unless() {
  const processArgs = process.argv.slice(2);

  if (processArgs.length === 1) {
    const unless = processArgs[0];

    const lines = [];

    for (let i = 0; i < 10; i++) {
      console.log(" ".repeat(i * 2) + `- ${unless}`);
      lines.push(" ".repeat(i * 2) + `- ${unless}`);
    }

    for (let i = 9; i >= 0; i--) {
      console.log(" ".repeat(i * 2) + `- ${unless}`);
      lines.push(" ".repeat(i * 2) + `- ${unless}`);
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

unless();