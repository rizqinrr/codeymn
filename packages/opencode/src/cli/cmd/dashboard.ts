import { spawn } from "child_process"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const DashboardCommand = {
  command: "dashboard",
  describe: "show usage dashboard with charts",
  handler: async () => {
    const repoRoot = path.resolve(__dirname, "..", "..", "..", "..", "..")
    const scriptPath = path.join(repoRoot, "scripts", "stats-dashboard.mjs")

    await new Promise<void>((resolve) => {
      const child = spawn("node", [scriptPath], {
        stdio: "inherit",
        cwd: repoRoot,
      })
      child.on("close", (code) => {
        process.exitCode = code ?? 0
        resolve()
      })
    })
  },
}
