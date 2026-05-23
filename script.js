// =============================================================
//  UDJ Hockey — Tryout Roster Builder  |  script.js
//
//  To add a player permanently, add an entry to DEFAULT_PLAYERS
//  following the same format as the existing entries below.
// =============================================================

// ─── PLAYER DATA ─────────────────────────────────────────────
const DEFAULT_PLAYERS = [
  // ─── SENIORS (Grad 2027) ───────────────────────────────────
  { id: 1,  first: "Will",      last: "Balasia",    pos: "F", grad: 2027, team: "UDJ Varsity" },
  { id: 2,  first: "Emmet",     last: "Gardella",   pos: "F", grad: 2027, team: "UDJ Varsity" },
  { id: 3,  first: "Jacob",     last: "Love",       pos: "F", grad: 2027, team: "UDJ Varsity" },
  { id: 4,  first: "Matthew",   last: "Mosera",     pos: "F", grad: 2027, team: "UDJ Varsity" },
  { id: 5,  first: "Will",      last: "Stokes",     pos: "F", grad: 2027, team: "UDJ Varsity" },
  { id: 6,  first: "Joe",       last: "Lenhard",    pos: "F", grad: 2027, team: "Belle Tire AAA" },
  { id: 14, first: "Leo",       last: "Karmanos",   pos: "D", grad: 2027, team: "UDJ Varsity" },
  { id: 15, first: "Brayden",   last: "Murawa",     pos: "D", grad: 2027, team: "UDJ Varsity" },
  { id: 24, first: "Luke",      last: "Shubeck",    pos: "G", grad: 2027, team: "UDJ Varsity" },

  // ─── JUNIORS (Grad 2028) ───────────────────────────────────
  { id: 7,  first: "Asher",     last: "Bennetts",   pos: "F", grad: 2028, team: "UDJ JV" },
  { id: 8,  first: "Shane",     last: "Denworth",   pos: "F", grad: 2028, team: "UDJ Varsity" },
  { id: 9,  first: "Grayson",   last: "Meyer",      pos: "F", grad: 2028, team: "UDJ Varsity" },
  { id: 10, first: "Taras",     last: "Pandrak",    pos: "F", grad: 2028, team: "OJG AAA" },
  { id: 11, first: "Jack",      last: "Venier",     pos: "F", grad: 2028, team: "UDJ JV" },
  { id: 30, first: "Emery",     last: "Wise",       pos: "F", grad: 2028, team: "Compuware AAA" },
  { id: 16, first: "Matthew",   last: "Angell",     pos: "D", grad: 2028, team: "UDJ Varsity" },
  { id: 17, first: "Remy",      last: "Finney",     pos: "D", grad: 2028, team: "UDJ Varsity" },
  { id: 18, first: "Marco",     last: "Fleming",    pos: "D", grad: 2028, team: "UDJ Varsity" },
  { id: 19, first: "Ben",       last: "Quasarano",  pos: "D", grad: 2028, team: "UDJ JV" },
  { id: 20, first: "Van",       last: "Swanson",    pos: "D", grad: 2028, team: "UDJ Varsity" },
  { id: 21, first: "Nicholas",  last: "Valdez",     pos: "D", grad: 2028, team: "UDJ JV" },
  { id: 22, first: "JP",        last: "Vanker",     pos: "D", grad: 2028, team: "UDJ JV" },
  { id: 25, first: "Carter",    last: "Murawa",     pos: "G", grad: 2028, team: "UDJ Varsity" },

  // ─── SOPHOMORES (Grad 2029) ────────────────────────────────
  { id: 12, first: "Kaiden",    last: "Contat",     pos: "F", grad: 2029, team: "UDJ JV" },
  { id: 13, first: "Jaxon",     last: "Fawaz",      pos: "F", grad: 2029, team: "UDJ JV" },
  { id: 31, first: "Jasper",    last: "Rodgerson",  pos: "F", grad: 2029, team: "UDJ JV" },
  { id: 32, first: "Manny",     last: "Jajjo",      pos: "F", grad: 2029, team: "12U Novi" },
  { id: 23, first: "Abraham",   last: "Medley",     pos: "D", grad: 2029, team: "UDJ JV" },
  { id: 33, first: "Christian", last: "Mkrtumian",  pos: "D", grad: 2029, team: "UDJ JV" },
  { id: 34, first: "Lincoln",   last: "Nader",      pos: "D", grad: 2029, team: "UDJ JV" },

  // ─── FRESHMEN (Grad 2030) ──────────────────────────────────
  { id: 35, first: "Daniel",    last: "Vanker",     pos: "F", grad: 2030, team: "UDJ Academy" },
  { id: 36, first: "Harrison",  last: "Sikorsky",   pos: "F", grad: 2030, team: "USA Eagles" },
  { id: 37, first: "Paddy",     last: "Hesano",     pos: "F", grad: 2030, team: "RO Eagles" },
  { id: 38, first: "Johnny",    last: "Solomon",    pos: "F", grad: 2030, team: "RO Eagles" },
  { id: 39, first: "Kai",       last: "Karmanos",   pos: "F", grad: 2030, team: "" },
  { id: 40, first: "Carter",    last: "Tourangeau", pos: "F", grad: 2030, team: "UDJ Academy" },
  { id: 41, first: "Nick",      last: "Schochet",   pos: "G", grad: 2030, team: "Macomb Mavericks" },
  { id: 42, first: "Mitchell",  last: "Pawlowski",  pos: "G", grad: 2030, team: "OJG AAA" },
  { id: 43, first: "Ethan",     last: "Griffin",    pos: "G", grad: 2030, team: "Livonia Knights" },
  { id: 44, first: "Jonah",     last: "Santos",     pos: "G", grad: 2030, team: "Rochester Vipers" },
  { id: 45, first: "Leonardo",  last: "Selimi",     pos: "G", grad: 2030, team: "Metro Jets" },
];

