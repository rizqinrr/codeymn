import { SECRET } from "./secret"
import { shortDomain } from "./stage"

const storage = new sst.cloudflare.Bucket("EnterpriseStorage")

new sst.cloudflare.x.SolidStart("Teams", {
  domain: shortDomain,
  path: "packages/enterprise",
  buildCommand: "bun run build:cloudflare",
  link: [SECRET.SupportApiKey],
  environment: {
    CODEYMN_STORAGE_ADAPTER: "r2",
    CODEYMN_STORAGE_ACCOUNT_ID: sst.cloudflare.DEFAULT_ACCOUNT_ID,
    CODEYMN_STORAGE_ACCESS_KEY_ID: SECRET.R2AccessKey.value,
    CODEYMN_STORAGE_SECRET_ACCESS_KEY: SECRET.R2SecretKey.value,
    CODEYMN_STORAGE_BUCKET: storage.name,
  },
})
