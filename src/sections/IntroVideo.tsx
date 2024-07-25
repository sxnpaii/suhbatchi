import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";

const data = [
  {
    img: "/images/icons/Image.svg",
    trKey: "feature1",
  },
  {
    img: "/images/icons/Image-1.svg",
    trKey: "feature2",
  },
  {
    img: "/images/icons/assistant-1.svg",
    trKey: "feature3",
  },
  {
    img: "/images/icons/voice-1.svg",
    trKey: "feature4",
  },
  {
    img: "/images/icons/chat.svg",
    trKey: "feature5",
  },
];
const IntroVideo = () => {
  const t = useTranslations("Index.Features");
  return (
    <>
      <section className="VideoAbout flex flex-col items-center justify-center bg-[#58718e] pt-12">
        <div className="grid sm:grid-cols-3 grid-cols-2 md:grid-cols-5 gap-9">
          {data &&
            data.map((el) => (
              <div className="featuree flex flex-col items-center" key={el.img}>
                <Image
                  src={el.img}
                  alt="Icon"
                  width={30}
                  height={30}
                />
                <p className="font-WorkSans mt-3 max-sm:text-xs">
                  {t(`${el.trKey}`)}
                </p>
              </div>
            ))}
        </div>
        <div className="IntroVideo mt-10">
          <iframe
            className="lg:w-[828px] lg:h-[465px] sm:w-[600px] sm:h-[350px] w-[420px] h-[225px] max-sm:w-[320px] max-sm:h-[220px] mb-10"
            src="https://www.youtube.com/embed/fjHtjT7GO1c?si=bSfCVLvajivpg-FM"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      <section className="Features grid md:w-[70%] max-md:w-[90%] gap-5 mt-5 mx-auto md:flex md:items-center md:justify-evenly h-[200px] max-sm:flex-col">
        <Button size={"lg"} variant={"secondary"} className={cn(`cursor-text`)}>
          {t("featureWithEmoji.feature1").toUpperCase()}
        </Button>
        <Button size={"lg"} variant={"secondary"} className={cn(`cursor-text`)}>
          {t("featureWithEmoji.feature2").toUpperCase()}
        </Button>
        <Button size={"lg"} variant={"secondary"} className={cn(`cursor-text`)}>
          {t("featureWithEmoji.feature3").toUpperCase()}
        </Button>
        <Button size={"lg"} variant={"secondary"} className={cn(`cursor-text`)}>
          {t("featureWithEmoji.feature4").toUpperCase()}
        </Button>
      </section>
    </>
  );
};

export default IntroVideo;