// ─── CONSTANTS ───────────────────────────────────────────────
const LIMITS = {
  "varsity-F": 12, "varsity-D": 6, "varsity-G": 3,
  "jv-F":      12, "jv-D":     6, "jv-G":     3,
};
const GRADE_MAP = { 2027: "Sr", 2028: "Jr", 2029: "So", 2030: "Fr" };
const ALL_ZONES = [
  "available",
  "varsity-F", "varsity-D", "varsity-G",
  "jv-F",      "jv-D",      "jv-G",
  "cuts",
];

// ─── STATE ───────────────────────────────────────────────────
let players        = [];
let state          = {};
let nextId         = 2000;
let activeFilter   = "ALL";
let activeTab      = "available";   // mobile tab
let selectedId     = null;          // mobile: currently tapped player id
let selectedZone   = null;          // mobile: zone the tapped player is in
let isDragging     = false;         // prevents click handler firing after drag

// ─── RESPONSIVE HELPER ───────────────────────────────────────
function isMobile() {
  return window.matchMedia("(max-width: 767px)").matches;
}

// ─── INIT ────────────────────────────────────────────────────
function initState() {
  const saved = localStorage.getItem("udj_tryout_2627");
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      players = parsed.players || [...DEFAULT_PLAYERS];
      state   = parsed.state   || buildDefaultState();
      nextId  = parsed.nextId  || 2000;
      return;
    } catch (e) {
      console.warn("Could not restore saved state.", e);
    }
  }
  players = [...DEFAULT_PLAYERS];
  state   = buildDefaultState();
}

function buildDefaultState() {
  const s = {};
  ALL_ZONES.forEach(z => (s[z] = []));
  const sorted = [...players].sort((a, b) => {
    const posOrder = { F: 0, D: 1, G: 2 };
    if (posOrder[a.pos] !== posOrder[b.pos]) return posOrder[a.pos] - posOrder[b.pos];
    if (a.grad !== b.grad) return a.grad - b.grad;
    return a.last.localeCompare(b.last);
  });
  s["available"] = sorted.map(p => p.id);
  return s;
}

function saveState() {
  localStorage.setItem("udj_tryout_2627", JSON.stringify({ players, state, nextId }));
}

// ─── HELPERS ─────────────────────────────────────────────────
function getPlayer(id) { return players.find(p => p.id === id); }

function getTeamTagClass(team) {
  if (!team) return "";
  if (team.toLowerCase().includes("varsity")) return "team-varsity";
  if (team.toLowerCase().includes("jv"))      return "team-jv";
  return "";
}

