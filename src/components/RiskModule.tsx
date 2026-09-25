import { Bar, Pie, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend } from "chart.js";
import { RISK_DATA } from "../data/modules-data";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

export function RiskModule() {
  const data = RISK_DATA;

  const contraintesData = { labels: ["Parc National", "Pente sup. 30%", "Loi Littoral", "Zones UNESCO", "Zones agricoles"],
    datasets: [{ data: [data.contraintes.parcNational, data.contraintes.penteSuperieure30, data.contraintes.loiLittoral, data.contraintes.zonesUNESCO, data.contraintes.zonesAgricoles],
      backgroundColor: ["#E1000F", "#B34000", "#000091", "#18753C", "#666666"], borderWidth: 2, borderColor: "#fff" }] };
  const cyclonesData = { labels: data.risques.cyclones.derniersCyclones.map((c) => c.nom),
    datasets: [{ label: "Rafales max (km/h)", data: data.risques.cyclones.derniersCyclones.map((c) => c.rafales),
      backgroundColor: ["#E1000F", "#B34000", "#000091", "#18753C"] }] };
  const mouvementsTerrain = { labels: ["Glissements", "Éboulements", "Effondrements", "Coulées de boue"],
    datasets: [{ data: [data.risques.mouvementsTerrain.glissements, data.risques.mouvementsTerrain.eboulements, data.risques.mouvementsTerrain.effondrements, data.risques.mouvementsTerrain.couleesBoue],
      backgroundColor: ["#E1000F", "#B34000", "#000091", "#18753C"], borderWidth: 2, borderColor: "#fff" }] };
  const environnementData = { labels: ["Solaire", "Hydraulique", "Éolien", "Autres"],
    datasets: [{ data: [data.environnement.productionSolaire, data.environnement.productionHydraulique, data.environnement.productionEolienne, 100 - data.environnement.productionSolaire - data.environnement.productionHydraulique - data.environnement.productionEolienne],
      backgroundColor: ["#FEDD00", "#000091", "#18753C", "#666666"], borderWidth: 2, borderColor: "#fff" }] };
  const zonesProtegees = { labels: ["Parc National", "Natura 2000", "Réserves", "Ramsar"],
    datasets: [{ data: [data.contraintes.parcNational, data.contraintes.zonesNatura2000, data.contraintes.reservesBiologiques, data.contraintes.zonesRamsar],
      backgroundColor: ["#18753C", "#000091", "#E1000F", "#B34000"], borderWidth: 2, borderColor: "#fff" }] };

  return (
    <>
      <h2 style={{ color: "var(--blue-france)" }}>Risques &amp; Environnement</h2>
      <div className="stats-grid">
        <div className="stat-card"><div className="stat-label">Mouvements terrain</div><div className="stat-value">{data.risques.mouvementsTerrain.nombreEvenements.toLocaleString("fr-FR")}</div></div>
        <div className="stat-card"><div className="stat-label">Communes submersion</div><div className="stat-value">{data.risques.submersionMarine.communesConcernees}</div></div>
        <div className="stat-card"><div className="stat-label">Arrêtés CatNat</div><div className="stat-value">{data.risques.inondations.arretesCatNat}</div></div>
        <div className="stat-card"><div className="stat-label">PPRI en vigueur</div><div className="stat-value">{data.risques.inondations.nombrePPRI}</div></div>
        <div className="stat-card"><div className="stat-label">Température moyenne</div><div className="stat-value">{data.environnement.temperatureMoyenne}°C</div></div>
        <div className="stat-card"><div className="stat-label">Pluviométrie annuelle</div><div className="stat-value">{data.environnement.pluviometrieAnnuelle.toLocaleString("fr-FR")} mm</div></div>
        <div className="stat-card"><div className="stat-label">Énergies renouvelables</div><div className="stat-value">{data.environnement.partEnergieRenouvelable}%</div></div>
        <div className="stat-card"><div className="stat-label">Qualité de l'air</div><div className="stat-value">{data.environnement.qualiteAir}/100</div></div>
      </div>
      <div className="grid-2">
        <div className="card"><h3>Contraintes réglementaires</h3><div style={{ height: "320px" }}><Pie data={contraintesData} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { position: "bottom" } } }} /></div></div>
        <div className="card"><h3>Cyclones récents (rafales max)</h3><div style={{ height: "320px" }}><Bar data={cyclonesData} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }} /></div></div>
        <div className="card"><h3>Mouvements de terrain</h3><div style={{ height: "320px" }}><Doughnut data={mouvementsTerrain} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { position: "bottom" } } }} /></div></div>
        <div className="card"><h3>Production énergétique renouvelable</h3><div style={{ height: "320px" }}><Doughnut data={environnementData} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { position: "bottom" } } }} /></div></div>
        <div className="card"><h3>Zones protégées</h3><div style={{ height: "320px" }}><Pie data={zonesProtegees} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { position: "bottom" } } }} /></div></div>
      </div>
      <div className="card">
        <h3>Indicateurs complémentaires</h3>
        <ul className="kpi-list">
          <li><span>Diagnostics post-Garance</span><strong>{data.risques.mouvementsTerrain.diagnosticsPostGarance}</strong></li>
          <li><span>Fréquence cyclones cat. 3+</span><strong>{data.risques.cyclones.frequenceCategorie3Plus} / décennie</strong></li>
          <li><span>Coût moyen par cyclone</span><strong>{data.risques.cyclones.coutMoyenParCyclone} M€</strong></li>
          <li><span>Communes inondables</span><strong>{data.risques.inondations.communesConcernees}</strong></li>
          <li><span>Surface brûlée 2024</span><strong>{data.risques.incendies.surfaceBrulee2024} ha</strong></li>
          <li><span>Jours de pluie / an</span><strong>{data.environnement.joursPluie}</strong></li>
          <li><span>Consommation électrique</span><strong>{data.environnement.consommationElectrique.toLocaleString("fr-FR")} GWh</strong></li>
          <li><span>Part véhicules électriques</span><strong>{data.environnement.partVehiculesElectriques}%</strong></li>
          <li><span>Surface totale île</span><strong>{data.contraintes.surfaceTotale.toLocaleString("fr-FR")} km²</strong></li>
        </ul>
      </div>
    </>
  );
}
