import BottomNav from "@/components/standard/BottomNav";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { validRoutes } from "@/lib/constants/validRoutes";
import usenavStore from "@/store/navStore";
import { HelmetProvider } from "react-helmet-async";

export default function RootLayout() {
  const location = useLocation();
  const [isVisibleNavbar, setVisibility] = usenavStore((state: any) => [
    state.isVisibleNavbar,
    state.setVisibility,
  ]);



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
          <div className="blob1  sm:left-[150px] left-[-350px]"></div>

          <div className="blob2 sm:left-[1200px] left-[-350px] sm:top-[-100px] "></div>

          <div className="blob3 sm:top-[380px] sm:left-[800px] top-[400px] left-[80px]"></div>
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
