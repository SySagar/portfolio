import { create } from 'zustand'

const usetabStore = create((set) => ({
  currentTab: "home",
  setCurrentTab: (data:any) => set({ currentTab: data }),
}))

export default usetabStore;