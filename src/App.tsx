import { useState } from "react";
import { Header } from "./components/Header";
import { StatsGrid } from "./components/StatsGrid";
import { MapView } from "./components/MapView";
import { ChartsPanel } from "./components/ChartsPanel";
import { DataTable } from "./components/DataTable";
import { MarketModule } from "./components/MarketModule";
import { SocietyModule } from "./components/SocietyModule";
import { EconomyModule } from "./components/EconomyModule";
import { RiskModule } from "./components/RiskModule";

type Tab = "overview" | "market" | "society" | "economy" | "risks";

const TABS: { key: Tab; label: string }[] = [
  { key: "overview", label: "Vue d'ensemble" },
  { key: "market",   label: "Marché & Foncier" },
  { key: "society",  label: "Société" },
  { key: "economy",  label: "Économie & Emploi" },
  { key: "risks",    label: "Risques & Environnement" }
];

export default function App() {
  const [tab, setTab] = useState<Tab>("overview");
  return (
    <>
      <Header />
      <div className="container">
        <h1 style={{ color: "var(--blue-france)" }}>Observatoire Foncier — La Réunion 2025</h1>
        <p style={{ color: "var(--grey-600)" }}>24 communes · 5 modules · Sources : INSEE RP 2023, ARMOS OI 2026, Notaires 2026.</p>
        <div className="tabs">
          {TABS.map((t) => (
            <button key={t.key} onClick={() => setTab(t.key)} className={`tab-btn ${tab === t.key ? "active" : ""}`}>{t.label}</button>
          ))}
        </div>
        {tab === "overview" && (<><StatsGrid /><div className="grid-2"><MapView /><ChartsPanel /></div><div style={{ marginTop: "20px" }}><DataTable /></div></>)}
        {tab === "market"  && <MarketModule />}
        {tab === "society" && <SocietyModule />}
        {tab === "economy" && <EconomyModule />}
        {tab === "risks"   && <RiskModule />}
      </div>
    </>
  );
}
