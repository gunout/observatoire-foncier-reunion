import { create } from "zustand";
import { COMMUNES_DATA, type Commune } from "../data/modules-data";

interface FilterState {
  communes: Commune[];
  filteredCommunes: Commune[];
  region: string;
  selectedCommune: string | null;
  setRegion: (region: string) => void;
  selectCommune: (name: string | null) => void;
  applyFilters: () => void;
}

export const useFilterStore = create<FilterState>((set, get) => ({
  communes: COMMUNES_DATA,
  filteredCommunes: COMMUNES_DATA,
  region: "all",
  selectedCommune: null,
  setRegion: (region) => { set({ region }); get().applyFilters(); },
  selectCommune: (selectedCommune) => set({ selectedCommune }),
  applyFilters: () => {
    const { communes, region } = get();
    const filtered = region === "all" ? communes : communes.filter((c) => c.region === region);
    set({ filteredCommunes: filtered });
  }
}));
