import GradientShape from "@/components/custom/GradientShape";
import { useTranslations } from "next-intl";

interface Props {
  title: string;
  description?: string;
}
const Hero = ({ title, description }: Props) => {
  const t = useTranslations("Index");
  return (
    <section className="Hero h-screen flex items-center justify-center flex-col">
      <h3
        className="font-WorkSans max-sm:text-3xl text-4xl sm:text-6xl xl:text-7xl relative font-semibold text-center mx-3"
        dangerouslySetInnerHTML={{ __html: t.raw(title) }}
      />
      {description && (
        <p className="mt-5 opacity-70 max-sm:mx-3 max-sm:text-center">
          {t(description)}
        </p>
      )}
      <GradientShape />
    </section>
  );
};

export default Hero;
