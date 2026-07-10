import { DatabaseSync } from "node:sqlite";
import { homedir } from "node:os";
import { join } from "node:path";
import { statSync, readdirSync } from "node:fs";

const HOME = homedir();
const DB_PATH = join(HOME, ".local", "share", "codeymn", "codeymn.db");
const CONFIG_DIR = join(HOME, ".config", "codeymn");
const DATA_DIR = join(HOME, ".local", "share", "codeymn");
const BAR_WIDTH = 20;
const SEP = "\u2500".repeat(58);

function connect() {
  const db = new DatabaseSync(DB_PATH, { readonly: true });
  return db;
}

function query(db, sql, ...params) {
  const stmt = db.prepare(sql);
  return stmt.all(...params);
}

function now() {
  return Date.now();
}

function startOfDay(ms) {
  const d = new Date(ms);
  return new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
}

function formatNumber(n) {
  if (n == null) return "0";
  if (n >= 1e6) return (n / 1e6).toFixed(1) + "M";
  if (n >= 1e3) return (n / 1e3).toFixed(1) + "K";
  return n.toString();
}

function formatCost(n) {
  if (n == null || n === 0) return "$0.00";
  return "$" + n.toFixed(4);
}

function formatBytes(bytes) {
  if (bytes < 1024) return bytes + " B";
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + " KB";
  if (bytes < 1024 * 1024 * 1024) return (bytes / (1024 * 1024)).toFixed(2) + " MB";
  return (bytes / (1024 * 1024 * 1024)).toFixed(2) + " GB";
}

function dirSize(dirPath) {
  let total = 0;
  try {
    const entries = readdirSync(dirPath, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = join(dirPath, entry.name);
      try {
        if (entry.isDirectory()) {
          total += dirSize(fullPath);
        } else if (entry.isFile()) {
          total += statSync(fullPath).size;
        }
      } catch (_) {}
    }
  } catch (_) {}
  return total;
}

