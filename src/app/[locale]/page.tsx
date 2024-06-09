"use client";
import LayoutLeft from "@/components/components_use/LayoutLeft";
import LayoutRight from "@/components/components_use/LayoutRight";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/locales/config/client";
import {
  IconArrowBackUp,
  IconArrowBadgeUp,
  IconBrandFacebook,
  IconBrandGoogle,
} from "@tabler/icons-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const t = useI18n();

  const [showBtnToTop, setShowBtnToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setShowBtnToTop(true);
      } else {
        setShowBtnToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  return (
    <div className="relative">
      {showBtnToTop && (
        <div className="absolute -right-36 bottom-0">
          <Button
            variant={"outline"}
            size={"icon"}
            className="h-10 w-10 rounded-full border-slate-700"
            onClick={handleScrollToTop}
          >
            <IconArrowBadgeUp />
          </Button>
        </div>
      )}

      <div className="mt-6">
        <h1 className="text-4xl font-medium">FRONTEN DEVELOPER</h1>
        <div className="flex justify-between items-center">
          <p>
            <span className="text-4xl font-medium">{t("PASSION AND")}</span>{" "}
            <span className="italic underline text-4xl font-semibold">
              {t("EXPERIENCE.")}
            </span>
          </p>
          <div className="flex items-center gap-3">
            <Button
              variant={"outline"}
              size={"icon"}
              className="rounded-full"
              asChild
            >
              <Link
                href={"https://www.facebook.com/nam.notfake/"}
                target="_blank"
              >
                <IconBrandFacebook size={24} stroke={1} />
              </Link>
            </Button>
            <Button variant={"outline"} size={"icon"} className="rounded-full">
              <Link href={"https://s.net.vn/IemP"} target="_blank">
                <IconBrandGoogle size={24} stroke={1} />
              </Link>
            </Button>
          </div>
        </div>
        <div className="w-full flex items-start mt-6">
          <LayoutLeft />
          <LayoutRight />
        </div>
      </div>
    </div>
  );
}
