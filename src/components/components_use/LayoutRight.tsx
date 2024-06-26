"use client";
import { useI18n } from "@/locales/config/client";
import { Button } from "../ui/button";
import MasonryResponsive from "./base/masonry/MassonryResponsive";
import Masonry from "./base/masonry/Masonry";

const LineBase = ({ text }: { text: string }) => {
  return (
    <>
      <div className="flex justify-end pb-1">
        <p className="text-2xl font-medium">{text}</p>
      </div>
      <div className="w-full h-[1.5px] bg-black mb-1" />
      <div className="w-full h-1 bg-black" />
    </>
  );
};

const Experience = () => {
  const t = useI18n();
  return (
    <div className="w-full">
      <LineBase text={t("EXPERIENCE")} />
      <div className="py-4 border-b-[1px] border-b-slate-300">
        <div className="flex justify-between items-center">
          <p className="font-semibold">VivooGlobal</p>
          <p className="font-semibold">05/2021-01/2022 -- 10/2023-PRESENT</p>
        </div>
        <div className="flex justify-end">
          <p className="text-sm font-semibold">FRONTEND DEVELOPER</p>
        </div>
        <div>
          <p className="text-justify py-2">
            {t(
              "Create and edit outsource projects as required, and research customer experience with products. I also constantly learn and apply new technologies to improve the quality of work."
            )}
          </p>
        </div>
      </div>
      <div className="py-4">
        <div className="flex justify-between items-center">
          <p className="font-semibold">BKAV</p>
          <p className="font-semibold">01/2022 - 10/2023</p>
        </div>
        <div className="flex justify-end">
          <p className="text-sm font-semibold">FRONTEND DEVELOPER</p>
        </div>
        <div>
          <p className="text-justify py-2">
            {t(
              "Creating projects for product. Develop individual modules, integrate and test to ensure quality and performance."
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

const Education = () => {
  const t = useI18n();
  return (
    <div className="w-full">
      <LineBase text={t("EDUCATION")} />
      <div className="pt-4">
        <div className="flex justify-between items-center">
          <p className="font-medium">{t("Electric Power University")}</p>
          <p className="font-medium">2018-2023</p>
        </div>
        <p className="py-3">
          <span className="font-medium">{t("Major:")}</span>{" "}
          <span>{t("Network security management")}</span>
        </p>
        <p className="py-3">
          <span className="font-medium">GPA: </span> <span>2.96/4.00</span>
        </p>
      </div>
    </div>
  );
};

const Skills = () => {
  const t = useI18n();
  return (
    <div className="w-full">
      <LineBase text={t("SKILLS")} />
      <div className="mt-4">
        <ul className="list-disc list-inside">
          <li>{t("Strong proficiency in HTML, JavaScript/TypeScript.")}</li>
          <li>
            {t(
              "Demonstrated experience with React.js, ReactNative, Next.js frameworks."
            )}
          </li>
          <li>
            {t(
              "Have good knowledge of layout techniques and framework Material UI, Shadcn UI, Ant design, TailwindCss..."
            )}
          </li>
          <li>{t("Experienced in handling responsive browsers.")}</li>
          <li>
            {t("Some other technologies may be used")} Zustand, TanstakQuery,
            ExpressJS,...
          </li>
          <li>
            {t("Website interface construction, read and search documents.")}
          </li>
        </ul>
      </div>
    </div>
  );
};

const Hobby = () => {
  const t = useI18n();
  return (
    <div className="w-full">
      <LineBase text={t("HOBBY")} />
      <div className="pt-4">
        <p className="text-justify text-sm leading-6">
          {t(
            "I am a person who likes challenges and undertakes the most advanced projects for learning and commitment."
          )}
        </p>
        <div className="pt-4 flex flex-wrap items-center gap-2">
          <Button
            variant={"outline"}
            className="h-6 font-medium rounded-full cursor-default hover:bg-inherit"
          >
            {t("FOOTBALL")}
          </Button>
          <Button
            variant={"outline"}
            className="h-6 font-medium rounded-full cursor-default hover:bg-inherit"
          >
            {t("RAP MUSIC")}
          </Button>
          <Button
            variant={"outline"}
            className="h-6 font-medium rounded-full cursor-default hover:bg-inherit"
          >
            {t("DEVELOPMENT")}
          </Button>
          <Button
            variant={"outline"}
            className="h-6 font-medium rounded-full cursor-default hover:bg-inherit"
          >
            {t("TECHNOLOGY")}
          </Button>
          <Button variant={"outline"} className="h-6 font-medium">
            {t("INVESTMENTS")}
          </Button>
          <Button variant={"outline"} className="h-6 font-medium">
            {t("PLAY GAME")}
          </Button>
        </div>
      </div>
    </div>
  );
};

const LayoutRight = () => {
  const t = useI18n();

  return (
    <div className="w-2/3 pl-20">
      <Experience />
      <MasonryResponsive columnsCountBreakPoints={{ 768: 1, 769: 2, 1441: 2 }}>
        <Masonry columnsCount={2} gutter="24px">
          <Education />
          <Hobby />
          <Skills />
        </Masonry>
      </MasonryResponsive>
    </div>
  );
};

export default LayoutRight;
