import { cn } from "@/lib/utils";
import { useChangeLocale, useCurrentLocale } from "@/locales/config/client";
import { IconBrandCodepen } from "@tabler/icons-react";
import { Button } from "../ui/button";

const Header = () => {
  const currentLocale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  const handleChangeLocale = (locale: "vi" | "en") => {
    changeLocale(locale);
  };

  const handleScrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="relative w-full px-10 py-3 flex justify-between items-center">
      <Button
        variant={"ghost"}
        onClick={handleScrollToTop}
        className="hover:bg-inherit"
      >
        <IconBrandCodepen size={54} stroke={1} className="cursor-pointer" />
      </Button>
      <div className="flex items-center gap-2">
        <Button
          variant={"ghost"}
          onClick={() => handleChangeLocale("vi")}
          className={cn(currentLocale === "vi" && "underline")}
        >
          VI
        </Button>
        <Button
          variant={"ghost"}
          onClick={() => handleChangeLocale("en")}
          className={cn(currentLocale === "en" && "underline")}
        >
          EN
        </Button>
      </div>
      <div className="absolute w-full h-px bg-slate-300 bottom-0 left-0"></div>
    </div>
  );
};

export default Header;
