#!/usr/bin/env node
import { homedir } from "node:os";
import { join } from "node:path";
import { existsSync, mkdirSync, cpSync, renameSync } from "node:fs";

const HOME = homedir();

const OPENCODE_CONFIG = join(HOME, ".config", "opencode");
const OPENCODE_DATA = join(HOME, ".local", "share", "opencode");

const CODEYMN_CONFIG = join(HOME, ".config", "codeymn");
const CODEYMN_DATA = join(HOME, ".local", "share", "codeymn");

console.log("╔══════════════════════════════════════════════════╗");
console.log("║  CODEYMN MIGRATION SCRIPT                        ║");
console.log("║  Migrate data from OpenCode to Codeymn           ║");
console.log("╚══════════════════════════════════════════════════╝");
console.log();

if (!existsSync(OPENCODE_CONFIG) && !existsSync(OPENCODE_DATA)) {
  console.log("⚠️  No OpenCode data found. Nothing to migrate.");
  console.log(`   Checked:`);
  console.log(`   - ${OPENCODE_CONFIG}`);
  console.log(`   - ${OPENCODE_DATA}`);
  process.exit(0);
}

console.log("📁 Source paths:");
console.log(`   Config: ${OPENCODE_CONFIG} ${existsSync(OPENCODE_CONFIG) ? '✓' : '✗'}`);
console.log(`   Data:   ${OPENCODE_DATA} ${existsSync(OPENCODE_DATA) ? '✓' : '✗'}`);
console.log();
console.log("📁 Destination paths:");
console.log(`   Config: ${CODEYMN_CONFIG}`);
console.log(`   Data:   ${CODEYMN_DATA}`);
console.log();

let migrated = 0;
let skipped = 0;

try {
  // Migrate config
  if (existsSync(OPENCODE_CONFIG)) {
    console.log("📋 Migrating config directory...");
    mkdirSync(CODEYMN_CONFIG, { recursive: true });
    cpSync(OPENCODE_CONFIG, CODEYMN_CONFIG, { recursive: true });
    migrated++;
    
    // Rename config files
    const opencodeJson = join(CODEYMN_CONFIG, "opencode.json");
    const codeymnJson = join(CODEYMN_CONFIG, "codeymn.json");
    if (existsSync(opencodeJson) && !existsSync(codeymnJson)) {
      renameSync(opencodeJson, codeymnJson);
      console.log("   ✓ Renamed opencode.json → codeymn.json");
    }
    
    const opencodeJsonc = join(CODEYMN_CONFIG, "opencode.jsonc");
    const codeymnJsonc = join(CODEYMN_CONFIG, "codeymn.jsonc");
    if (existsSync(opencodeJsonc) && !existsSync(codeymnJsonc)) {
      renameSync(opencodeJsonc, codeymnJsonc);
      console.log("   ✓ Renamed opencode.jsonc → codeymn.jsonc");
    }
    
    console.log("   ✓ Config directory migrated");
  }

  // Migrate data (skip if only DB exists to avoid conflicts)
  if (existsSync(OPENCODE_DATA)) {
    console.log("💾 Migrating data directory...");
    mkdirSync(CODEYMN_DATA, { recursive: true });
    cpSync(OPENCODE_DATA, CODEYMN_DATA, { recursive: true });
    migrated++;
    
    // Rename database
    const opencodeDb = join(CODEYMN_DATA, "opencode.db");
    const codeymnDb = join(CODEYMN_DATA, "codeymn.db");
    if (existsSync(opencodeDb) && !existsSync(codeymnDb)) {
      renameSync(opencodeDb, codeymnDb);
      console.log("   ✓ Renamed opencode.db → codeymn.db");
    }
    
    // Rename channel-specific DBs
    const files = [
      "opencode-dev.db",
      "opencode-beta.db", 
      "opencode-prod.db"
    ];
    
    for (const file of files) {
      const oldPath = join(CODEYMN_DATA, file);
      const newPath = join(CODEYMN_DATA, file.replace("opencode", "codeymn"));
      if (existsSync(oldPath) && !existsSync(newPath)) {
        renameSync(oldPath, newPath);
        console.log(`   ✓ Renamed ${file} → ${file.replace("opencode", "codeymn")}`);
      }
    }
    
    console.log("   ✓ Data directory migrated");
  }

  console.log();
  console.log("══════════════════════════════════════════════════");
  console.log(`✅ Migration complete!`);
  console.log(`   Migrated: ${migrated} directories`);
  console.log(`   Skipped: ${skipped}`);
  console.log();
  console.log("🚀 Next steps:");
  console.log("   1. Run codeymn to verify it works");
  console.log("   2. Check your sessions: codeymn --continue");
  console.log("   3. (Optional) Delete old OpenCode data:");
  console.log(`      rm -rf ${OPENCODE_CONFIG}`);
  console.log(`      rm -rf ${OPENCODE_DATA}`);
  console.log();

} catch (error) {
  console.error();
  console.error("❌ Migration failed:");
  console.error(`   ${error.message}`);
  console.error();
  console.error("   Your OpenCode data is still intact at:");
  console.error(`   - ${OPENCODE_CONFIG}`);
  console.error(`   - ${OPENCODE_DATA}`);
  process.exit(1);
}
