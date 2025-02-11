import clipboardy from "clipboardy";

function toSpongeBobCase(text) {
  return text
    .split("")
    .map((char) =>
      Math.random() > 0.5 ? char.toUpperCase() : char.toLowerCase(),
    )
    .join("");
}

export function mihoy() {
  const processArgs = process.argv.slice(2);
  const flagIndexO = processArgs.indexOf("-o");
  const flagIndexS = processArgs.indexOf("-s");
  const useCompactFormat = flagIndexO !== -1;
  const useSpongeBobCase = flagIndexS !== -1;

  // Remove flags from arguments
  const words = processArgs.filter((arg) => arg !== "-o" && arg !== "-s");

  if (words.length >= 1) {
    const mihoy = words.join(" ");
    const lines = [];

    if (useCompactFormat) {
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          let text = useSpongeBobCase ? toSpongeBobCase(mihoy) : mihoy;
          lines.push(" ".repeat(j * 2) + `- ${text}`);
        }
      }
    } else {
      for (let i = 0; i < 5; i++) {
        let text = useSpongeBobCase ? toSpongeBobCase(mihoy) : mihoy;
        lines.push(" ".repeat(i * 2) + `- ${text}`);
      }
      for (let i = 4; i >= 0; i--) {
        let text = useSpongeBobCase ? toSpongeBobCase(mihoy) : mihoy;
        lines.push(" ".repeat(i * 2) + `- ${text}`);
      }
    }

    const output = lines.join("\n");
    console.log(output);

    try {
      clipboardy.writeSync(output);
      console.log(`Copied to clipboard!`);
    } catch (err) {
      console.error(
        `\nError copying to clipboard: ${"message" in err ? err.message : err}`,
      );
    }
  } else {
    console.error("Please provide at least one command line argument.");
  }
}
