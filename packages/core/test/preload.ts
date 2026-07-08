import path from "path"

process.env.CODEYMN_DB = ":memory:"
process.env.CODEYMN_MODELS_PATH = path.join(import.meta.dir, "plugin", "fixtures", "models-dev.json")
process.env.CODEYMN_DISABLE_MODELS_FETCH = "true"
