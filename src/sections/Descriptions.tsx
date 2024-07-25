import { useTranslations } from "next-intl";
import Image from "next/image";

const Descriptions = () => {
  const t = useTranslations("Index.Descriptions");
  return (
    <section className="Descriptions">
      <div className="Block1 flex items-center justify-center flex-wrap xl:gap-20 mb-32">
        <div className="Text mb-10">
          <h4 className="text-3xl font-WorkSans font-semibold">
            {t("desc1.title")}
          </h4>
          <p className="font-WorkSans opacity-70 max-w-[500px]">
            {t("desc1.description")}
          </p>
        </div>

        <Image
          src={`/images/Desc1.png`}
          alt="Descriptions 1"
          className="2xl:w-auto sm:w-[500px] max-sm:w-full"
          width={762}
          height={505}
        />
      </div>
      <div className="Block2 flex items-center justify-center flex-wrap-reverse sm:gap-5 xl:gap-20 mb-32">
        <Image
          src={`/images/Desc1.png`}
          alt="Descriptions 2"
          className="2xl:w-auto sm:w-[500px] max-sm:w-full"
          width={762}
          height={505}
        />
        <div className="Text mb-10">
          <h4 className="text-3xl font-WorkSans font-semibold">
            {t("desc2.title")}
          </h4>
          <p className="font-WorkSans opacity-70 max-w-[500px]">
            {t("desc2.description")}
          </p>
        </div>
      </div>
      <div className="Block3 flex items-center justify-center flex-wrap xl:gap-20 mb-32">
        <div className="Text mb-10">
          <h4 className="text-3xl font-WorkSans font-semibold">
            {t("desc3.title")}
          </h4>
          <p className="font-WorkSans opacity-70 max-w-[500px]">
            {t("desc3.description")}
          </p>
        </div>

        <Image
          src={`/images/Desc3.png`}
          alt="Descriptions 3"
          className="2xl:w-auto sm:w-[500px] max-sm:w-full"
          width={762}
          height={505}
        />
      </div>
    </section>
  );
};

export default Descriptions;
