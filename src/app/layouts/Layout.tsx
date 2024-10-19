import { Outlet } from "react-router-dom";
import { Header } from "@/widgets/Header/ui/Header";
import { Footer } from "@/widgets/Footer";

export function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
