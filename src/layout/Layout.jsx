import { Outlet } from "react-router-dom";
import NavComponent from "../components/Navbar";

export default function RootLayout() {
  return (
    <div className="container mx-auto px-3 flex flex-col min-h-screen">
      <div className="flex-grow">
        <NavComponent />

        <Outlet />
      </div>

      <footer>This if footer!</footer>
    </div>
  );
}
