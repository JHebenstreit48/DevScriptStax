import { execSync } from "node:child_process";

function run(cmd: string) {
  execSync(cmd, { stdio: "inherit" });
}

const args = process.argv.slice(2).join(" ");

run(`tsx -r tsconfig-paths/register src/scripts/cli/gen-pages.ts ${args}`);
run(`tsx -r tsconfig-paths/register src/scripts/cli/gen-routes.ts ${args}`);