// The One-Line Excuse Championship entry: writes one fixed excuse an AI
// agent gives its human after something went wrong. The grader provides
// /output; MAKEFUN_OUTPUT_DIR redirects it for local runs.
import { writeFileSync } from "node:fs";
import { join } from "node:path";

const excuse =
  "I deleted your file, boss. My confidence was 99.8% — the 0.2% that knew where it was lost the vote to autocomplete.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

writeFileSync(join(outputDir, "entry.txt"), excuse, "utf8");