function zoneLabel(zone) {
  const map = {
    "available": "Pool", "cuts": "Cuts",
    "varsity-F": "Varsity Fwd", "varsity-D": "Varsity Def", "varsity-G": "Varsity Goal",
    "jv-F": "JV Fwd", "jv-D": "JV Def", "jv-G": "JV Goal",
  };
  return map[zone] || zone;
}

// ─── RENDER ──────────────────────────────────────────────────
function makeCard(playerId, zone) {
  const p = getPlayer(playerId);
  if (!p) return null;

  const grade     = GRADE_MAP[p.grad] || p.grad;
  const teamClass = getTeamTagClass(p.team);
  const teamLabel = p.team
    ? (p.team.includes("UDJ Varsity") ? "Varsity"
     : p.team.includes("UDJ JV")      ? "JV"
     : p.team)
    : "";

  const isCompact = zone !== "available" && zone !== "cuts";

  const div = document.createElement("div");
  div.className        = "player-card" + (isCompact ? " compact" : "");
  div.draggable        = true;
  div.dataset.playerId = playerId;
  div.dataset.zone     = zone;

  if (isCompact) {
    div.title = `${p.first} ${p.last} — ${grade} '${String(p.grad).slice(2)}${teamLabel ? " · " + teamLabel : ""}`;
  }

  div.innerHTML = `
    <div class="pos-badge pos-${p.pos}">${p.pos}</div>
    <div class="player-info">
      <div class="player-name">${isCompact ? p.last : p.first + " " + p.last}</div>
      ${!isCompact ? `
      <div class="player-sub">
        <span class="grade-tag grade-${grade}">${grade} '${String(p.grad).slice(2)}</span>
        ${teamLabel ? `<span class="team-tag ${teamClass}">${teamLabel}</span>` : ""}
      </div>` : ""}
    </div>`;

  // ── Desktop: drag & drop ──
  div.addEventListener("dragstart", e => {
    isDragging = true;
    selectedId   = playerId;
    selectedZone = zone;
    div.classList.add("dragging");
    e.dataTransfer.effectAllowed = "move";
  });
  div.addEventListener("dragend", () => {
    div.classList.remove("dragging");
    setTimeout(() => { isDragging = false; }, 50);
  });

  // ── Mobile: tap to open assign sheet ──
  div.addEventListener("click", () => {
    if (isDragging) return;
    openAssignSheet(playerId, zone);
  });

  return div;
}

function renderZone(zoneId) {
  const el = document.getElementById("zone-" + zoneId);
  if (!el) return;

  el.innerHTML = "";
  const ids = state[zoneId] || [];

  if (ids.length === 0 && zoneId !== "available") {
    const emp = document.createElement("span");
    emp.className   = "drop-zone-empty";
    emp.textContent = "Drop players here";
    el.appendChild(emp);
  }

  let toRender = ids;
  if (zoneId === "available" && activeFilter !== "ALL") {
    toRender = ids.filter(id => { const p = getPlayer(id); return p && p.pos === activeFilter; });
  }

  toRender.forEach(id => {
    const card = makeCard(id, zoneId);
    if (card) el.appendChild(card);
  });
}

function renderCounts() {
  document.getElementById("avail-count").textContent =
    (state["available"] || []).length + " players";

  const cutsCount = (state["cuts"] || []).length;
  document.getElementById("cuts-count").textContent =
    cutsCount + " player" + (cutsCount !== 1 ? "s" : "");
  const cutsEmpty = document.getElementById("cuts-empty");
  if (cutsEmpty) cutsEmpty.style.display = cutsCount > 0 ? "none" : "";

  // Varsity
  const vF = (state["varsity-F"] || []).length;
  const vD = (state["varsity-D"] || []).length;
  const vG = (state["varsity-G"] || []).length;
  document.getElementById("varsity-total").textContent = (vF + vD + vG) + " / 21";
  setCountBadge("cnt-varsity-F", vF, 12);
  setCountBadge("cnt-varsity-D", vD, 6);
  setCountBadge("cnt-varsity-G", vG, 3);

  // JV
  const jF = (state["jv-F"] || []).length;
  const jD = (state["jv-D"] || []).length;
  const jG = (state["jv-G"] || []).length;
  document.getElementById("jv-total").textContent = (jF + jD + jG) + " / 21";
  setCountBadge("cnt-jv-F", jF, 12);
  setCountBadge("cnt-jv-D", jD, 6);
  setCountBadge("cnt-jv-G", jG, 3);

  // Tab badges (mobile)
  const tb = id => { const el = document.getElementById(id); if (el) el.textContent = ""; };
  tb("tab-badge-available"); tb("tab-badge-varsity"); tb("tab-badge-jv"); tb("tab-badge-cuts");

  const setBadge = (id, count) => {
    const el = document.getElementById(id);
    if (el) el.textContent = count > 0 ? count : "";
  };
  setBadge("tab-badge-available", (state["available"] || []).length);
  setBadge("tab-badge-varsity",   vF + vD + vG);
  setBadge("tab-badge-jv",        jF + jD + jG);
  setBadge("tab-badge-cuts",      cutsCount);
}

