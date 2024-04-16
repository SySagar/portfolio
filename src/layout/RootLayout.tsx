import BottomNav from "@/components/standard/BottomNav";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { validRoutes } from "@/lib/constants/validRoutes";
import usenavStore from "@/store/navStore";
import usetabStore from "@/store/tabStore";
import { HelmetProvider } from "react-helmet-async";

export default function RootLayout() {
  const location = useLocation();
  const [isVisibleNavbar, setVisibility] = usenavStore((state: any) => [
    state.isVisibleNavbar,
    state.setVisibility,
  ]);

  const [currentTab] = usetabStore((state: any) => [state.currentTab]);

  const handleBackButton = () => {
    if (validRoutes.includes(location.pathname)) {
      setVisibility(true);
    } else setVisibility(false);
  };

  useEffect(() => {
    handleBackButton();

    window.addEventListener("popstate", handleBackButton);

    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, [location.pathname]);

  return (
    <HelmetProvider>
      <div className="relative">
        <div>
          <Outlet />
        </div>
        {isVisibleNavbar && (
          <div className="">
            <BottomNav />
          </div>
        )}
      </div>
    </HelmetProvider>
  );
}
