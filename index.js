import { execSync } from 'child_process';

export function mihoy() {
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

    // Join lines
    const output = lines.join('\n');

    // Platform-specific clipboard command
    const clipboardCommand =
      process.platform === 'win32'
        ? 'clip'
        : process.platform === 'darwin'
        ? 'pbcopy'
        : 'xclip -selection clipboard';

    // Copy the output to the clipboard
    try {
      execSync(`echo "${output}" | ${clipboardCommand}`);
      console.log('Copied to clipboard!');
    } catch (error) {
      console.error('Unable to copy to clipboard:', error.message);
    }
  } else {
    console.error('Please provide exactly one command line argument.');
  }
}
