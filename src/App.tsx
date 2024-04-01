import './App.css';
import { RouterProvider } from "react-router-dom";
import router from './routes';
import usetabStore from "@/store/tabStore";

function App() {
  
  const [currentTab, setCurrentTab] = usetabStore((state:any) => [state.currentTab, state.setCurrentTab])
  console.log("from app",currentTab)

  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default App
