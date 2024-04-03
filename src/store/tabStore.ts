import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const usetabStore = create(
  persist((set) => ({
  currentTab: "home",
  setCurrentTab: (data:any) => set({ currentTab: data }),
}),{
  name: 'tab-storage',
  getStorage: () => sessionStorage,
}))

export default usetabStore;