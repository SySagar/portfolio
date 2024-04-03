import { create } from 'zustand'

const usenavStore = create((set) => ({
  isVisibleNavbar: true,
  setVisibility: (data:any) => set({ isVisibleNavbar: data }),
}))

export default usenavStore;