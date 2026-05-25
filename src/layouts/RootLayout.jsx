import { Outlet } from "react-router-dom";
import { Header } from "@/components/site/Header.jsx";
import { Footer } from "@/components/site/Footer.jsx";
import { ScrollToTop } from "@/components/site/ScrollToTop.jsx";
import { PageTransition } from "@/components/site/PageTransition.jsx";
import { GtagPageView } from "@/components/site/GtagPageView.jsx";

export default function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <GtagPageView />
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
    </div>
  );
}
