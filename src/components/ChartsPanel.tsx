import { Bar, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend } from "chart.js";
import { useFilterStore } from "../stores/filterStore";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

export function ChartsPanel() {
  const communes = useFilterStore((s) => s.filteredCommunes);
  const sorted = [...communes].sort((a, b) => b.population - a.population).slice(0, 10);

  const barData = {
    labels: sorted.map((c) => c.name),
    datasets: [{ label: "Population", data: sorted.map((c) => c.population), backgroundColor: "#000091" }]
  };
  const doughnutData = {
    labels: sorted.map((c) => c.name),
    datasets: [{
      label: "Parc social", data: sorted.map((c) => c.parcSocial),
      backgroundColor: ["#000091", "#E1000F", "#18753C", "#B34000", "#666666", "#003C8F", "#8B1A1A", "#0F5B2D", "#7A2D00", "#4A4A4A"],
      borderWidth: 2, borderColor: "#fff"
    }]
  };

  return (
    <div className="card">
      <h3>Top 10 communes (population & parc social)</h3>
      <div style={{ height: "230px", marginBottom: "20px" }}>
        <Bar data={barData} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, indexAxis: "y" as const }} />
      </div>
      <div style={{ height: "230px" }}>
        <Doughnut data={doughnutData} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { position: "right", labels: { font: { size: 10 } } } } }} />
      </div>
    </div>
  );
}
