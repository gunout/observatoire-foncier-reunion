import { Bar, Doughnut, Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, PointElement, LineElement, Tooltip, Legend } from "chart.js";
import { SOCIETY_DATA, DEMOGRAPHY_DETAILED } from "../data/modules-data";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, PointElement, LineElement, Tooltip, Legend);

export function SocietyModule() {
  const data = SOCIETY_DATA;
  const demo = DEMOGRAPHY_DETAILED;

  const menagesData = { labels: ["Couples avec enfants", "Familles monoparentales", "Personnes seules", "Autres"],
    datasets: [{ data: [data.menages.couplesAvecEnfants, data.menages.famillesMonoparentales, data.menages.personnesSeules, 100 - data.menages.couplesAvecEnfants - data.menages.famillesMonoparentales - data.menages.personnesSeules],
      backgroundColor: ["#000091", "#E1000F", "#B34000", "#18753C"], borderWidth: 2, borderColor: "#fff" }] };
  const chomageParAnnee = { labels: ["2015", "2020", "2025"],
    datasets: [{ label: "Taux de chômage (%)", data: [data.emploi.tauxChomage2015, data.emploi.tauxChomage2020, data.emploi.tauxChomage2025],
      borderColor: "#000091", backgroundColor: "rgba(0,0,145,0.1)", fill: true, tension: 0.3 }] };
  const pyramideAges = { labels: demo.populationParTranche.map((p) => p.tranche),
    datasets: [
      { label: "Hommes", data: demo.populationParTranche.map((p) => p.hommes), backgroundColor: "#000091" },
      { label: "Femmes", data: demo.populationParTranche.map((p) => p.femmes), backgroundColor: "#E1000F" } ] };
  const evolutionPop = { labels: demo.evolutionQuinquennale.map((e) => e.annee.toString()),
    datasets: [{ label: "Population", data: demo.evolutionQuinquennale.map((e) => e.population),
      borderColor: "#000091", backgroundColor: "rgba(0,0,145,0.1)", fill: true, tension: 0.3 }] };
  const projections = { labels: demo.projections.map((p) => p.annee.toString()),
    datasets: [
      { label: "Central", data: demo.projections.map((p) => p.central), borderColor: "#000091", backgroundColor: "rgba(0,0,145,0.1)", tension: 0.3 },
      { label: "Bas", data: demo.projections.map((p) => p.bas), borderColor: "#18753C", backgroundColor: "rgba(24,117,60,0.1)", tension: 0.3 },
      { label: "Haut", data: demo.projections.map((p) => p.haut), borderColor: "#E1000F", backgroundColor: "rgba(225,0,15,0.1)", tension: 0.3 } ] };
  const statutOccupation = { labels: ["Propriétaires", "Locataires", "Logés gratuitement"],
    datasets: [{ data: [data.menages.partProprietaires, data.menages.partLocataires, data.menages.partLogesGratuit],
      backgroundColor: ["#000091", "#E1000F", "#B34000"], borderWidth: 2, borderColor: "#fff" }] };
  const tailleMenages = { labels: ["1 pers.", "2 pers.", "3 pers.", "4 pers.", "5+ pers."],
    datasets: [{ label: "% des ménages", data: [data.menages.menages1Personne, data.menages.menages2Personnes, data.menages.menages3Personnes, data.menages.menages4Personnes, data.menages.menages5Plus], backgroundColor: "#000091" }] };

  return (
    <>
      <h2 style={{ color: "var(--blue-france)" }}>Société</h2>
      <div className="stats-grid">
        <div className="stat-card"><div className="stat-label">Population totale</div><div className="stat-value">{data.demographie.population.toLocaleString("fr-FR")}</div></div>
        <div className="stat-card"><div className="stat-label">Croissance annuelle</div><div className="stat-value">+{data.demographie.croissanceAnnuelle}%</div></div>
        <div className="stat-card"><div className="stat-label">Indice fécondité</div><div className="stat-value">{data.demographie.fecondite}</div></div>
        <div className="stat-card"><div className="stat-label">Âge moyen</div><div className="stat-value">{data.demographie.ageMoyen} ans</div></div>
        <div className="stat-card"><div className="stat-label">Taille ménage</div><div className="stat-value">{data.menages.tailleMoyenne} pers.</div></div>
        <div className="stat-card"><div className="stat-label">Taux chômage</div><div className="stat-value">{data.emploi.tauxChomage}%</div></div>
        <div className="stat-card"><div className="stat-label">Familles monoparentales</div><div className="stat-value">{data.menages.famillesMonoparentales}%</div></div>
        <div className="stat-card"><div className="stat-label">Espérance de vie (F)</div><div className="stat-value">{data.demographie.esperanceVieFemmes} ans</div></div>
      </div>
      <div className="grid-2">
        <div className="card"><h3>Composition des ménages</h3><div style={{ height: "300px" }}><Doughnut data={menagesData} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { position: "bottom" } } }} /></div></div>
        <div className="card"><h3>Évolution du chômage</h3><div style={{ height: "300px" }}><Line data={chomageParAnnee} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }} /></div></div>
        <div className="card"><h3>Pyramide des âges</h3><div style={{ height: "300px" }}><Bar data={pyramideAges} options={{ responsive: true, maintainAspectRatio: false, indexAxis: "y" as const, plugins: { legend: { position: "bottom" } } }} /></div></div>
        <div className="card"><h3>Évolution démographique (2000-2025)</h3><div style={{ height: "300px" }}><Line data={evolutionPop} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }} /></div></div>
        <div className="card"><h3>Projections (2025-2050)</h3><div style={{ height: "300px" }}><Line data={projections} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { position: "bottom" } } }} /></div></div>
        <div className="card"><h3>Statut d'occupation</h3><div style={{ height: "300px" }}><Doughnut data={statutOccupation} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { position: "bottom" } } }} /></div></div>
        <div className="card"><h3>Taille des ménages</h3><div style={{ height: "300px" }}><Bar data={tailleMenages} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }} /></div></div>
      </div>
      <div className="card">
        <h3>Indicateurs complémentaires</h3>
        <ul className="kpi-list">
          <li><span>Solde naturel</span><strong>+{data.demographie.soldeNaturel.toLocaleString("fr-FR")}</strong></li>
          <li><span>Solde migratoire</span><strong>{data.demographie.soldeMigratoire.toLocaleString("fr-FR")}</strong></li>
          <li><span>Indice de vieillissement</span><strong>{data.demographie.indiceVieillissement}</strong></li>
          <li><span>Nombre de ménages</span><strong>{data.menages.nombreMenages.toLocaleString("fr-FR")}</strong></li>
          <li><span>Part HLM</span><strong>{data.menages.partHLM}%</strong></li>
          <li><span>Taux chômage jeunes</span><strong>{data.emploi.tauxChomageJeunes}%</strong></li>
          <li><span>Taux chômage séniors</span><strong>{data.emploi.tauxChomageSeniors}%</strong></li>
          <li><span>Emplois salariés</span><strong>{data.emploi.emploisSalaries.toLocaleString("fr-FR")}</strong></li>
          <li><span>Part CDI</span><strong>{data.emploi.partCDI}%</strong></li>
          <li><span>Halo chômage</span><strong>{data.emploi.haloChomage.toLocaleString("fr-FR")}</strong></li>
        </ul>
      </div>
    </>
  );
}
