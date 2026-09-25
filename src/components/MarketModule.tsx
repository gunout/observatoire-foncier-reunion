import { Bar, Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Tooltip, Legend, ArcElement } from "chart.js";
import { MARKET_DATA } from "../data/modules-data";

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Tooltip, Legend, ArcElement);

export function MarketModule() {
  const data = MARKET_DATA;

  const loyersInterco = { labels: ["CINOR", "TCO", "CIVIS", "CASUD", "CIREST"],
    datasets: [{ label: "Loyer médian (€/m²)", data: [data.loyers.medianCINOR, data.loyers.medianTCO, data.loyers.medianCIVIS, data.loyers.medianCASUD, data.loyers.medianCIREST],
      backgroundColor: ["#000091", "#E1000F", "#B34000", "#18753C", "#666666"] }] };
  const loyersParType = { labels: Object.keys(data.loyers.parType),
    datasets: [{ label: "Loyer médian (€/m²)", data: Object.values(data.loyers.parType) as number[],
      borderColor: "#000091", backgroundColor: "rgba(0,0,145,0.1)", fill: true, tension: 0.3 }] };
  const permisParAnnee = { labels: ["2020", "2021", "2022", "2023", "2024"],
    datasets: [
      { label: "Autorisés", data: [data.construction.permis2020, data.construction.permis2021, data.construction.permis2022, data.construction.permis2023, data.construction.permis2024], backgroundColor: "#000091" },
      { label: "Mis en chantier", data: [data.construction.misesEnChantier2020, data.construction.misesEnChantier2021, data.construction.misesEnChantier2022, data.construction.misesEnChantier2023, data.construction.misesEnChantier2024], backgroundColor: "#E1000F" } ] };
  const typesLogements = { labels: ["Collectifs", "Individuels purs", "Individuels groupés"],
    datasets: [{ data: [data.construction.collectifsAutorises, data.construction.individuelsPurs, data.construction.individuelsGroupes],
      backgroundColor: ["#000091", "#E1000F", "#18753C"], borderWidth: 2, borderColor: "#fff" }] };
  const frichesParType = { labels: ["Industrielles", "Commerciales", "Administratives", "Autres"],
    datasets: [{ data: [data.friches.frichesIndustrielles, data.friches.frichesCommerciales, data.friches.frichesAdministratives, data.friches.frichesAutres],
      backgroundColor: ["#000091", "#E1000F", "#B34000", "#18753C"], borderWidth: 2, borderColor: "#fff" }] };
  const volumeTransactions = { labels: ["2020", "2021", "2022", "2023", "2024"],
    datasets: [{ label: "Transactions", data: [data.transactions.volume2020, data.transactions.volume2021, data.transactions.volume2022, data.transactions.volume2023, data.transactions.volume2024],
      borderColor: "#000091", backgroundColor: "rgba(0,0,145,0.1)", fill: true, tension: 0.3 }] };

  return (
    <>
      <h2 style={{ color: "var(--blue-france)" }}>Marché & Foncier</h2>
      <div className="stats-grid">
        <div className="stat-card"><div className="stat-label">Logements autorisés</div><div className="stat-value">{data.construction.autorises.toLocaleString("fr-FR")}</div><div style={{ color: "var(--green)", fontSize: "12px" }}>+{data.construction.evolutionAutorises}%</div></div>
        <div className="stat-card"><div className="stat-label">Mises en chantier</div><div className="stat-value">{data.construction.misesEnChantier.toLocaleString("fr-FR")}</div><div style={{ color: "var(--red-marianne)", fontSize: "12px" }}>{data.construction.evolutionMisesEnChantier}%</div></div>
        <div className="stat-card"><div className="stat-label">Prix médian appart.</div><div className="stat-value">{data.transactions.prixMedianAppartement.toLocaleString("fr-FR")} €/m²</div></div>
        <div className="stat-card"><div className="stat-label">Loyer médian global</div><div className="stat-value">{data.loyers.medianGlobal} €/m²</div><div style={{ color: "var(--green)", fontSize: "12px" }}>+{data.loyers.evolution1an}%</div></div>
        <div className="stat-card"><div className="stat-label">Taux de vacance</div><div className="stat-value">{data.vacance.tauxVacance}%</div></div>
        <div className="stat-card"><div className="stat-label">Friches identifiées</div><div className="stat-value">{data.friches.nombre}</div></div>
        <div className="stat-card"><div className="stat-label">Surface reconvertible</div><div className="stat-value">{data.friches.surfaceReconvertible} ha</div></div>
        <div className="stat-card"><div className="stat-label">Délai de vente moyen</div><div className="stat-value">{data.transactions.delaiVenteMoyen} j</div></div>
      </div>
      <div className="grid-2">
        <div className="card"><h3>Loyers médians par intercommunalité</h3><div style={{ height: "300px" }}><Bar data={loyersInterco} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }} /></div></div>
        <div className="card"><h3>Loyers par typologie</h3><div style={{ height: "300px" }}><Line data={loyersParType} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }} /></div></div>
        <div className="card"><h3>Construction neuve (2020-2024)</h3><div style={{ height: "300px" }}><Bar data={permisParAnnee} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { position: "bottom" } } }} /></div></div>
        <div className="card"><h3>Types de logements autorisés</h3><div style={{ height: "300px" }}><Pie data={typesLogements} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { position: "bottom" } } }} /></div></div>
        <div className="card"><h3>Friches par catégorie</h3><div style={{ height: "300px" }}><Pie data={frichesParType} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { position: "bottom" } } }} /></div></div>
        <div className="card"><h3>Volume de transactions (2020-2024)</h3><div style={{ height: "300px" }}><Line data={volumeTransactions} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }} /></div></div>
      </div>
      <div className="card">
        <h3>Indicateurs complémentaires</h3>
        <ul className="kpi-list">
          <li><span>Prix médian maison</span><strong>{data.transactions.prixMedianMaison.toLocaleString("fr-FR")} €</strong></li>
          <li><span>Prix médian terrain</span><strong>{data.transactions.prixMedianTerrain.toLocaleString("fr-FR")} €</strong></li>
          <li><span>Part investisseurs</span><strong>{data.transactions.partInvestisseurs}%</strong></li>
          <li><span>Part primo-accédants</span><strong>{data.transactions.partPrimoAccedants}%</strong></li>
          <li><span>Vacance courte durée</span><strong>{data.vacance.vacanceCourteDuree.toLocaleString("fr-FR")}</strong></li>
          <li><span>Vacance longue durée</span><strong>{data.vacance.vacanceLongueDuree.toLocaleString("fr-FR")}</strong></li>
          <li><span>Taux meublé touristique</span><strong>{data.vacance.tauxMeubleTouristique}%</strong></li>
          <li><span>Surface moyenne logement</span><strong>{data.construction.surfaceMoyenneLogement} m²</strong></li>
          <li><span>Coût moyen construction</span><strong>{data.construction.coutMoyenConstruction} €/m²</strong></li>
          <li><span>Loyer moyen appartement</span><strong>{data.loyers.loyerMoyenAppartement} €</strong></li>
        </ul>
      </div>
    </>
  );
}
