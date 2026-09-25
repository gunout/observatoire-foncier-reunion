import { useFilterStore } from "../stores/filterStore";
import { INDICATEURS_DEPARTEMENTAUX } from "../data/modules-data";

export function StatsGrid() {
  const communes = useFilterStore((s) => s.filteredCommunes);
  const totalPop = communes.reduce((sum, c) => sum + c.population, 0);
  const totalSocial = communes.reduce((sum, c) => sum + c.parcSocial, 0);

  const stats = [
    { label: "Communes affichées", value: communes.length, source: "Filtre courant" },
    { label: "Population cumulée", value: totalPop.toLocaleString("fr-FR"), source: "INSEE RP 2023" },
    { label: "Parc social cumulé", value: totalSocial.toLocaleString("fr-FR"), source: "ARMOS OI 2026" },
    { label: "Taux de chômage", value: INDICATEURS_DEPARTEMENTAUX.tauxChomage + " %", source: "INSEE T2 2025 (départemental)" }
  ];

  return (
    <div className="stats-grid">
      {stats.map((s) => (
        <div key={s.label} className="stat-card">
          <div className="stat-label">{s.label}</div>
          <div className="stat-value">{s.value}</div>
          <div style={{ fontSize: "11px", color: "var(--grey-600)" }}>{s.source}</div>
        </div>
      ))}
    </div>
  );
}
