import { useTranslations } from "next-intl";
import Image from "next/image";

const Diff = () => {
  const t = useTranslations("Index.Diff");
  return (
    <section className="Diff mt-10">
      <div className="Block1 flex items-center justify-center flex-wrap xl:gap-20 mb-32">
        <div className="Text mb-10">
          <h4 className="text-3xl font-WorkSans font-semibold mb-10">
            {t("diff1.title")}
          </h4>
          <div className="font-WorkSans max-w-[500px]">
            <ul>
              {[1, 2, 3, 4].map((el) => (
                <li key={el} className="mb-5">
                  <b>{t(`diff1.args.arg${el}.title`)}</b>
                  <p>{t(`diff1.args.arg${el}.description`)}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Image
          src={`/images/Diff1Stress.svg`}
          alt="Descriptions 1"
          className="2xl:w-auto sm:w-[500px] max-sm:w-full"
          width={762}
          height={505}
        />
      </div>
      <div className="Block2 flex items-center justify-center flex-wrap xl:gap-20 mb-32">
        <Image
          src={`/images/Diff2AIRobot.svg`}
          alt="Descriptions 1"
          className="2xl:w-auto sm:w-[500px] max-sm:w-full"
          width={762}
          height={505}
        />
        <div className="Text mb-10">
          <h4 className="text-3xl font-WorkSans font-semibold mb-10">
            {t("diff2.title")}
          </h4>
          <div className="font-WorkSans max-w-[500px]">
            <ul>
              {[1, 2, 3, 4].map((el) => (
                <li key={el} className="mb-5">
                  <b>{t(`diff2.args.arg${el}.title`)}</b>
                  <p>{t(`diff2.args.arg${el}.description`)}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diff;
