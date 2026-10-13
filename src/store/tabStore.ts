import { create } from 'zustand';

export type TabKey = 'home' | 'about-me' | 'projects' | 'crafts' | 'blogs' | 'github' | 'leetcode' | 'twitter';

const validTabs = ['home', 'about-me', 'projects', 'crafts', 'blogs', 'github', 'leetcode', 'twitter'] as const;

export const getTabFromPath = (pathname: string): TabKey => {
  const path = pathname.split('/')[1] || 'about-me';
  return validTabs.includes(path as TabKey) ? (path as TabKey) : 'about-me';
};

interface TabStore {
  currentTab: TabKey;
  setCurrentTab: (tab: TabKey) => void;
}

const useTabStore = create<TabStore>((set) => ({
  currentTab: 'about-me',
  setCurrentTab: (currentTab: TabKey) => set({ currentTab }),
}));

export default useTabStore;