function formatDate(ms) {
  const d = new Date(ms);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function barChart(value, max) {
  if (max === 0) return " ".repeat(BAR_WIDTH);
  const filled = Math.max(1, Math.round((value / max) * BAR_WIDTH));
  return "\u2588".repeat(filled) + "\u2591".repeat(BAR_WIDTH - filled);
}

function rightPad(str, len) {
  if (str.length >= len) return str;
  return str + " ".repeat(len - str.length);
}

function leftPad(str, len) {
  if (str.length >= len) return str + " ";
  return " ".repeat(len - str.length) + str;
}

function main() {
  const db = connect();

  try {
    const todayStart = startOfDay(now());
    const weekStart = todayStart - 7 * 24 * 60 * 60 * 1000;

    // ─── 1. OVERVIEW ───────────────────────────────────────────
    const overview = query(db, `
      SELECT
        COUNT(*) as total_sessions,
        SUM(cost) as total_cost,
        SUM(tokens_input) as total_input,
        SUM(tokens_output) as total_output,
        SUM(tokens_reasoning) as total_reasoning,
        SUM(tokens_cache_read) as total_cache_read,
        SUM(tokens_cache_write) as total_cache_write
      FROM session
      WHERE time_archived IS NULL
    `)[0];

    // Today stats
    const today = query(db, `
      SELECT
        COUNT(*) as sessions,
        SUM(cost) as cost,
        SUM(tokens_input) as input_tokens,
        SUM(tokens_output) as output_tokens,
        SUM(tokens_reasoning) as reasoning_tokens
      FROM session
      WHERE time_archived IS NULL AND time_created >= ?
    `, todayStart)[0];

    const avgCost = overview.total_sessions > 0
      ? overview.total_cost / overview.total_sessions
      : 0;

    console.log("");
    console.log("\u250C" + SEP + "\u2510");
    console.log("\u2502" + "  \u001b[1;36mCODEYMN USAGE DASHBOARD\u001b[0m" + " ".repeat(33) + "\u2502");
    console.log("\u251C" + SEP + "\u2524");
    console.log("\u2502" + "  \u001b[1mRINGKASAN                                                            \u001b[0m\u2502");
    console.log("\u2502" + "                                                                      \u2502");
    console.log("\u2502" + `  Total Sesi         ${leftPad(formatNumber(overview.total_sessions), 8)}                                        \u2502`);
    console.log("\u2502" + `  Total Cost         ${leftPad(formatCost(overview.total_cost), 12)}                                    \u2502`);
    console.log("\u2502" + `  Avg Cost/Sesi      ${leftPad(formatCost(avgCost), 12)}                                    \u2502`);
    console.log("\u2502" + `  Total Input Token  ${leftPad(formatNumber(overview.total_input), 14)}                                \u2502`);
    console.log("\u2502" + `  Total Output Token ${leftPad(formatNumber(overview.total_output), 14)}                                \u2502`);
    if (overview.total_reasoning > 0) {
      console.log("\u2502" + `  Reasoning Token    ${leftPad(formatNumber(overview.total_reasoning), 14)}                                \u2502`);
    }
    if (overview.total_cache_read > 0) {
      console.log("\u2502" + `  Cache Read         ${leftPad(formatNumber(overview.total_cache_read), 14)}                                \u2502`);
    }
    console.log("\u2502" + "                                                                      \u2502");

    // Today section
    console.log("\u2502" + "  \u001b[1mHARI INI\u001b[0m                                                              \u2502");
    console.log("\u2502" + `  Sesi Hari Ini      ${leftPad(formatNumber(today.sessions), 8)}                                        \u2502`);
    console.log("\u2502" + `  Cost Hari Ini      ${leftPad(formatCost(today.cost), 12)}                                    \u2502`);
    console.log("\u2502" + `  Input Tokens       ${leftPad(formatNumber(today.input_tokens), 14)}                                \u2502`);
    console.log("\u2502" + `  Output Tokens      ${leftPad(formatNumber(today.output_tokens), 14)}                                \u2502`);
    if (today.reasoning_tokens > 0) {
      console.log("\u2502" + `  Reasoning Tokens   ${leftPad(formatNumber(today.reasoning_tokens), 14)}                                \u2502`);
    }
    console.log("\u251C" + SEP + "\u2524");

    // ─── 1.5. UKURAN ───────────────────────────────────────────
    const dbSize = statSync(DB_PATH).size;
    const configSize = dirSize(CONFIG_DIR);
    const dataTotal = dirSize(DATA_DIR);
    const totalSize = configSize + dataTotal;

    console.log("\u2502" + "  \u001b[1mUKURAN CODEYMN\u001b[0m                                                        \u2502");
    console.log("\u2502" + "                                                                      \u2502");
    console.log("\u2502" + `  Database (codeymn.db)     ${leftPad(formatBytes(dbSize), 12)}                              \u2502`);
    console.log("\u2502" + `  Config (skills/cmd/agent)  ${leftPad(formatBytes(configSize), 12)}                              \u2502`);
    console.log("\u2502" + `  Total Data                 ${leftPad(formatBytes(dataTotal), 12)}                              \u2502`);
    console.log("\u2502" + `  Total (config + data)      ${leftPad(formatBytes(totalSize), 12)}                              \u2502`);
    console.log("\u2502" + `  Rata-rata per sesi         ${leftPad(formatBytes(Math.round(totalSize / (overview.total_sessions || 1))), 12)}                              \u2502`);
    console.log("\u251C" + SEP + "\u2524");

    // ─── 2. 7-DAY CHART ────────────────────────────────────────
    const dailyData = query(db, `
      SELECT
        DATE(time_created / 1000, 'unixepoch', 'localtime') as day,
        SUM(cost) as cost,
        SUM(tokens_input) as input_tokens,
        SUM(tokens_output) as output_tokens,
        COUNT(*) as sessions
      FROM session
      WHERE time_archived IS NULL AND time_created >= ?
      GROUP BY day
      ORDER BY day
    `, weekStart);

    const maxDailyTokens = dailyData.reduce((max, d) =>
      Math.max(max, (d.input_tokens || 0) + (d.output_tokens || 0)), 0);

    console.log("\u2502" + "  \u001b[1m7 HARI TERAKHIR (Token Input + Output)\u001b[0m                              \u2502");
    console.log("\u2502" + "                                                                      \u2502");

    // Fill in missing days
    const dayMap = {};
    dailyData.forEach(d => { dayMap[d.day] = d; });

    for (let i = 6; i >= 0; i--) {
      const dayMs = todayStart - i * 24 * 60 * 60 * 1000;
      const dayStr = formatDate(dayMs);
      const d = dayMap[dayStr] || {};
      const totalTokens = (d.input_tokens || 0) + (d.output_tokens || 0);
      const bar = barChart(totalTokens, maxDailyTokens);
      const label = dayStr.slice(5); // MM-DD
      const dayCost = d.cost != null ? formatCost(d.cost) : "$0.00";
      console.log(
        "\u2502" + "  " +
        label + " " + bar + " " +
        leftPad(formatNumber(totalTokens), 8) + " " +
        leftPad(dayCost, 10) +
        " \u2502"
      );
    }
    console.log("\u251C" + SEP + "\u2524");

    // ─── 3. PER PROVIDER ───────────────────────────────────────
    const providerStats = query(db, `
      SELECT
        json_extract(model, '$.providerID') as provider,
        COUNT(*) as sessions,
        SUM(cost) as total_cost,
        SUM(tokens_input) as total_input,
        SUM(tokens_output) as total_output
      FROM session
      WHERE time_archived IS NULL AND model IS NOT NULL
      GROUP BY provider
      ORDER BY total_cost DESC
    `);

    console.log("\u2502" + "  \u001b[1mPER PROVIDER\u001b[0m                                                          \u2502");
    console.log("\u2502" + "                                                                      \u2502");
    console.log("\u2502" + "  " + rightPad("Provider", 18) + rightPad("Sesi", 8) + rightPad("Input", 12) + rightPad("Output", 12) + rightPad("Cost", 10) + "\u2502");
    console.log("\u2502" + "  " + "\u2500".repeat(18) + " " + "\u2500".repeat(7) + " " + "\u2500".repeat(11) + " " + "\u2500".repeat(11) + " " + "\u2500".repeat(9) + "\u2502");

    providerStats.forEach(p => {
      console.log(
        "\u2502" + "  " +
        rightPad(p.provider || "unknown", 18) + " " +
        leftPad(formatNumber(p.sessions), 7) + " " +
        leftPad(formatNumber(p.total_input), 11) + " " +
        leftPad(formatNumber(p.total_output), 11) + " " +
        leftPad(formatCost(p.total_cost), 9) +
        " \u2502"
      );
    });
    console.log("\u251C" + SEP + "\u2524");

    // ─── 4. TOP 10 MODEL ───────────────────────────────────────
    const modelStats = query(db, `
      SELECT
        json_extract(model, '$.id') as model_id,
        json_extract(model, '$.providerID') as provider,
        COUNT(*) as sessions,
        SUM(cost) as total_cost,
        SUM(tokens_input) as total_input,
        SUM(tokens_output) as total_output,
        SUM(tokens_cache_read) as total_cache_read
      FROM session
      WHERE time_archived IS NULL AND model IS NOT NULL
      GROUP BY model_id
      ORDER BY total_cost DESC
      LIMIT 10
    `);

    console.log("\u2502" + "  \u001b[1mTOP 10 MODEL\u001b[0m                                                           \u2502");
    console.log("\u2502" + "                                                                      \u2502");
    console.log("\u2502" + "  " + rightPad("Model", 24) + rightPad("Sesi", 7) + rightPad("Input", 11) + rightPad("Output", 11) + rightPad("Cost", 9) + "\u2502");
    console.log("\u2502" + "  " + "\u2500".repeat(24) + " " + "\u2500".repeat(6) + " " + "\u2500".repeat(10) + " " + "\u2500".repeat(10) + " " + "\u2500".repeat(8) + "\u2502");

    modelStats.forEach(m => {
      const shortName = m.model_id ? m.model_id.substring(0, 24) : "unknown";
      console.log(
        "\u2502" + "  " +
        rightPad(shortName, 24) + " " +
        leftPad(formatNumber(m.sessions), 6) + " " +
        leftPad(formatNumber(m.total_input), 10) + " " +
        leftPad(formatNumber(m.total_output), 10) + " " +
        leftPad(formatCost(m.total_cost), 8) +
        " \u2502"
      );
    });
    console.log("\u251C" + SEP + "\u2524");

    // ─── 5. CACHE EFFICIENCY ───────────────────────────────────
    const cacheStats = query(db, `
      SELECT
        SUM(tokens_cache_read) as cache_read,
        SUM(tokens_input) as total_input
      FROM session
      WHERE time_archived IS NULL
    `)[0];

    if (cacheStats && cacheStats.cache_read > 0) {
      const cacheRate = cacheStats.total_input > 0
        ? ((cacheStats.cache_read / (cacheStats.cache_read + cacheStats.total_input)) * 100).toFixed(1)
        : 0;
      console.log("\u2502" + "  \u001b[1mCACHE EFFICIENCY\u001b[0m                                                       \u2502");
      console.log("\u2502" + "                                                                      \u2502");
      console.log("\u2502" + `  Cache Read         ${leftPad(formatNumber(cacheStats.cache_read), 14)}                                \u2502`);
      console.log("\u2502" + `  Cache Hit Rate     ${leftPad(cacheRate + "%", 14)}                                \u2502`);
      console.log("\u251C" + SEP + "\u2524");
    }

    // ─── 6. RECENT 5 ───────────────────────────────────────────
    const recent = query(db, `
      SELECT
        title,
        agent,
        cost,
        tokens_input + tokens_output as total_tokens,
        json_extract(model, '$.providerID') as provider,
        json_extract(model, '$.id') as model_id,
        time_created
      FROM session
      WHERE time_archived IS NULL
      ORDER BY time_created DESC
      LIMIT 5
    `);

    console.log("\u2502" + "  \u001b[1mRECENT 5 SESI\u001b[0m                                                          \u2502");
    console.log("\u2502" + "                                                                      \u2502");

    recent.forEach(r => {
      const title = r.title || "(untitled)";
      const shortTitle = title.length > 36 ? title.substring(0, 33) + "..." : title;
      const shortModel = r.model_id ? r.model_id.split("/").pop().substring(0, 18) : "?";
      const dateStr = formatDate(r.time_created).slice(5);
      console.log(
        "\u2502" + "  " +
        rightPad(shortTitle, 36) + " " +
        leftPad(formatCost(r.cost), 10) + " " +
        leftPad(shortModel, 10) +
        " \u2502"
      );
    });

    console.log("\u2514" + SEP + "\u2518");
    console.log("");

  } finally {
    db.close();
  }
}

main();
