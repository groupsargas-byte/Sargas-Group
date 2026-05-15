import { Outlet } from "react-router-dom";
import { Header } from "@/components/site/Header.jsx";
import { Footer } from "@/components/site/Footer.jsx";

export default function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
