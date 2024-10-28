import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Header } from "@/widgets/Header/ui/Header";
import { Footer } from "@/widgets/Footer";
import { Fallback } from "@/shared/ui/fallback";

export function Layout() {
  return (
    <>
      <Header />
      <Suspense fallback={<Fallback />}>
        <Outlet />
      </Suspense>

      <Footer />
    </>
  );
}
