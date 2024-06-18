import { useState, useEffect,Dispatch, SetStateAction  } from 'react';
import { useLocation } from 'react-router-dom';

const usetabStore = (): [string, Dispatch<SetStateAction<string>>] => {
  const location = useLocation();
  const [currentTab, setCurrentTab] = useState('');

  useEffect(() => {
    const path = location.pathname.split('/')[1]; 
    if (path) {
      setCurrentTab(path);
    } else {
      setCurrentTab('home');
    }
  }, [location]);

  return [currentTab, setCurrentTab];
};

export default usetabStore;