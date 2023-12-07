import { execSync } from "child_process";

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

    // Join lines
    const output = lines.join("\n");

    // Platform-specific clipboard command
    const clipboardCommand =
      process.platform === "win32"
        ? "clip"
        : process.platform === "darwin"
        ? "pbcopy"
        : "xclip -selection clipboard";

    // Copy the output to the clipboard
    try {
      execSync(`echo "${output}" | ${clipboardCommand}`);
      console.log("Copied to clipboard!");
    } catch (error) {
      console.error("Unable to copy to clipboard.");
      console.log(
        "Please install xclip on your system to enable clipboard functionality."
      );
      console.log("On Debian/Ubuntu-based systems:");
      console.log("sudo apt-get install xclip");
      console.log("On Red Hat/Fedora-based systems:");
      console.log("sudo yum install xclip");
    }
  } else {
    console.error("Please provide exactly one command line argument.");
  }
}