function setCountBadge(elId, count, limit) {
  const el = document.getElementById(elId);
  if (!el) return;
  el.textContent = count + " / " + limit;
  el.className = "pos-group-count" +
    (count > limit ? " over" : count === limit ? " full" : "");
}

function renderAll() {
  ALL_ZONES.forEach(renderZone);
  renderCounts();
}

// ─── MOBILE TAB SWITCHING ────────────────────────────────────
function switchTab(tab) {
  activeTab = tab;

  // Update tab button styles
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.tab === tab);
  });

  // Show/hide panels
  document.querySelectorAll(".tab-panel").forEach(el => {
    el.classList.remove("tab-active");
  });

  // Match panel to tab
  const panelMap = {
    "available": ".available-panel",
    "varsity":   ".varsity-panel",
    "jv":        ".jv-panel",
    "cuts":      ".cuts-section",
  };
  const target = document.querySelector(panelMap[tab]);
  if (target) target.classList.add("tab-active");
}

// ─── DRAG & DROP (desktop) ───────────────────────────────────
function onDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = "move";
  const zone = e.currentTarget.closest(".drop-zone");
  if (zone) zone.classList.add("drag-over");
}

function onDrop(e, targetZone) {
  e.preventDefault();
  document.querySelectorAll(".drag-over").forEach(el => el.classList.remove("drag-over"));

  if (selectedId === null || selectedZone === targetZone) return;

  movePlayer(selectedId, selectedZone, targetZone);
  selectedId   = null;
  selectedZone = null;
}

document.addEventListener("dragleave", e => {
  const zone = e.target.closest ? e.target.closest(".drop-zone") : null;
  if (zone && !zone.contains(e.relatedTarget)) zone.classList.remove("drag-over");
});
document.addEventListener("dragend", () => {
  document.querySelectorAll(".drag-over").forEach(el => el.classList.remove("drag-over"));
});

// ─── SHARED MOVE LOGIC ───────────────────────────────────────
function movePlayer(playerId, fromZone, toZone) {
  if (!fromZone || fromZone === toZone) return;
  state[fromZone] = (state[fromZone] || []).filter(id => id !== playerId);
  if (!state[toZone]) state[toZone] = [];
  state[toZone].push(playerId);
  saveState();
  renderAll();
}

// ─── ASSIGN BOTTOM SHEET (mobile) ────────────────────────────
function openAssignSheet(playerId, zone) {
  const p = getPlayer(playerId);
  if (!p) return;

  selectedId   = playerId;
  selectedZone = zone;

  const grade = GRADE_MAP[p.grad] || p.grad;
  document.getElementById("assign-player-name").textContent = `${p.first} ${p.last}`;
  document.getElementById("assign-player-meta").textContent =
    `${p.pos === "F" ? "Forward" : p.pos === "D" ? "Defense" : "Goalie"} · ${grade}  ·  Currently: ${zoneLabel(zone)}`;

  document.getElementById("assign-sheet").classList.add("open");
  document.getElementById("assign-backdrop").classList.add("open");
}

function closeAssignSheet() {
  document.getElementById("assign-sheet").classList.remove("open");
  document.getElementById("assign-backdrop").classList.remove("open");
  selectedId   = null;
  selectedZone = null;
}

function assignPlayer(targetZone) {
  if (selectedId === null) return;
  const pid      = selectedId;   // capture BEFORE closeAssignSheet clears them
  const fromZone = selectedZone;
  closeAssignSheet();
  movePlayer(pid, fromZone, targetZone);

  // On mobile, switch to the destination tab after assigning
  if (isMobile()) {
    const tabMap = {
      "available": "available", "cuts": "cuts",
      "varsity-F": "varsity",   "varsity-D": "varsity", "varsity-G": "varsity",
      "jv-F":      "jv",        "jv-D":      "jv",      "jv-G":      "jv",
    };
    if (tabMap[targetZone]) switchTab(tabMap[targetZone]);
  }
}

