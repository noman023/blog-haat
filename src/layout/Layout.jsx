import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="container mx-auto px-3 flex flex-col min-h-screen">
      <div className="flex-grow">
        <h1>Navbar</h1>

        <Outlet />
      </div>

      <footer>This if footer!</footer>
    </div>
  );
}
