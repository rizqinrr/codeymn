declare global {
  const CODEYMN_VERSION: string
  const CODEYMN_CHANNEL: string
}

export const InstallationVersion = typeof CODEYMN_VERSION === "string" ? CODEYMN_VERSION : "local"
export const InstallationChannel = typeof CODEYMN_CHANNEL === "string" ? CODEYMN_CHANNEL : "local"
export const InstallationLocal = InstallationChannel === "local"
