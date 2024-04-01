import BottomNav from "@/components/standard/BottomNav";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="relative">
    <div>
    <Outlet />
    </div>
    <div className="">
            <BottomNav />
        </div>
    </div>
  )
}
