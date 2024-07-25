import GradientShape from "@/components/custom/GradientShape";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";

const keys = [
  "24_7_xizmat",
  "tezkor_muloqot",
  "ideal_xizmat",
  "oylik_hisobotlar",
  "til_qollab_quvatlash",
  "avto_qongiroqlar",
];

const GridBox = () => {
  const t = useTranslations("Index.GridBox");
  return (
    <section className="GridBox">
      <div className="Text w-full  top-0 flex items-center justify-center flex-col">
        <h5 className="font-WorkSans font-semibold text-center text-4xl relative">
          {t("title")}
        </h5>
        <GradientShape />
        <div className="Grid grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-12 xl:w-[70%]">
          {keys.map((el) => (
            <Card key={el} className="">
              <CardHeader>
                <CardTitle>{t(`Services.${el}.title`)}</CardTitle>
              </CardHeader>
              <CardContent>{t(`Services.${el}.description`)}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GridBox;
