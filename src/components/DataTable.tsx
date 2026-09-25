import { useState } from "react";
import { useFilterStore } from "../stores/filterStore";

type SortKey = "name" | "population" | "region" | "parcSocial" | "partLogementsSociaux" | "prixMedian";

export function DataTable() {
  const communes = useFilterStore((s) => s.filteredCommunes);
  const setRegion = useFilterStore((s) => s.setRegion);
  const [sortKey, setSortKey] = useState<SortKey>("population");
  const [sortAsc, setSortAsc] = useState(false);

  const sorted = [...communes].sort((a, b) => {
    const va = a[sortKey]; const vb = b[sortKey];
    if (va === null) return 1;
    if (vb === null) return -1;
    if (typeof va === "string" && typeof vb === "string") return sortAsc ? va.localeCompare(vb) : vb.localeCompare(va);
    return sortAsc ? Number(va) - Number(vb) : Number(vb) - Number(va);
  });

  function toggleSort(key: SortKey) {
    if (sortKey === key) setSortAsc(!sortAsc);
    else { setSortKey(key); setSortAsc(true); }
  }

  return (
    <div className="card">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px", flexWrap: "wrap", gap: "8px" }}>
        <h3 style={{ margin: 0 }}>Données officielles ({sorted.length} communes)</h3>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {["all", "Nord", "Sud", "Ouest", "Est"].map((r) => (
            <button key={r} onClick={() => setRegion(r)}
              style={{ padding: "6px 12px", border: "1px solid var(--blue-france)", background: "white", color: "var(--blue-france)", borderRadius: "4px", cursor: "pointer", fontSize: "12px" }}>
              {r === "all" ? "Toutes" : r}
            </button>
          ))}
        </div>
      </div>
      <div style={{ overflowX: "auto" }}>
        <table className="fr-table">
          <thead>
            <tr>
              <th onClick={() => toggleSort("name")} style={{ cursor: "pointer" }}>Commune</th>
              <th onClick={() => toggleSort("region")} style={{ cursor: "pointer" }}>Région</th>
              <th onClick={() => toggleSort("population")} style={{ cursor: "pointer" }}>Population</th>
              <th onClick={() => toggleSort("parcSocial")} style={{ cursor: "pointer" }}>Parc social</th>
              <th onClick={() => toggleSort("partLogementsSociaux")} style={{ cursor: "pointer" }}>Part LS (%)</th>
              <th onClick={() => toggleSort("prixMedian")} style={{ cursor: "pointer" }}>Prix médian €/m²</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((c) => (
              <tr key={c.code}>
                <td>{c.name}</td>
                <td>{c.region}</td>
                <td>{c.population.toLocaleString("fr-FR")}</td>
                <td>{c.parcSocial.toLocaleString("fr-FR")}</td>
                <td>{c.partLogementsSociaux}%</td>
                <td>{c.prixMedian !== null ? c.prixMedian.toLocaleString("fr-FR") : "N/D"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ fontSize: "11px", color: "var(--grey-600)", marginTop: "12px" }}>
        Sources : INSEE RP 2023 (population) · ARMOS OI / RPLS 01/01/2026 (parc social) · Notaires avril 2026 (prix). N/D = non disponible.
      </p>
    </div>
  );
}
