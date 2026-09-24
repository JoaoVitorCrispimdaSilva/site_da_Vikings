// ==============================
// VIKINGS — DADOS DO CAMPEONATO
// Edite somente esta parte quando
// quiser atualizar os resultados.
// ==============================

const groups = {
  A: [
    { name: "João", played: 0, wins: 0, losses: 0, points: 0 },
    { name: "Pedro", played: 0, wins: 0, losses: 0, points: 0 },
    { name: "Lucas", played: 0, wins: 0, losses: 0, points: 0 }
  ],
  B: [
    { name: "Carlos", played: 0, wins: 0, losses: 0, points: 0 },
    { name: "Rafael", played: 0, wins: 0, losses: 0, points: 0 },
    { name: "André", played: 0, wins: 0, losses: 0, points: 0 }
  ]
};

// Adicione os confrontos conforme forem acontecendo.
// score = rounds vencidos.
const matches = [
  // { group: "A", player1: "João", player2: "Pedro", score1: 6, score2: 4, map: "Bermuda" },
  // { group: "A", player1: "Pedro", player2: "Lucas", score1: 6, score2: 3, map: "Purgatório" },
];

const semifinals = [
  { label: "SEMIFINAL 1", p1: "1º GRUPO A", p2: "2º GRUPO B" },
  { label: "SEMIFINAL 2", p1: "1º GRUPO B", p2: "2º GRUPO A" }
];

function renderGroups() {
  const container = document.getElementById("groups");
  container.innerHTML = Object.entries(groups).map(([letter, players]) => `
    <div class="group-card">
      <div class="group-title">GRUPO ${letter}</div>
      <table>
        <thead><tr><th>Jogador</th><th>J</th><th>V</th><th>D</th><th>PTS</th></tr></thead>
        <tbody>
          ${players.map(p => `
            <tr>
              <td>${p.name}</td><td>${p.played}</td><td>${p.wins}</td>
              <td>${p.losses}</td><td>${p.points}</td>
            </tr>`).join("")}
        </tbody>
      </table>
    </div>
  `).join("");
}

function renderMatches() {
  const container = document.getElementById("matches");
  if (!matches.length) {
    container.innerHTML = `
      <div class="match-card">
        <small>AINDA NÃO HÁ RESULTADOS</small>
        <div class="score">⚔️ A batalha ainda não começou.</div>
        <small>Os resultados aparecerão aqui.</small>
      </div>`;
    return;
  }

  container.innerHTML = matches.slice().reverse().map(m => `
    <div class="match-card">
      <small>${m.group ? `GRUPO ${m.group} • ` : ""}${m.map || "Mapa sorteado"}</small>
      <div class="score">${m.player1} <span>${m.score1} × ${m.score2}</span> ${m.player2}</div>
      <small>Vencedor: ${m.score1 > m.score2 ? m.player1 : m.player2}</small>
    </div>
  `).join("");
}

function renderBracket() {
  const container = document.getElementById("bracket");
  container.innerHTML = `
    <div class="bracket-column">
      <span class="bracket-label">SEMIFINAIS</span>
      ${semifinals.map(s => `
        <div class="bracket-match">
          <div>${s.p1}</div>
          <div>${s.p2}</div>
        </div>`).join("")}
    </div>
    <div class="bracket-column">
      <span class="bracket-label">FINAL</span>
      <div class="bracket-match">
        <div>A definir</div>
        <div>A definir</div>
      </div>
    </div>
    <div class="bracket-column">
      <span class="bracket-label">VALHALLA</span>
      <div class="bracket-match">
        <div>👑 <b>CAMPEÃO</b></div>
        <div>A definir</div>
      </div>
    </div>
  `;
}

renderGroups();
renderMatches();
renderBracket();
