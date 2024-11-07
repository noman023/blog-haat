import { Outlet } from "react-router-dom";

import NavComponent from "../components/Navbar";
import FooterComponent from "../components/Footer";

export default function RootLayout() {
  return (
    <div className="container mx-auto px-3 flex flex-col min-h-screen">
      <div className="flex-grow">
        <NavComponent />

        <div className="my-12">
          <Outlet />
        </div>
      </div>

      <FooterComponent />
    </div>
  );
}
