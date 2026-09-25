import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useFilterStore } from "../stores/filterStore";

export function MapView() {
  const communes = useFilterStore((s) => s.filteredCommunes);
  const selectCommune = useFilterStore((s) => s.selectCommune);
  const center: [number, number] = [-21.115, 55.536];

  function color(social: number) {
    if (social > 30) return "#E1000F";
    if (social > 15) return "#B34000";
    return "#18753C";
  }

  return (
    <div className="card">
      <h3>Carte du parc social ({communes.length} communes)</h3>
      <MapContainer center={center} zoom={9} style={{ height: "480px", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png" attribution="&copy; OpenStreetMap France" />
        {communes.map((c) => (
          <CircleMarker key={c.code} center={[c.lat, c.lng]} radius={7 + c.population / 20000}
            pathOptions={{ fillColor: color(c.partLogementsSociaux), color: "#fff", weight: 2, fillOpacity: 0.85 }}
            eventHandlers={{ click: () => selectCommune(c.name) }}>
            <Popup>
              <strong>{c.name}</strong><br />
              Population : {c.population.toLocaleString("fr-FR")} hab.<br />
              Parc social : {c.parcSocial.toLocaleString("fr-FR")} logements<br />
              Part : {c.partLogementsSociaux} % des résidences principales<br />
              {c.prixMedian && <>Prix médian : {c.prixMedian.toLocaleString("fr-FR")} €/m²<br /></>}
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
}
