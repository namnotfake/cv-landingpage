"use client";
import Footer from "@/components/components_use/Footer";
import Header from "@/components/components_use/Header";
import utilState from "@/lib/stores/utilState.store";
import { I18nProviderClient } from "@/locales/config/client";
import { useEffect } from "react";

const LayoutClient = ({
  params,
  children,
}: {
  params: { locale: string };
  children: React.ReactNode;
}) => {
  const _utilState = utilState();

  useEffect(() => {
    const handleResize = () => {
      _utilState.setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [_utilState.isMobile]);

  return (
    <I18nProviderClient locale={params.locale}>
      <main className="flex flex-col justify-center items-center">
        <Header />
        <div className="w-11/12 md:w-2/3 mt-14">{children}</div>
        <Footer />
      </main>
    </I18nProviderClient>
  );
};

export default LayoutClient;
