import { Config } from "effect"

export function truthy(key: string) {
  const value = process.env[key]?.toLowerCase()
  return value === "true" || value === "1"
}

const copy = process.env["CODEYMN_EXPERIMENTAL_DISABLE_COPY_ON_SELECT"]
const fff = process.env["CODEYMN_DISABLE_FFF"]

function enabledByExperimental(key: string) {
  return process.env[key] === undefined ? truthy("CODEYMN_EXPERIMENTAL") : truthy(key)
}

export const Flag = {
  OTEL_EXPORTER_OTLP_ENDPOINT: process.env["OTEL_EXPORTER_OTLP_ENDPOINT"],
  OTEL_EXPORTER_OTLP_HEADERS: process.env["OTEL_EXPORTER_OTLP_HEADERS"],

  CODEYMN_AUTO_HEAP_SNAPSHOT: truthy("CODEYMN_AUTO_HEAP_SNAPSHOT"),
  CODEYMN_GIT_BASH_PATH: process.env["CODEYMN_GIT_BASH_PATH"],
  CODEYMN_CONFIG: process.env["CODEYMN_CONFIG"],
  CODEYMN_CONFIG_CONTENT: process.env["CODEYMN_CONFIG_CONTENT"],
  CODEYMN_DISABLE_AUTOUPDATE: truthy("CODEYMN_DISABLE_AUTOUPDATE"),
  CODEYMN_ALWAYS_NOTIFY_UPDATE: truthy("CODEYMN_ALWAYS_NOTIFY_UPDATE"),
  CODEYMN_DISABLE_PRUNE: truthy("CODEYMN_DISABLE_PRUNE"),
  CODEYMN_DISABLE_TERMINAL_TITLE: truthy("CODEYMN_DISABLE_TERMINAL_TITLE"),
  CODEYMN_SHOW_TTFD: truthy("CODEYMN_SHOW_TTFD"),
  CODEYMN_DISABLE_AUTOCOMPACT: truthy("CODEYMN_DISABLE_AUTOCOMPACT"),
  CODEYMN_DISABLE_MODELS_FETCH: truthy("CODEYMN_DISABLE_MODELS_FETCH"),
  CODEYMN_DISABLE_MOUSE: truthy("CODEYMN_DISABLE_MOUSE"),
  CODEYMN_FAKE_VCS: process.env["CODEYMN_FAKE_VCS"],
  CODEYMN_SERVER_PASSWORD: process.env["CODEYMN_SERVER_PASSWORD"],
  CODEYMN_SERVER_USERNAME: process.env["CODEYMN_SERVER_USERNAME"],
  CODEYMN_DISABLE_FFF: fff === undefined ? process.platform === "win32" : truthy("CODEYMN_DISABLE_FFF"),

  // Experimental
  CODEYMN_EXPERIMENTAL_FILEWATCHER: Config.boolean("CODEYMN_EXPERIMENTAL_FILEWATCHER").pipe(
    Config.withDefault(false),
  ),
  CODEYMN_EXPERIMENTAL_DISABLE_FILEWATCHER: Config.boolean("CODEYMN_EXPERIMENTAL_DISABLE_FILEWATCHER").pipe(
    Config.withDefault(false),
  ),
  CODEYMN_EXPERIMENTAL_DISABLE_COPY_ON_SELECT:
    copy === undefined ? process.platform === "win32" : truthy("CODEYMN_EXPERIMENTAL_DISABLE_COPY_ON_SELECT"),
  CODEYMN_MODELS_URL: process.env["CODEYMN_MODELS_URL"],
  CODEYMN_MODELS_PATH: process.env["CODEYMN_MODELS_PATH"],
  CODEYMN_DB: process.env["CODEYMN_DB"],

  CODEYMN_WORKSPACE_ID: process.env["CODEYMN_WORKSPACE_ID"],
  CODEYMN_EXPERIMENTAL_WORKSPACES: enabledByExperimental("CODEYMN_EXPERIMENTAL_WORKSPACES"),

  // Evaluated at access time (not module load) because tests, the CLI, and
  // external tooling set these env vars at runtime.
  get CODEYMN_DISABLE_PROJECT_CONFIG() {
    return truthy("CODEYMN_DISABLE_PROJECT_CONFIG")
  },
  get CODEYMN_EXPERIMENTAL_REFERENCES() {
    return enabledByExperimental("CODEYMN_EXPERIMENTAL_REFERENCES")
  },
  get CODEYMN_TUI_CONFIG() {
    return process.env["CODEYMN_TUI_CONFIG"]
  },
  get CODEYMN_CONFIG_DIR() {
    return process.env["CODEYMN_CONFIG_DIR"]
  },
  get CODEYMN_PURE() {
    return truthy("CODEYMN_PURE")
  },
  get CODEYMN_PERMISSION() {
    return process.env["CODEYMN_PERMISSION"]
  },
  get CODEYMN_PLUGIN_META_FILE() {
    return process.env["CODEYMN_PLUGIN_META_FILE"]
  },
  get CODEYMN_CLIENT() {
    return process.env["CODEYMN_CLIENT"] ?? "cli"
  },
}
