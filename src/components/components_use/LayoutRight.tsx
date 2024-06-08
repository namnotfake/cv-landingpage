"use client";
import { useI18n } from "@/locales/config/client";

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
    </div>
  );
};

const Education = () => {
  const t = useI18n();
  return (
    <div className="w-full">
      <LineBase text={t("EDUCATION")} />
    </div>
  );
};

const Skills = () => {
  const t = useI18n();
  return (
    <div className="w-full">
      <LineBase text={t("SKILLS")} />
    </div>
  );
};

const Hobby = () => {
  const t = useI18n();
  return (
    <div className="w-full">
      <LineBase text={t("HOBBY")} />
    </div>
  );
};

const LayoutRight = () => {
  const t = useI18n();

  return (
    <div className="w-2/3 pl-20">
      <Experience />
      <div className="grid grid-cols-2 gap-10 mt-6">
        <Education />
        <Hobby />
        <Skills />
      </div>
    </div>
  );
};

export default LayoutRight;