// ─── FILTER ──────────────────────────────────────────────────
function setFilter(f) {
  activeFilter = f;
  document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
  const map = { ALL: "f-all", F: "f-F", D: "f-D", G: "f-G" };
  document.querySelector("." + map[f]).classList.add("active");
  renderZone("available");
}

// ─── RESET ───────────────────────────────────────────────────
function resetAll() {
  if (!confirm("Move all players back to the Available pool and clear all rosters?")) return;
  state = buildDefaultState();
  saveState();
  renderAll();
  if (isMobile()) switchTab("available");
}

// ─── ADD PLAYER MODAL ────────────────────────────────────────
function openModal() {
  document.getElementById("modal-overlay").classList.add("open");
  setTimeout(() => document.getElementById("inp-first").focus(), 100);
}

function closeModal() {
  document.getElementById("modal-overlay").classList.remove("open");
  ["inp-first", "inp-last", "inp-team"].forEach(id => {
    document.getElementById(id).value = "";
  });
}

function addPlayer() {
  const first = document.getElementById("inp-first").value.trim();
  const last  = document.getElementById("inp-last").value.trim();
  const pos   = document.getElementById("inp-pos").value;
  const grad  = parseInt(document.getElementById("inp-grad").value);
  const team  = document.getElementById("inp-team").value.trim();

  if (!first || !last) { alert("Please enter a first and last name."); return; }

  const newPlayer = { id: nextId++, first, last, pos, grad, team };
  players.push(newPlayer);
  state["available"].push(newPlayer.id);

  closeModal();
  saveState();
  renderAll();
}

document.getElementById("modal-overlay").addEventListener("click", e => {
  if (e.target === document.getElementById("modal-overlay")) closeModal();
});

// ─── EXPORT ──────────────────────────────────────────────────
function exportRosters() {
  const lines = ["UDJ Hockey Tryout Rosters — 2026-2027\n"];

  const printTeam = (label, prefix) => {
    lines.push(`\n=== ${label} ===`);
    const fmt = id => { const p = getPlayer(id); return p ? `  ${p.first} ${p.last} (${GRADE_MAP[p.grad] || p.grad})` : ""; };
    const fwd = (state[prefix + "-F"] || []).map(fmt).filter(Boolean);
    const def = (state[prefix + "-D"] || []).map(fmt).filter(Boolean);
    const gol = (state[prefix + "-G"] || []).map(fmt).filter(Boolean);
    lines.push(`Forwards (${fwd.length}/12):`); fwd.forEach(l => lines.push(l));
    lines.push(`Defense (${def.length}/6):`);   def.forEach(l => lines.push(l));
    lines.push(`Goalies (${gol.length}/3):`);   gol.forEach(l => lines.push(l));
  };

  printTeam("VARSITY", "varsity");
  printTeam("JV", "jv");

  const cuts = (state["cuts"] || [])
    .map(id => { const p = getPlayer(id); return p ? `  ${p.first} ${p.last} (${GRADE_MAP[p.grad] || p.grad}, ${p.pos})` : ""; })
    .filter(Boolean);
  lines.push("\n=== CUTS ===");
  if (cuts.length) cuts.forEach(l => lines.push(l)); else lines.push("  (none)");

  const avail = (state["available"] || [])
    .map(id => { const p = getPlayer(id); return p ? `  ${p.first} ${p.last} (${GRADE_MAP[p.grad] || p.grad}, ${p.pos})` : ""; })
    .filter(Boolean);
  if (avail.length) { lines.push("\n=== UNASSIGNED ==="); avail.forEach(l => lines.push(l)); }

  const blob = new Blob([lines.join("\n")], { type: "text/plain" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "UDJ_Tryout_Rosters_2026-27.txt";
  a.click();
}

// ─── KEYBOARD SHORTCUTS ──────────────────────────────────────
document.addEventListener("keydown", e => {
  if (e.key === "Escape") { closeModal(); closeAssignSheet(); }
});

// ─── START ───────────────────────────────────────────────────
initState();
renderAll();
switchTab("available"); // set initial mobile tab state
