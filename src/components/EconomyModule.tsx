import { Doughnut, Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { ECONOMY_DATA } from "../data/modules-data";

ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export function EconomyModule() {
  const data = ECONOMY_DATA;

  const marcheData = { labels: ["En emploi", "Chômeurs BIT", "Sous-emploi", "Halo chômage", "Étudiants", "Autres inactifs"],
    datasets: [{ data: [data.marcheTravail.personnesEnEmploi, data.marcheTravail.chomeursBIT, data.marcheTravail.sousEmploi, data.marcheTravail.inactifsHalo, data.marcheTravail.etudiants, 100 - data.marcheTravail.personnesEnEmploi - data.marcheTravail.chomeursBIT - data.marcheTravail.sousEmploi - data.marcheTravail.inactifsHalo - data.marcheTravail.etudiants],
      backgroundColor: ["#18753C", "#E1000F", "#B34000", "#FEDD00", "#000091", "#666666"], borderWidth: 2, borderColor: "#fff" }] };
  const secteursData = { labels: Object.keys(data.emploiSalarie.secteursDetail),
    datasets: [{ label: "% de l'emploi salarié", data: Object.values(data.emploiSalarie.secteursDetail), backgroundColor: "#000091" }] };
  const modesTransport = { labels: ["Voiture", "Transport commun", "Marche", "Deux-roues", "Vélo"],
    datasets: [{ data: [data.mobilites.partVoiture, data.mobilites.partTransportCommun, data.mobilites.partMarche, data.mobilites.partDeuxRoues, data.mobilites.partVelo],
      backgroundColor: ["#E1000F", "#000091", "#18753C", "#B34000", "#666666"], borderWidth: 2, borderColor: "#fff" }] };

  return (
    <>
      <h2 style={{ color: "var(--blue-france)" }}>Économie & Emploi</h2>
      <div className="stats-grid">
        <div className="stat-card"><div className="stat-label">Véhicules légers</div><div className="stat-value">{data.mobilites.vehiculesLegers.toLocaleString("fr-FR")}</div></div>
        <div className="stat-card"><div className="stat-label">Taux motorisation</div><div className="stat-value">{data.mobilites.tauxMotorisation}%</div></div>
        <div className="stat-card"><div className="stat-label">Voyageurs TC / an</div><div className="stat-value">{(data.mobilites.voyagesTransportCollectif / 1000000).toFixed(1)} M</div></div>
        <div className="stat-card"><div className="stat-label">Pistes cyclables</div><div className="stat-value">{data.mobilites.kmAmenagementsCyclables} km</div></div>
        <div className="stat-card"><div className="stat-label">Population active</div><div className="stat-value">{data.marcheTravail.populationActive.toLocaleString("fr-FR")}</div></div>
        <div className="stat-card"><div className="stat-label">Taux d'activité</div><div className="stat-value">{data.marcheTravail.tauxActivite}%</div></div>
        <div className="stat-card"><div className="stat-label">Temps trajet moyen</div><div className="stat-value">{data.mobilites.tempsTrajetMoyen} min</div></div>
        <div className="stat-card"><div className="stat-label">Budget transport / an</div><div className="stat-value">{data.mobilites.budgetMenageTransport.toLocaleString("fr-FR")} €</div></div>
      </div>
      <div className="grid-2">
        <div className="card"><h3>Répartition du marché du travail</h3><div style={{ height: "320px" }}><Doughnut data={marcheData} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { position: "bottom" } } }} /></div></div>
        <div className="card"><h3>Secteurs d'activité</h3><div style={{ height: "320px" }}><Bar data={secteursData} options={{ responsive: true, maintainAspectRatio: false, indexAxis: "y" as const, plugins: { legend: { display: false } } }} /></div></div>
        <div className="card"><h3>Modes de transport</h3><div style={{ height: "320px" }}><Doughnut data={modesTransport} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { position: "bottom" } } }} /></div></div>
        <div className="card">
          <h3>Secteurs en croissance / baisse</h3>
          <h4 style={{ color: "var(--green)", marginTop: "16px" }}>En croissance</h4>
          <ul className="kpi-list">{data.emploiSalarie.secteursEnCroissance.map((s) => <li key={s}><span>{s}</span></li>)}</ul>
          <h4 style={{ color: "var(--red-marianne)" }}>En baisse</h4>
          <ul className="kpi-list">{data.emploiSalarie.secteursEnBaisse.map((s) => <li key={s}><span>{s}</span></li>)}</ul>
        </div>
      </div>
      <div className="card">
        <h3>Indicateurs complémentaires</h3>
        <ul className="kpi-list">
          <li><span>Taux d'activité femmes</span><strong>{data.marcheTravail.tauxActiviteFemmes}%</strong></li>
          <li><span>Taux d'activité hommes</span><strong>{data.marcheTravail.tauxActiviteHommes}%</strong></li>
          <li><span>Part temps partiel</span><strong>{data.marcheTravail.partTempsPartiel}%</strong></li>
          <li><span>Temps partiel subi</span><strong>{data.marcheTravail.partTempsPartielSubi}%</strong></li>
          <li><span>Trajets covoiturage / an</span><strong>{data.mobilites.trajetsCovoiturage.toLocaleString("fr-FR")}</strong></li>
          <li><span>Véhicules neufs importés</span><strong>{data.mobilites.vehiculesNeufsImportes.toLocaleString("fr-FR")}</strong></li>
          <li><span>Voyageurs aériens / an</span><strong>{(data.mobilites.voyageursAeriens / 1000000).toFixed(1)} M</strong></li>
          <li><span>Bornes de recharge</span><strong>{data.mobilites.bornesRecharge}</strong></li>
          <li><span>Km réseau routier</span><strong>{data.mobilites.kmReseauRoutier.toLocaleString("fr-FR")}</strong></li>
          <li><span>Lignes TC</span><strong>{data.mobilites.lignesTC}</strong></li>
        </ul>
      </div>
    </>
  );
}
