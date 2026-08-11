import { useState, useEffect, type Dispatch, type SetStateAction } from 'react';
import { useLocation } from 'react-router-dom';

type TabKey = 'about-me' | 'projects' | 'crafts' | 'blogs';

const validTabs = ['about-me', 'projects', 'crafts', 'blogs'] as const;

const getTabFromPath = (pathname: string): TabKey => {
  const path = pathname.split('/')[1] || 'about-me';
  return validTabs.includes(path as TabKey) ? (path as TabKey) : 'about-me';
};

const useTabStore = (): readonly [TabKey, Dispatch<SetStateAction<TabKey>>] => {
  const { pathname } = useLocation();
  const [currentTab, setCurrentTab] = useState<TabKey>(() => getTabFromPath(pathname));

  useEffect(() => {
    setCurrentTab(getTabFromPath(pathname));
  }, [pathname]);

  return [currentTab, setCurrentTab] as const;
};

export default useTabStore;